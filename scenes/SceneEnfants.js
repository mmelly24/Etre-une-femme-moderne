class SceneEnfants extends Phaser.Scene {
  constructor() {
    super('enfants');
  }

  preload() {
    this.load.image('happyFace', 'assets/sprite_happy_face.png');
    chargerPlugin(this);
    //this.load.plugin('rexeventpromiseplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexeventpromiseplugin.min.js', true);
  }

  create() {
    this.add.image(700, 150, 'happyFace').setScale(0.5);

    let content =
      'Les années passent, se pose la question des enfants. BLA BLA BLA Souaitez-vous avoir des enfants?';
    let reponseOui =
      "La décision est claire, tant pour vous que pour votre conjoint: c'est oui! BLA BLA BLA";
    let reponseNon = 'Après mûre réflexion, non. BLA BLA BLA';
    let popupTitre = 'PARENTALITÉ';
    let popupTexte =
      "Seules x% des femmes en Suisse n'ont pas d'enfants au cours de leur vie";
    let popupTexte2 = 'test popup 2';
    let textBoxQuestion = creerTextBox(this, content, 3);

    let boutonOui = creerBouton(this, false, 380, 500, 'OUI');
    let boutonNon = creerBouton(this, false, 580, 500, 'NON');

    textBoxQuestion.on('pageend', () => {
      if (textBoxQuestion.isLastPage) {
        boutonOui.setVisible(true);
        boutonNon.setVisible(true);
      }
    });

    boutonOui.on('pointerdown', () => {
      choixJoueur(
        this,
        boutonOui,
        true,
        textBoxQuestion,
        reponseOui,
        7,
        boutonNon,
        'grossesse',
        popupTexte
      );
    });

    boutonNon.on('pointerdown', () => {
      choixJoueur(
        this,
        boutonNon,
        true,
        textBoxQuestion,
        reponseNon,
        7,
        boutonOui,
        'grossesse',
        popupTexte
      );
    });
  }
}
