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
    //this.add.image(700, 150, 'happyFace').setScale(0.5);
    timeBar(this, 500, 400);

    let content =`Votre travail est très prenant, mais il vous enrichit énormément. Il a beaucoup de sens pour vous, vous avez le sentiment de faire avancer votre domaine. Vos chefs sont très contents de votre travail. C’est gratifiant!
    Les années passent et votre importance grandit au sein de la boîte. Vous avez gagné en responsabilités mais votre salaire n’a pas évolué en conséquence. Les bruits de couloir laissent aussi entendre qu’on vous paie moins que vos homologues masculins. “C’est la relève, il faut qu’on puisse les garder dans l’entreprise.” C’est ce que vous explique votre chef quand vous abordez timidement le sujet. Vous réalisez alors qu’on n’envisage même pas de vous promouvoir, vous! Mais vous allez leur montrer votre valeur! Presque sur un coup de tête, vous demandez à être promue. “Ah mais tu ne veux pas d’enfants? Ce sera vraiment dur de t’en occuper si tu deviens manager, c’est pour ça que je ne te l’ai jamais proposé. Je ne voulais pas te placer face à ce choix difficile!”
    Vous clarifiez le malentendu et votre chef finit par vous octroyer le poste! Il a toujours cru en vos capacités. Les négociations salariales vous déçoivent un peu, vous soupçonnez que votre salaire reste en-dessous de la norme, mais vous vous estimez déjà chanceuse d’avoir obtenu le poste. ça prouvera qu’une femme peut faire le travail tout aussi bien qu’un homme! La reconnaissance salariale suivra.
    Vous devenez donc cheffe de projet et prenez en charge la direction d’une petite équipe que vous connaissez bien, puisque ce sont vos anciens collègues. Vous êtes aux anges, votre carrière décolle enfin, après presque 10 ans de dur travail!
    Mais vous déchantez vite. Ceux qui sont désormais vos collaborateurs changent de comportement. ça commence par des réactions surprises et vexées à votre promotion. Ce sont tous des hommes, et ils vous font rapidement comprendre que la seule explication possible est d’être “passée sous la table” du chef. L’ambiance se détériore rapidement: ils ne vous écoutent pas, ils ne respectent pas vos décisions, ils vous excluent des réunions.
    “Il faut savoir s’imposer”, vous dit votre supérieur au moment où vous lui confiez le problème. “Les gars, faut leur montrer qui est l’alpha si on veut se faire respecter. Fait preuve d’autorité et de fermeté, ça passera.” Alors c’est ce que vous faites: vous vous grandissez, vous les réprimandez, vous parlez plus fort qu’eux. Mais c’est l’escalade: vous avez “un balais dans le cul”, vous êtes “chiante”, une “connasse”, une “mal baisée”.
    La situation devient insupportable. Vous avez la boule au ventre en partant travailler, vous subissez stoïquement les insultes et les menaces pendant la journée, et vous vous effondrez le soir. Mathieu est désemparé. “Il faut les dénoncer! Tu peux pas te laisser traiter comme ça, c’est pas normal à notre époque!” Vous y réfléchissez sérieusement. Il faut que quelque chose change, c’est sûr, mais vous avez peur pour votre réputation et votre carrière...`;

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
      
    let textBoxQuestion = creerTextBox(this, content, 16);

    let boutonOui = creerBouton(this, false, 180, 480, 'DÉNONCER VOS COLLABORATEURS');
    let boutonNon = creerBouton(this, false, 560, 480, 'DÉMISSIONNER');

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
        16,
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
        16,
        boutonOui,
        'rejouer',
        toastTexte
      );
    });
  }
}
