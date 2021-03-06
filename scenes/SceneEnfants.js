class SceneEnfants extends Phaser.Scene {
  constructor() {
    super('enfants');
  }

  preload() {
    chargerPlugin(this);
    this.load.image('baby', 'assets/sprite_baby.png');
    this.load.image('jaugeVert', 'assets/greenBar.png');
    this.load.image('stunnedFace', 'assets/sprite_stunned_face.png');
    this.load.image('happyFace', 'assets/sprite_happy_face.png');
  }

  create() {
    //this.add.text(200, 100, 'SCENE ENFANTS');
    timeBar(this, 500, 400, 2);
    jaugeDesillusion(this, 900, 290, 'happyFace', 'jaugeVert', 120);
    this.add.image(110, 170,'baby').setScale(0.8);

    let content =
      `Les années passent et renforcent le couple que vous formez. Inévitablement, la question des enfants se pose.`;

    let reponseOui = `La décision est claire, tant pour vous que pour votre conjoint : c'est oui !`;
    
      let reponseNon = `\nVous vivez parfaitement bien cette décision, mais elle crée beaucoup d’incompréhension autour de vous. Plus le temps passe, plus vos parents se font insistants. “Alors, c’est pour quand le petit-enfant? Tu es notre seule chance de devenir grand-parents… On espère que tu changeras d’avis.” 
      C’est aussi le cas de vos amis. Autour de vous, c’est le baby-boom: chaque année apporte son lot de nouveaux-nés. \n\nVous devenez marraine, un rôle que vous prenez très à coeur mais qui apparemment est insuffisant. “Tu verras, tu changeras d’avis! Ton horloge biologique finira par se réveiller.” 
      Impossible désormais de jouer avec un enfant sans entendre un “Ah, il faut te préparer Mathieu, ça va vouloir des gosses!”. Tout ça devient vraiment fatiguant… Vous aimez les enfants, mais ce n’est pas pour autant que vous voulez en élever! \n\n\n\nPour vous, l’épanouissement passe par les relations que vous avez déjà bâties - avec votre famille, Mathieu, vos amis. Il passe aussi par votre travail.\n\n\n`;
    
    let toastTexte1 =
      "La parentalité est la norme en Suisse: \nseuls 9% des jeunes adultes (20-29 ans) ne \nsouhaitent pas avoir d'enfants. (OFS, 2019)";
    
    let textBoxQuestion = creerTextBox(this, content,5);

    let boutonOui = creerBouton(this, false, 280, 350, 'AVOIR DES ENFANTS');
    let boutonNon = creerBouton(this, false, 530, 350, 'PAS D\'ENFANTS');

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
        5,
        boutonNon,
        'grossesse',
        toastTexte1
      );
        
    });

    boutonNon.on('pointerdown', () => {
      choixJoueur(
        this,
        boutonNon,
        false,
        textBoxQuestion,
        reponseNon,
        16,
        boutonOui,
        'promotion',
        toastTexte1
      );
      jaugeDesillusion(this, 900, 290, 'stunnedFace', 'jaugeVert', 2.5);
    });
  }
}
