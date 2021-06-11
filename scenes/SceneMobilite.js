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
      let content = "Mathieu recoit une offre pour travailler à l'étranger : suivez le vous ou pas ?";
      let reponseOui = "oui je veux le suivre + conséquence mobilité : mère celib, travail précaire, rejouer";
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
          7,
          boutonOui,
          'rejouer',
          toastTexte1
        );
      });




  
    }
}