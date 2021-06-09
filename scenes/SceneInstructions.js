class SceneInstructions extends Phaser.Scene {
  constructor() {
    super('instructions');
  }

  preload() {
    //new SceneDesign(this, 'mariage', 'happyFace', 'assets/sprite_happy_face.png');
    this.load.image('happyFace', 'assets/sprite_happy_face.png');
    this.load.image('blueBar', 'assets/blueBar.png');
    this.load.image('containerBar', 'assets/containerBar.png');

    chargerPlugin(this);

    /*
    this.load.scenePlugin({
      key: 'rexuiplugin',
      url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
      sceneKey: 'rexUI',
    });
    this.load.image(
      'nextPage',
      'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/arrow-down-left.png'
    );*/
  }

  create() {
    //timeBar(this, 500, 400, 500)

    let content = `Vous incarnez une jeune femme de 25 ans, nommée Julie. Après un parcours universitaire exemplaire, vous entrez dans le monde du travail, plus motivée que jamais. 
    Quelques mois de recherche ont suffi à ce que vous trouviez un job, qui répond à toutes vos attentes. Vous avez hâte de commencer, et de rencontrer tous vos nouveaux collègues.
    C’est désormais à vous de prendre les bonnes décisions, pour permettre à Julie de vivre une vie... extraordinaire !`;

    Alert(this, 'salut', 'salut ca va', 500, 300).then(() => {
      return Alert(this, 'chainage', 'test chainage', 500, 300);
    });

    this.add.image(700, 150, 'happyFace').setScale(0.5);
    boutonMenu(this);
    changerPage(this, 700, 500, 'NEXT', 'mariage');

    //creerTextBox(this, content, 6);

    //new Bouton(this, true, 200, 100, 'BACK TO MENU', 'accueil');
    //new Bouton (this, true, 700, 500, 'NEXT', 'mariage');
    //new PopUp (this, 'Le Mariage', 'En Suisse, plus de 30% de femmes sont célibataires.', 400, 200);
  }
}
