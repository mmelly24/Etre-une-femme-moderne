class ScenePromotion extends Phaser.Scene {
  constructor() {
    super('promotion');
  }

  preload() {
    this.load.image('happyFace', 'assets/sprite_happy_face.png');
    this.load.image('stunnedFace', 'assets/sprite_stunned_face.png');
    this.load.image('cryingFace', 'assets/sprite_tears_face.png');
    this.load.image('boss', 'assets/sprite_boss.png');
    this.load.image('jaugeJaune', 'assets/yellowBar.png');
    this.load.image('jaugeRouge', 'assets/redbar.png');
    chargerPlugin(this);
  }

  create() {
    //this.add.text(200, 100, 'SCENE PROMOTION');
    //this.add.image(700, 150, 'happyFace').setScale(0.5);
    this.add.image(100, 200, 'boss').setScale(0.5);

    jaugeDesillusion(this, 900, 290, 'stunnedFace', 'jaugeJaune', 1.9);

    let content =`\nVotre travail est très prenant, mais il vous enrichit énormément. Il a beaucoup de sens pour vous, vous avez le sentiment de faire avancer votre domaine. Vos chefs sont très contents de votre travail. C’est gratifiant!
    Les années passent et votre importance grandit au sein de la boîte. Vous avez gagné en responsabilités mais votre salaire n’a pas évolué en conséquence. \n\n\n\nLes bruits de couloir laissent aussi entendre qu’on vous paie moins que vos homologues masculins. “C’est la relève, il faut les garder dans l’entreprise.” Vous explique votre chef quand vous abordez timidement le sujet. Vous réalisez alors qu’on n’envisage même pas de vous promouvoir, vous! Presque sur un coup de tête, vous demandez à être promue. \n\n\n“Ah mais tu ne veux pas d’enfants? Ce sera vraiment dur de t’en occuper si tu deviens manager, c’est pour ça que je ne te l’ai jamais proposé. Je ne voulais pas te placer face à ce choix difficile!”
    Vous clarifiez le malentendu et votre chef finit par vous octroyer le poste! Il a toujours cru en vos capacités. Les négociations salariales vous déçoivent un peu, mais vous vous estimez déjà chanceuse d’avoir obtenu le poste. \n\n\nVous prouverez qu’une femme peut faire le travail tout aussi bien qu’un homme! La reconnaissance salariale suivra.
    Vous devenez donc cheffe de projet et prenez en charge la direction d’une petite équipe que vous connaissez bien, puisque ce sont vos anciens collègues. Vous êtes aux anges, votre carrière décolle enfin, après presque 10 ans de dur travail! \n\n\nMais vous déchantez vite. Ceux qui sont désormais vos collaborateurs changent de comportement. Cela commence par des réactions surprises et vexées à votre promotion. Ce sont tous des hommes, et ils vous font rapidement comprendre que la seule explication possible est d’être “passée sous la table” du chef. L’ambiance se détériore rapidement: ils ne vous écoutent pas, ils ne respectent pas vos décisions, ils vous excluent des réunions. \n“Il faut savoir s’imposer”, vous dit votre supérieur au moment où vous lui confiez le problème. “Les gars, faut leur montrer qui est l’alpha si on veut se faire respecter. Fait preuve d’autorité et de fermeté, ça passera.” Alors c’est ce que vous faites: vous vous grandissez, vous les réprimandez, vous parlez plus fort qu’eux. Mais c’est l’escalade: vous avez “un balais dans le cul”, vous êtes “chiante”, une “connasse”, une “mal baisée”.
    La situation devient insupportable. Vous avez la boule au ventre en partant travailler, vous subissez stoïquement les insultes et les menaces pendant la journée, et vous vous effondrez le soir. Mathieu est désemparé. “Il faut les dénoncer! Tu peux pas te laisser traiter comme ça, c’est pas normal à notre époque!” Vous y réfléchissez sérieusement. Il faut que quelque chose change, c’est sûr, mais vous avez peur pour votre réputation et votre carrière...`;

     let reponseOui = `\nLa situation est inadmissible, vous devez vous battre! Après tout, vous êtes en bonne position pour changer le système. Aussi, vous savez que votre entreprise se targue d’avoir développé une cellule pour gérer les affaires de harcèlement. Vous la contactez discrètement, en évitant d’en parler à vos supérieurs. Les RH prêtent une oreille attentive à vos propos et vous êtes rassurée: ils vont mener un audit interne! \n\nVous reprenez espoir et continuez à travailler en attendant les résultats.
     Six mois s’écoulent avant que le rapport d’audit ne soit rendu. Vous êtes à bout de nerfs à force de subir le harcèlement. Vous prenez régulièrement des arrêts maladie car les journées de travail vous semblent de plus en plus insurmontables, d’autant plus que vos collaborateurs vous soupçonnent de les avoir dénoncés. \n\n\nVotre productivité a chuté, tout comme celle de votre équipe. Votre supérieur se montre déçu et ne comprend pas ce qu’il passe (vous ne lui avez jamais parlé de l’audit). “Il va falloir sérieusement vous reprendre, Julie.”
     A la maison, l’ambiance est tendue. Vous êtes très irritable et colérique. Votre relation avec Mathieu en prend un coup. Vous êtes trop fatiguée pour faire quoi que ce soit avec lui. \n\nIl se montre très patient mais n’a pas l’énergie de vous ramasser à la petite cuillère tous les soirs. Il sort avec ses amis et c’est tant mieux: vous préférez rester seule.
     Mais l’audit est enfin terminé! Les RH vous font donc part de leurs conclusions: il n’y a pas assez de preuves pour prendre des mesures. “On ne peut rien faire de plus. C’est pas comme si on pouvait virer toute l’équipe. Vous avez pensé à chercher du travail ailleurs?” Vous êtes anéantie.
     Vous démissionnez peu après. Le soulagement est immense mais éphémère. C’est tout votre investissement, toute votre vie qui perd son sens. La sidération vous plonge dans une léthargie et une tristesse profondes. Vous êtes incapable de chercher du travail pendant des mois. Retenter la même chose? A quoi bon? Vous avez l’impression de régresser. Le décalage avec votre entourage, avec le reste du monde, est considérable. \n\nVous ne comprenez pas comment vous, si combative et ambitieuse, en êtes arrivée là. Il vous faudra un an, et un bon psy, pour retrouver votre joie de vivre et de nouvelles aspirations professionnelles, bien différentes de celles que vous aviez nourries 15 ans auparavant…`;

    let reponseNon = `\n\nLa situation vous semble sans issue. Vous vous êtes pliée en quatre pour faire fonctionner votre équipe, sans succès. Comment résoudre un problème qui ne vient pas de vous? Isolée et sans soutien, vous ne vous faites pas d’illusion. Vous savez que vos collaborateurs ne seront pas inquiétés par leurs agissements.
    \n\n\n\nLe coeur lourd, et sans autre alternative, vous démissionnez. Le soulagement est immense mais éphémère. Vous êtes submergée par votre sentiment d’échec.  C’est tout votre investissement, toute votre vie qui perd son sens. La sidération vous plonge dans une léthargie et une tristesse profondes. Vous êtes incapable de chercher du travail pendant des mois. Retenter la même chose? A quoi bon? Vous avez l’impression de régresser.\n\n Le décalage avec votre entourage, avec le reste du monde, est considérable. Vous ne comprenez pas comment vous, si combative et ambitieuse, en êtes arrivée là. Il vous faudra un an, et un bon psy, pour retrouver votre joie de vivre et de nouvelles aspirations professionnelles, bien différentes de celles que vous aviez nourries 15 ans auparavant…`;

    let toastTexte1 = `En 2018, l’écart de salaire entre \nhommes et femmes est de 11.55% \n(secteurs public et privé confondus). \nIl monte à 18.55% chez les cadres \nsupérieurs et moyens. (OFS, 2020)`;
    let toastTexte2 = `En 2019 en Suisse, seules 35% des \npositions dirigeantes sont occupées \npar des femmes. (OFS, 2020a)`;
    let toastTexte3 = `La "ségrégation verticale" persiste: \nnotre société accorde une valeur symbolique\net monétaire plus élevée au travail \ndes hommes et les favorise dans l’accès \naux postes prestigieux et bien rémunérés.\n(Kergoat, 2014; Bereni et al., 2012)`;

    let textBoxQuestion = creerTextBox(this, content, 16);

    let boutonOui = creerBouton(this, false, 235, 480, 'DÉNONCER VOS COLLABORATEURS');
    let boutonNon = creerBouton(this, false, 615, 480, 'DÉMISSIONNER');

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
        toastTexte1,
        toastTexte2,
        toastTexte3
      );
      jaugeDesillusion(this, 900, 290, 'cryingFace', 'jaugeRouge', 1.1);
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
        toastTexte1,
        toastTexte2,
        toastTexte3
      );
      jaugeDesillusion(this, 900, 290, 'cryingFace', 'jaugeRouge', 1.1);
    });
  }
}
