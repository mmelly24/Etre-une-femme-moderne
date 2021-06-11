class SceneMobilite extends Phaser.Scene {
    constructor() {
      super('mobilite');
    }

    preload() {
      chargerPlugin(this);
    }

    create() {
      this.add.text(200, 100, 'SCENE MATERNITE');
      let content = "Mathieu recoit une offre pour travailler à l'étranger : suivez le vous ou pas ?";
      let reponseOui = "oui je veux le suivre + conséquence mobilité";
      let reponseNon ="non, je ne veux pas le suivre --> divorce ou séparation voir si on arrive à transmettre cette info";
      let toastTexte1 = "Dans majorité des cas, femmes qui doivent suivre leur mari"
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
          7,
          boutonOui,
          'reprise',
          toastTexte1
        );
      });




  
    }
}