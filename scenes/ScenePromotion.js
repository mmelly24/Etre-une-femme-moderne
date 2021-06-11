class ScenePromotion extends Phaser.Scene {
  constructor() {
    super('promotion');
  }

  preload() {
    this.load.image('happyFace', 'assets/sprite_happy_face.png');
    chargerPlugin(this);
  }

  create() {
    this.add.text(200, 100, 'SCENE PROMOTION');
    this.add.image(700, 150, 'happyFace').setScale(0.5);

    let content =
      `\nQu'à cela ne tienne, vous êtes déterminée à faire carrière. -> dde promotion 
      \nIntroduire 1) soupçon de maternité 
      \n2) inégalité salariale 
      \n3) harcèlement une fois promue cheffe 
      \n-> voulez-vous dénoncer vos collaborateurs?`;

     let reponseOui = `La situation est inadmissible, vous devez vous battre bla bla.
    \nAjouter 1) inefficacité
    \n2) effets pervers
    \n3) démission
    \n Dénouement: impacts sociaux et psy`;

    let reponseNon = `La situation vous semble sans issue, 
    \nvous n'avez plus confiance en votre hiérarchie, bla bla.
    \n vous finissez par démissionner.
    \n Dénouement: impacts sociaux et psy`;

    let toastTexte = `expliquer facteurs de ségrégation verticale
    \n+ ajouter stats inégalités salariales
    \n+ stat/info harcèlement`;
      
    let textBoxQuestion = creerTextBox(this, content, 7);

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
        'rejouer',
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
        'rejouer',
        toastTexte
      );
    });
  }
}
