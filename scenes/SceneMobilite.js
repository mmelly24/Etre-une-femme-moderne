class SceneMobilite extends Phaser.Scene {
    constructor() {
      super('mobilite');
    }

    preload() {
      chargerPlugin(this);
    }

    create() {
      this.add.text(200, 100, 'SCENE MOBILITE');
      timeBar(this, 500, 400);
      let content = `\n\n\nEmma vient de fêter ses 12 ans. Que le temps passe vite ! Vous vous rappelez qu’il y a dix ans, presque jour pour jour, vous avez décidé de devenir mère au foyer pour vous consacrer entièrement à Emma. Et comme vous êtes fière de votre petite ! Vous l’aimez plus que tout au monde.\n\n\n 
      \n\n\nLa carrière de Mathieu, quant à elle, à évoluer de manière tout à fait surprenante. Le voilà maintenant vice-président de son entreprise. Vous êtes très fière de lui, et de tous les sacrifices qu’il a dû faire pour atteindre ce poste.\n\n\n\n
      \n\n\n\n\n"Julie, Julie !!! Mon patron vient de me faire une proposition in-croy-able !!! Il me propose de partir au Japon travailler 5 ans pour diriger la chaîne de production qui est située là-bas !! tu te rends compte ?"\n\n\n\n
      \n\n\nOui, vous vous rendez bien compte… Mathieu vous l’a fait comprendre lorsqu’il est rentré du travail : pour lui, cette occasion est inespérée, il ne refusera pas ce poste. C’est donc à vous de décider si vous le suivez, ou si vous restez en Suisse avec Emma, proche de votre famille et vos amis.\n\n\n\n
      Souhaitez-vous suivre Mathieu au Japon, ou rester en Suisse ?`;
      let reponseOui = "oui je veux le suivre + conséquence mobilité : mère celib, travail précaire, rejouer";
      let reponseNon ="non, je ne veux pas le suivre --> divorce ou séparation voir si on arrive à transmettre cette info";
      let toastTexte1 = "Dans majorité des cas, femmes qui doivent suivre leur mari"
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
          'reprise',
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
          'rejouer',
          toastTexte1
        );
      });




  
    }
}