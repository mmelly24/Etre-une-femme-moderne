const config = {
  width: 1000,
  height: 600,
  type: Phaser.WEBGL,
  backgroundColor: '#653592', //couleur test
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
    SceneDenonciation,
    SceneDepart,
    SceneInstructions,
    SceneMariage,
    SceneMariageOui,
    SceneMariageNon,
    SceneEnfants,
    SceneMobilite,
    ScenePromotion,
    SceneReprise,
    SceneRetour,
    ScenePression,
    SceneGrossesse,
  ],
};

class SceneDesign extends Phaser.Scene {
  constructor(scene, sceneSuivante, image, lien) {
    super(scene);

    scene.load.image(image, lien);
    scene.load.scenePlugin({
      key: 'rexuiplugin',
      url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
      sceneKey: 'rexUI',
    });
    scene.load.image(
      'nextPage',
      'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/arrow-down-left.png'
    );

    let boutonMenu = scene.add.text(200, 100, 'BACK TO MENU');
    boutonMenu.setInteractive();
    boutonMenu.on('pointerdown', () => scene.scene.start('accueil'));
    if (sceneSuivante !== null) {
      changerPage(scene, 700, 500, 'NEXT', sceneSuivante);
    } else return undefined;
  }
}

/*class Bouton extends Phaser.GameObjects.Container {
  constructor(name, visibilité, x, y, content, nomScene) {
    super(name);
    creerBouton(name, visibilité, x, y, content, nomScene);
  }
}*/

class Images extends Phaser.GameObjects.Image {
  constructor(scene, x, y, nomImage, scale) {
    super(scene);
    creerImage(scene, x, y, nomImage, scale);
  }
}

class TextBox extends Phaser.GameObjects.Container {
  constructor(scene, content, maxLines) {
    super(scene);

    this.innerTextBox = createTextBox(scene, 200, 200, {
      wrapWidth: 400,
      maxLines: maxLines,
    }).start(content, 50);
  }

  /* VARIANTE : on peut ajouter les autres fonctions comme ça dans la classe aussi, pour pas qu'on puisse les appeler en-dehors de la classe TextBox
  destroyMe()
  {
    this.innerText.destroy();
  } -> dans le code: destroyMe(textbox);
  */
}

function détruireTextBox(textBox) {
  textBox.innerTextBox.destroy();
}

class PopUp extends Phaser.GameObjects.Container {
  constructor(scene, titre, content, x, y) {
    super(scene);

    scene.load.scenePlugin({
      key: 'reyuiplugin',
      url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
      sceneKey: 'rexUI',
    });

    Alert(scene, titre, content, x);
  }
}

const GetValue = Phaser.Utils.Objects.GetValue;
const COLOR_PRIMARY = 000000;
const COLOR_LIGHT = 000000;
const COLOR_DARK = 000000;

//---------- Fonctions pour les textBoxes -------------

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

      background: scene.rexUI.add
        .roundRectangle(0, 0, 2, 2, 20, COLOR_PRIMARY)
        .setStrokeStyle(2, COLOR_LIGHT),

      icon: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 20, COLOR_DARK),

      //text: getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),
      text: getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight, maxLines),

      action: scene.add
        .image(0, 0, 'nextPage')
        .setTint(COLOR_LIGHT)
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

function creerBouton(scene, visibilité, x, y, content /*, nomScene*/) {
  let bouton = scene.add.text(x, y, content);
  bouton.setInteractive();
  bouton.setVisible(visibilité);
  //bouton.on('pointerdown', () => name.scene.start(nomScene));
  return bouton;
}
//--------- Fonctions pour les popUp ------------

function CreateAlertDialog(scene) {
  let dialog = scene.rexUI.add
    .dialog({
      width: 300,
      background: scene.rexUI.add
        .roundRectangle(0, 0, 100, 100, 20, 0x003c8f)
        .setStrokeStyle(5, 0x003c8f),

      title: scene.rexUI.add.label({
        background: scene.rexUI.add
          .roundRectangle(0, 0, 100, 40, 20, 0x003c8f)
          .setStrokeStyle(2, 0x003c8f),
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
    .on('button.over', function (button) {
      button.getElement('background').setStrokeStyle(1, 0x003c8f);
    })
    .on('button.out', function (button) {
      button.getElement('background').setStrokeStyle();
    });

  return dialog;
}

function SetAlertDialog(dialog, title, content) {
  if (title === undefined) {
    title = '';
  }
  if (content === undefined) {
    content = '';
  }
  dialog.getElement('title').text = title;
  dialog.getElement('content').text = content;
  return dialog;
}

let AlertDialog;
function Alert(scene, title, content, x, y) {
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

  return AlertDialog.moveFromPromise(1000, undefined, '-400', 'Bounce')
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
}

//--------- Autres fonctions -----------

function changerPage(scene, x, y, contenu, sceneSuivante) {
  let boutonNext = scene.add.text(x, y, contenu);
  boutonNext.setInteractive();
  boutonNext.on('pointerdown', () => scene.scene.start(sceneSuivante));
  return boutonNext;
}

function creerImage(scene, x, y, nomImage, scale) {
  let image = scene.add.image(x, y, nomImage).setScale(scale);
  return image;
}

/*function chargerImage(scene, key, lien) {
  let imageChargee = scene.load.image(key, lien);
  return imageChargee;
}*/

let jeu = new Phaser.Game(config);
