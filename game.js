const config = {
  width: 1000,
  height: 600,
  type: Phaser.WEBGL,
  //backgroundColor: '#653592', //couleur test
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },

  //ajouter les autres scènes au fur et à mesure
  scene: [
    SceneMenu,
    SceneAbout,
    SceneCredits,
    SceneDepart,
    SceneInstructions,
    SceneMariage,
    SceneEnfants,
    SceneMobilite,
    ScenePromotion,
    SceneRejouer,
    SceneReprise,
    SceneRetour,
    ScenePression,
    SceneGrossesse,
    SceneMaternite,
  ],
};

const GetValue = Phaser.Utils.Objects.GetValue;
const COLOR_PRIMARY = 000000;
const COLOR_LIGHT = 000000;
const COLOR_DARK = 000000;

//---------- Fonctions pour les textBoxes -------------

function creerTextBox(scene, content, maxLines) {
  let textBox = createTextBox(scene, 230, 110, {
    wrapWidth: 400,
    maxLines: maxLines,
  }).start(content, 50);
  return textBox;
}

function createTextBox(scene, x, y, config) {
  let wrapWidth = GetValue(config, 'wrapWidth', 0);
  let fixedWidth = GetValue(config, 'fixedWidth', 0);
  let fixedHeight = GetValue(config, 'fixedHeight', 0);
  let maxLines = GetValue(config, 'maxLines', 0);
  //console.log(scene.rexUI);
  let textBox = scene.rexUI.add
    .textBox({
      x: x,
      y: y,
      /*code couleur : 
      rouge : 0xd50000
      vert : 0x00c853
      bleu : 0x304ffe*/

      background: scene.rexUI.add
        .roundRectangle(0, 0, 2, 2, 20, 000000)
        .setStrokeStyle(2, 0x304ffe),

      icon: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 20, 0x00c853),

      //text: getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),
      text: getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight, maxLines),

      action: scene.add
        .image(0, 0, 'nextPage')
        .setTint(0x00c853)
        .setVisible(false),

      space: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
        icon: 10,
        text: 10,
      },
    })
    .setOrigin(0)
    .layout();

  textBox
    .setInteractive()
    .on(
      'pointerdown',
      function () {
        let icon = this.getElement('action').setVisible(false);
        this.resetChildVisibleState(icon);
        if (this.isTyping) {
          this.stop(true);
        } else {
          this.typeNextPage();
        }
      },
      textBox
    )
    .on(
      'pageend',
      function () {
        if (this.isLastPage) {
          return;
        }

        let icon = this.getElement('action').setVisible(true);
        this.resetChildVisibleState(icon);
        icon.y -= 30;
        let tween = scene.tweens.add({
          targets: icon,
          y: '+=30', // '+=100'
          ease: 'Bounce', // 'Cubic', 'Elastic', 'Bounce', 'Back'
          duration: 500,
          repeat: 0, // -1: infinity
          yoyo: false,
        });
      },
      textBox
    );
  //.on('type', function () {
  //})

  return textBox;
}

function getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight, maxLines) {
  return scene.rexUI.add.BBCodeText(0, 0, '', {
    fixedWidth: fixedWidth,
    fixedHeight: fixedHeight,

    fontSize: '20px',
    wrap: {
      mode: 'word',
      width: wrapWidth,
    },
    maxLines: maxLines,
  });
}


//--------- PLUGIN REXUI --------->

function chargerPlugin(scene) {
  scene.load.scenePlugin({
    key: 'rexuiplugin',
    url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
    sceneKey: 'rexUI',
  });
  scene.load.image(
    'nextPage',
    'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/arrow-down-left.png'
  );
}

//--------- Autres fonctions -----------

function changerPage(scene, contenu, sceneSuivante) {
  let boutonNext = scene.add.text(860, 535, contenu, {fontSize: '25px'});
  boutonNext.setInteractive();
  boutonNext.on('pointerdown', () => scene.scene.start(sceneSuivante));
  return boutonNext;
}

//---------- FONCTIONS QUI GERENT LES BOUTONS --------

function creerBouton(scene, visibilité, x, y, content /*, nomScene*/) {
  let bouton = scene.add.text(x, y, content, {fontSize: '20px'});
  bouton.setInteractive();
  bouton.setVisible(visibilité);
  //bouton.on('pointerdown', () => name.scene.start(nomScene));
  return bouton;
}

function boutonMenu(scene) {
  let boutonMenu = scene.add.text(20, 30, 'RETOUR AU MENU', {fontSize: '25px'});
  boutonMenu.setInteractive();
  boutonMenu.on('pointerdown', () => scene.scene.start('accueil'));
}

//-----------FONCTIONS QUI GERENT LA TIMEBAR ---------
let countBar = 1;

function timeBar(scene, x, y) {
  scene.add.image(750, 550, 'oldWoman').setScale(0.4);
  scene.add.image(230, 550, 'happyFace').setScale(0.4);
  scene.zone = scene.add.zone((x = config.width / 2.05), (y = 550));
  let barContainer = scene.add.image(x, y, 'containerBar');
  let bar = scene.add.image(x, y, 'blueBar');

  scene.barMask = scene.add.sprite(bar.x, bar.y, 'blueBar');
  scene.barMask.visible = false;
  bar.mask = new Phaser.Display.Masks.BitmapMask(scene, scene.barMask);

  let stepWidth = scene.barMask.displayWidth / countBar;

  countBar *= 1.2; //A DETERMINER EN FONCTION DU NOMBRE DE FOIS QUE L'ON VA APPELER CETTE FONCTION

  scene.barMask.x -= stepWidth;
  //bar.x = stepWidth

  return bar + barContainer;
}

//MAXIMUM TROIS TOASTS : SI NON DEFINI, PAS BESOIN DE METTRE NULL
function choixJoueur(
  scene,
  nomBouton,
  décisionJoueur,
  textBoxQuestion,
  contenu,
  maxLines,
  autreBouton,
  sceneSuivante,
  toastTexte1,
  toastTexte2,
  toastTexte3
  ) {
  textBoxQuestion.destroy();
  reponseTextBox = creerTextBox(scene, contenu, maxLines);
  reponseTextBox.on('pageend', () => {
    if (reponseTextBox.isLastPage) {
      if (toastTexte1 == null) {changerPage(scene, 'SUIVANT', sceneSuivante)}
      else if (toastTexte1 != null) {
        scene.time.addEvent({
          delay: 5000,
          callback: () => {
            reponseTextBox.destroy();
            creerToast(scene, sceneSuivante, toastTexte1);
          },
          loop: false,
        });
      } 
      else if (toastTexte2 != null) {
        scene.time.addEvent({
          delay: 15000, 
          callback: () => {
            creerToast(scene, sceneSuivante, toastTexte2);
          },
        })
      } else if (toastTexte3 != null) {
        scene.time.addEvent({
          delay: 25000, 
          callback: () => {
            creerToast(scene, sceneSuivante, toastTexte3);
          },
        })
        changerPage(scene, 'SUIVANT', sceneSuivante);
      }
      //else changerPage(scene, 'SUIVANT', sceneSuivante);
    } 
  });
  nomBouton.setVisible(false);
  autreBouton.setVisible(false);
  nomBouton.disableInteractive();
  autreBouton.disableInteractive();

  return;
}

function creerToast(
  scene,
  sceneSuivante,
  toastTexte
) {
  var toast = scene.rexUI.add
    .toast({
      x: 500,
      y: 300,

      background: scene.rexUI.add
        .roundRectangle(0, 0, 2, 2, 20, COLOR_PRIMARY)
        .setStrokeStyle(5, 0xd50000),
      text: scene.add.text(0, 0, '', {
        fontSize: '24px',
      }),
      space: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
      duration: {
        in: 200, //TEMPS MIS POUR FADEIN
        hold: 10000, //A MODIFIER SI BESOIN EN FONCTION DE L'INFORMATIONS
        out: 200, //TEMPS MIS POUR FADEOUT
      },
    })
    .show(toastTexte);
    //.show(toastTexte2)
    //.show(toastTexte3)
  changerPage(scene, 'SUIVANT', sceneSuivante);
}

let jeu = new Phaser.Game(config);


//--------- PLUGIN OBSOLETE : TRAVAIL NON EXPLOITE EN RAISON D'UNE ERREUR EN LIEN AVEC LES DIALOGUES DANS PHASER------------
/*let AlertDialog;

let CreateAlertDialog = function (scene) {
  let dialog = scene.rexUI.add
    .dialog({
      width: 400,
      background: scene.rexUI.add
        .roundRectangle(0, 0, 100, 100, 20, 0xd50000)
        .setStrokeStyle(5, 0xd50000),
      //.setFillStyle.Phaser.Display.Color.HexStringToColor('#7eff33').color,

      title: scene.rexUI.add.label({
        background: scene.rexUI.add
          .roundRectangle(0, 0, 100, 40, 20, 0xd50000)
          .setStrokeStyle(2, 0xd50000),
        text: scene.add.text(0, 0, '', {
          fontSize: '24px',
        }),

        space: {
          left: 15,
          right: 15,
          top: 10,
          bottom: 10,
        },
      }),

      content: scene.add.text(0, 0, '', {
        fontSize: '24px',
      }),

      actions: [
        scene.rexUI.add.label({
          background: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 20, 0x5e92f3),

          text: scene.add.text(0, 0, 'OK', {
            fontSize: '24px',
          }),

          space: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
          },
        }),
      ],

      space: {
        title: 25,
        content: 25,
        action: 15,

        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },

      align: {
        actions: 'center', // 'center'|'left'|'right'
      },

      expand: {
        content: false, // Content is a pure text object
      },
    })
    .on('button.over', function (button, groupName, index, pointer, event) {
      button.getElement('background').setStrokeStyle(1, 0x003c8f);
    })
    .on('button.out', function (button, groupName, index, pointer, event) {
      button.getElement('background').setStrokeStyle();
    });

  //dialog.setFillStyle.Phaser.Display.Color.HexStringToColor('#7eff33').color;

  return dialog;
};

let SetAlertDialog = function (dialog, title, content) {
  if (title === undefined) {
    title = '';
  }
  if (content === undefined) {
    content = '';
  }
  dialog.getElement('title').text = title;
  dialog.getElement('content').text = content;
  return dialog;
};

let Alert = function (scene, title, content, x, y) {
  if (x === undefined) {
    x = 400;
  }
  if (y === undefined) {
    y = 300;
  }

  if (!AlertDialog) {
    AlertDialog = CreateAlertDialog(scene);
  }
  SetAlertDialog(AlertDialog, title, content);

  AlertDialog.setPosition(x, y).setVisible(true).layout();

  return AlertDialog.moveFromPromise(1000, undefined, '-=400', 'Bounce')
    .then(function () {
      return scene.rexUI.waitEvent(AlertDialog, 'button.click');
    })
    .then(function () {
      return AlertDialog.moveToPromise(1000, undefined, '-=400', 'Back');
    })
    .then(function () {
      AlertDialog.setVisible(false);
      return Promise.resolve();
    });
};*/
