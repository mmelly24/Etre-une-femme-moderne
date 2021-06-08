

class SceneInstructions extends Phaser.Scene {
  constructor() {
    super('instructions');
  }

  preload() {
    this.load.image('happyFace', 'assets/sprite_happy_face.png');
    this.load.scenePlugin({
      key: 'rexuiplugin',
      url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
      sceneKey: 'rexUI',
    });
    this.load.image(
      'nextPage',
      'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/arrow-down-left.png'
    );
  }

  create() {
    let content = `Vous incarnez une jeune femme de 25 ans, nommée Julie. Après un parcours universitaire exemplaire, vous entrez dans le monde du travail, plus motivée que jamais. 
    Quelques mois de recherche ont suffi à ce que vous trouviez un job, qui répond à toutes vos attentes. Vous avez hâte de commencer, et de rencontrer tous vos nouveaux collègues.
    C’est désormais à vous de prendre les bonnes décisions, pour permettre à Julie de vivre une vie... extraordinaire !`;
    this.add.image(700, 150, 'happyFace').setScale(0.5);

    let boutonMenu = this.add.text(200, 100, 'BACK TO MENU');
    boutonMenu.setInteractive();
    boutonMenu.on('pointerdown', () => this.scene.start('accueil'));
    changerPage(this, 700, 500, 'NEXT');
    new TextBox(this, content, 6);

  }

    update() {
        changerPage(this, 700, 500, 'NEXT');
    }
}

function changerPage(scene, x, y, contenu) {
  let boutonNext = scene.add.text(x, y, contenu);
  boutonNext.setInteractive();
  boutonNext.on('pointerdown', () => scene.scene.start('mariage'));
  return boutonNext;
}
