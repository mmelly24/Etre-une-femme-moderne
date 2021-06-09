class SceneEnfants extends Phaser.Scene {
  constructor() {
    super('enfants');
  }

  preload() {
    this.load.image('happyFace', 'assets/sprite_happy_face.png');
    chargerPlugin(this);
  }

  create() {
    this.add.image(700, 150, 'happyFace').setScale(0.5);

    let content = 'Les années passent, se pose la question des enfants. Souaitez-vous avoir des enfants?';
    let reponseOui = 'La décision est claire, tant pour vous que pour votre conjoint: c\'est oui!';
    let reponseNon = 'Après mûre réflexion, non.';
    //let popupTitre = 'PARENTALITÉ';
    //let popupTexte = 'Seules x% des femmes en Suisse n\'ont pas d\'enfants au cours de leur vie';

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
      choixJoueur(this, boutonOui, true, textBoxQuestion, reponseOui, 3, boutonNon, 'grossesse', null, null);
    });

    boutonNon.on('pointerdown', () => {
      choixJoueur(this, boutonNon, false, textBoxQuestion, reponseNon, 3, boutonOui, 'promotion', null, null);
    });

    /*
    this.add.text(380, 300, 'enfants: blablabla');

    let oui = this.add.text(380, 500, 'OUI');
    oui.setInteractive();
    //aller vers une scène qui contient de la théorie sur la grossesse
    oui.on('pointerdown', () => this.scene.start('grossesse'));

    let boutonNon = this.add.text(580, 500, 'NON');
    boutonNon.setInteractive();
    //aller vers une scène qui illustre la pression sociale
    boutonNon.on('pointerdown', () => this.scene.start('pression'));
    */
  }
}
