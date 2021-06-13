class SceneMobilite extends Phaser.Scene {
    constructor() {
      super('mobilite');
    }

    preload() {
      chargerPlugin(this);
      this.load.image('boyfriend', 'assets/sprite_boyfriend_happyface.png');
      this.load.image('stunnedFace', 'assets/sprite_stunned_face.png');
      this.load.image('cryingFace', 'assets/sprite_tears_face.png');
      this.load.image('jaugeJaune', 'assets/yellowBar.png');
      this.load.image('jaugeRouge', 'assets/redbar.png');
    }

    create() {
      jaugeDesillusion(this, 900, 290, 'stunnedFace', 'jaugeJaune', 1.9);
      this.add.image(110, 250,'boyfriend').setScale(0.4);
      //this.add.text(200, 100, 'SCENE MOBILITE');
      timeBar(this, 500, 400, 4);
      let content = `\n\n\nEmma vient de fêter ses 12 ans. Que le temps passe vite ! Vous vous rappelez qu’il y a dix ans, presque jour pour jour, vous avez décidé de devenir mère au foyer pour vous consacrer entièrement à Emma. Et comme vous êtes fière de votre petite ! Vous l’aimez plus que tout au monde.\n\n\n 
      \n\n\nLa carrière de Mathieu, quant à elle, a évolué de manière tout à fait surprenante. Le voilà maintenant vice-président de son entreprise. Vous êtes très fière de lui, et de tous les sacrifices qu’il a dû faire pour atteindre ce poste.\n\n\n\n
      \n\n\n\n\n"Julie, Julie !!! Mon patron vient de me faire une proposition in-croy-able !!! Il me propose de partir au Japon travailler 5 ans pour diriger la chaîne de production qui est située là-bas !! Tu te rends compte ?"\n\n\n\n
      \n\n\nOui, vous vous rendez bien compte… Mathieu vous l’a fait comprendre lorsqu’il est rentré du travail : pour lui, cette occasion est inespérée, il ne refusera pas ce poste. C’est donc à vous de décider si vous le suivez, ou si vous restez en Suisse avec Emma, proche de votre famille et vos amis.\n\n\n\n
      Souhaitez-vous suivre Mathieu au Japon, ou rester en Suisse ?`;
      let reponseOui = `\n\nVous décidez de suivre Mathieu au Japon, afin de poursuivre cette aventure fantastique ! Vous vous réjouissez de découvrir cette nouvelle culture et ce nouveau pays, que vous n’avez encore jamais visité. Après plusieurs mois de préparation, vous voilà prête pour le grand départ ! Vous avez convenu avec Mathieu que vous vous occuperez d’Emma à temps plein.\n\n
      \n\n\n\n\nPour faciliter l’organisation de la maisonnée et pour qu’elle ne se sente pas trop déstabilisée par ce changement drastique.\n\n\n\n\n\n
      \n\nLes 5 années se transforment en 15 ans, que vous vivez avec bonheur au Japon, ce pays qui désormais semble presque être le vôtre. Emma, entre-temps, a commencé ses études et est rentrée en Suisse pour intégrer une université là-bas. Vous êtes si heureuse pour elle bien que son absence a créé un vide dans votre quotidien.\n\n\n
      Vous êtes tout de même heureuse de rentrer en Suisse à la fin du contrat de Mathieu. Une fois de retour, vous vous mettez à rechercher un travail. La vie professionnelle vous manque, même si cela fait plus de 20 ans que vous l’avez quittée.Toutefois, vous êtes rapidement confrontée à la réalité du monde : votre diplôme et vos années d’arrêt ont fait de vous une personne difficilement employable, si ce n’est dans un travail pour lequel vous êtes surqualifiée. Après 2 ans de recherches infructueuses, vous abandonnez l’idée de retrouver un travail et vous vous consacrez entièrement à l’entretien de votre maison et des tâches domestiques qui l’accompagnent.
      A l’âge de la retraite, vous êtes heureuse que Mathieu soit à vos côtés car, étant mère au foyer une partie de votre vie, vous n’avez pas pu cotiser suffisamment pour subvenir à vos besoins… S’il venait à vous quitter, vous ne sauriez pas comment vous en sortir...`;
      let reponseNon =`\nIl vous semble inconcevable de quitter toute votre vie pour que Mathieu puisse travailler dans un pays dont vous ne connaissez rien. Vous refusez donc de partir. Mathieu a beaucoup de peine à accepter votre choix : "De toute façon, tu ne vois presque plus personne depuis qu’Emma est née ! qu’est-ce que ça peut bien te faire de venir avec moi pour réaliser mon rêve ? Hein ??”. Cette phrase vous fait l’effet d’un couteau qui vous transperce à vif...\n Est-ce de cette manière qu’il vous perçoit ? Cette phrase n’est que la première d’une longue série. Votre couple ne survit pas : les rancœurs accumulées au fil du temps vous explosent au visage, et vous vous séparez.
      Mathieu part au Japon, laissant derrière lui sa fille. Evidemment, cela lui brise le cœur mais "5 ans ce n’est pas grand chose" et "elle pourra venir me voir pendant les vacances scolaires". \n\n\n\n\n\nOui certes... vous ne savez pas trop quoi en penser, mais vous n’avez plus de mot à dire sur ses choix de vie.
      Vous n’avez désormais plus le choix de reprendre le travail car il faut subvenir à vos besoins et à ceux de votre fille. Vous cherchez du travail… longtemps… très longtemps.\n\n\n\n\nIl faut dire que cela fait plus de 10 ans que vous n’avez plus travaillé, et les entreprises cherchent des employés plus jeunes que vous car plus au courant des dernières technologies… Après plusieurs longs mois de recherche, vous n’avez plus le luxe de chercher, vous devez accepter un travail pour lequel vous êtes surqualifiée.\n\n
      \n\n\n\nVous ne gagnez pas de quoi vivre dans le grand luxe, et devez changer d’appartement pour en prendre un plus modeste. Vous travaillez à temps plein, et Emma doit apprendre à se débrouiller par elle-même car vous n’êtes plus autant disponible qu’auparavant.\n\n\n
      \n\nLa vie continue ainsi jusqu’à ce qu’Emma vous quitte pour poursuivre ses études à l’étranger… Petit à petit, vous apprenez à gérer ce quotidien, parfois très éprouvant. Lorsque vous atteignez la retraite, vous devez encore apprendre à baisser vos dépenses car vous n’avez pas pu cotiser correctement lors de votre vie professionnelle… Vous êtes épuisée.\n\n
      Vous regardez par la fenêtre la pluie tomber en ce mois de février lugubre. Vous repensez à votre vie, avec le regard pointu que la vieillesse vous a permis d’acquérir. Vous fermez lentement vos yeux, en pensant à Emma. Vous ne savez pas ce que la vie lui réserve, mais vous n’envisagez pas son avenir sereinement… et si… et si elle avait été un garçon ?
      
      `;
      let toastTexte1 = "Dans une carrière professionnelle,\nla mobilité géographique est beaucoup\nplus acceptée pour les hommes\nque pour les femmes. De ce fait,\nil est rare de voir une famille\ntout quitter pour permettre à la mère\nde poursuivre sa carrière professionnelle\nà l'étranger, constituant ainsi\nun obstacle au développement\nde cette dernière.(Guillaume, Pochic, 2007)";
      let toastTexte2 = `En Suisse, une famille monoparentale\nsur six est touchée par la pauvreté.\nDans la plupart des cas, les enfants restent\navec leur mère. Il est difficile pour ces dernières\nde trouver un emploi adapté à leur horaire familiaux,\naugmentant dès lors leur situation précaire. (Caritas, 2020)`;
      let toastTexte3 = `A l'âge de la retraire, le taux de pauvreté\nchez les femmes est de 17.6%,\ncontre 11.4% chez les hommes (ARC) :\non estime que la retraite des femmes\nest de 37% inférieure à celle des hommes (CF).\nLes femmes ayant été mères au foyer sont\nparticulièrement touchées par ce phénomène :\nelles n'ont pas, ou plus, cotisé au 2ème pilier,\nréservé aux salariés.`
      let textBoxQuestion = creerTextBox(this, content, 16);

      let boutonOui = creerBouton(this, false, 380, 500, 'JAPON');
      let boutonNon = creerBouton(this, false, 580, 500, 'SUISSE');

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
        jaugeDesillusion(this, 900, 290, 'stunnedFace', 'jaugeJaune', 1.4);
        timeBar(this, 500, 400, 120);
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
        timeBar(this, 500, 400, 120);
      });




  
    }
}