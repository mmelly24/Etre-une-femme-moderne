class SceneEnfants extends Phaser.Scene {
  constructor() {
    super('enfants');
  }

  preload() {
    this.load.image('happyFace', 'assets/sprite_happy_face.png');
    chargerPlugin(this);
  }

  create() {
    this.add.text(200, 100, 'SCENE ENFANTS');
    this.add.image(700, 150, 'happyFace').setScale(0.5);

    let content =
      'Les années passent, se pose la question des enfants. BLA BLA BLA Souaitez-vous avoir des enfants?';
    let reponseOui =
      "La décision est claire, tant pour vous que pour votre conjoint: c'est oui! BLA BLA BLA";
    let reponseNon = `Après mûre réflexion, non.
    \nVos parents sont très déçus. 
    \nVos amis ne comprennent pas votre choix, etc.`;
    
    let toastTexte =
      "Seules x% des femmes en Suisse \nn'ont pas d'enfants au \ncours de leur vie";
    
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
        toastTexte
      );
    });

    boutonNon.on('pointerdown', () => {
      choixJoueur(
        this,
        boutonNon,
        false,
        textBoxQuestion,
        reponseNon,
        7,
        boutonOui,
        'promotion',
        toastTexte
      );
    });
  }
}
