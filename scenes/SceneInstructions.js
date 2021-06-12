class SceneInstructions extends Phaser.Scene {
  constructor() {
    super('instructions');
  }

  preload() {
    //new SceneDesign(this, 'mariage', 'happyFace', 'assets/sprite_happy_face.png');
    this.load.image('happyFace', 'assets/sprite_happy_face.png');
    this.load.image('blueBar', 'assets/blueBar.png');
    this.load.image('containerBar', 'assets/containerBar.png');
    this.load.image('oldWoman', 'assets/sprite_old_woman_happy.png');
    this. load.image('jaugeVert', 'assets/greenBar.png');
    this.load.image('workingWoman', 'assets/sprite_working_woman1.png');
    

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
    timeBar(this, 500, 400);
    jaugeDesillusion(this, 900, 290, 'happyFace', 'jaugeVert')
    //Alert(this, 'test', 'test premier', 500, 300)
    this.add.image(120, 250,'workingWoman').setScale(0.5);
    let content = `Vous incarnez Julie, une suissesse de 25 ans. Vous êtes en couple avec Mathieu depuis trois ans et venez d'emménager avec lui. 
    Après un parcours universitaire exemplaire, vous entrez dans le monde du travail, plus motivée que jamais. 
    Quelques mois de recherche ont suffi pour que vous trouviez un travail qui répond à toutes vos attentes. Vous avez hâte de commencer et de rencontrer vos nouveaux collègues.
    \nC’est désormais à vous de prendre les bonnes décisions pour construire la vie de vos rêves!`;

    /*Alert(this, 'salut', 'salut ca va', 500, 300).then(() => {
      return Alert(this, 'chainage', 'test chainage', 500, 300);
    });*/

    //this.add.image(700, 150, 'happyFace').setScale(0.5);
    boutonMenu(this);
    //changerPage(this, 700, 500, 'NEXT', 'mariage');

    let textBoxInstructions = creerTextBox(this, content, 16);
    textBoxInstructions.on('pageend', () => {
      if (textBoxInstructions.isLastPage) {
        changerPage(this, 'SUIVANT', 'mariage');
      }
    });

    //new Bouton(this, true, 200, 100, 'BACK TO MENU', 'accueil');
    //new Bouton (this, true, 700, 500, 'NEXT', 'mariage');
    //new PopUp (this, 'Le Mariage', 'En Suisse, plus de 30% de femmes sont célibataires.', 400, 200);
  }
}
