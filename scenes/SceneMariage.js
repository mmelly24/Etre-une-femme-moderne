class SceneMariage extends Phaser.Scene {
  constructor() {
    super('mariage');
  }

  preload() {
    this.load.image('happyFace', 'assets/sprite_happy_face.png');
    this. load.image('jaugeVert', 'assets/greenBar.png');
    chargerPlugin(this);
    this.load.scenePlugin({
      key: 'rexuiplugin',
      url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
      sceneKey: 'rexUI',
    });
  }

  create() {
    timeBar(this, 500, 400);
    let content = `mariagle question`;
    this.add.text(200, 100, 'SCENE MARIAGE');
    this.add.image(700, 150, 'happyFace').setScale(0.5);
    jaugeDesillusion(this, 900, 290, 'happyFace', 'jaugeVert');

    let textBoxQuestion = creerTextBox(this, content, 7);

    //let decisionMariage = '';

    //VARIABLE REPONSE NON

    let reponseOui = `mariage réponse oui`;

    //VARIABLE POUR REPONSE OUI

    let reponseNon = `mariage réponse non`;

    let boutonOui = creerBouton(
      this,
      false,
      380,
      480,
      'OUI' /*, 'mariageOui'*/
    );
    let boutonNon = creerBouton(
      this,
      false,
      580,
      480,
      'NON' /*, 'mariageNon'*/
    );

    textBoxQuestion.on('pageend', () => {
      if (textBoxQuestion.isLastPage) {
        boutonOui.setVisible(true);
        boutonNon.setVisible(true);
      }
    });

    //let popupTexte = null;
    //let popupTitre = null;
    //let toastTexte1 = 'MARIAGE';
    //let toastTexte2 = ` Le mariage reste un choix de vie \n largement adopté par la population \n suisse: XX% est mariée`;

    boutonOui.on('pointerdown', () => {
      choixJoueur(
        this,
        boutonOui,
        true,
        textBoxQuestion,
        reponseOui,
        10,
        boutonNon,
        'enfants'
      );
    });

    boutonNon.on('pointerdown', () => {
      choixJoueur(
        this,
        boutonNon,
        false,
        textBoxQuestion,
        reponseNon,
        10,
        boutonOui,
        'enfants'
      );
    });
  }
}
