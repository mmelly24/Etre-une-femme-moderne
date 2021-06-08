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
    SceneEnfants,
    SceneMobilite,
    ScenePromotion,
    SceneReprise,
    SceneRetour,
    ScenePression,
    SceneGrossesse,
  ],
};

class TextBox extends Phaser.GameObjects.Container {
  constructor(scene, content, maxLines) {
    super(scene);

    createTextBox(scene, 200, 200, {
      wrapWidth: 400,
      maxLines: maxLines,
    }).start(content, 50);
  }
}

const GetValue = Phaser.Utils.Objects.GetValue;
const COLOR_PRIMARY = 000000;
const COLOR_LIGHT = 000000;
const COLOR_DARK = 000000;

function createTextBox(scene, x, y, config) {
  let wrapWidth = GetValue(config, 'wrapWidth', 0);
  let fixedWidth = GetValue(config, 'fixedWidth', 0);
  let fixedHeight = GetValue(config, 'fixedHeight', 0);
  let maxLines = GetValue(config, 'maxLines', 0)
  console.log(scene.rexUI);
  let textBox = scene.rexUI.add
    .textBox({
      x: x,
      y: y,

      background: scene.rexUI.add
        .roundRectangle(0, 0, 2, 2, 20, COLOR_PRIMARY)
        .setStrokeStyle(2, COLOR_LIGHT),

      icon: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 20, COLOR_DARK),

      // text: getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),
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

class SceneDesign extends Phaser.Scene {
  constructor(scene) {
    super(scene);

    scene.load.image('happyFace', 'assets/sprite_happy_face.png');
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
    changerPage(scene, 700, 500, 'NEXT');

  }
}

function changerPage(scene, x, y, contenu) {
  let boutonNext = scene.add.text(x, y, contenu);
  boutonNext.setInteractive();
  boutonNext.on('pointerdown', () => scene.scene.start('mariage'));
  return boutonNext;
}

let jeu = new Phaser.Game(config);
