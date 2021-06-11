class SceneMaternite extends Phaser.Scene {
    constructor() {
      super('maternite');
    }
  
    preload() {
      chargerPlugin(this);
    }
  
    create() {
      this.add.text(200, 100, 'SCENE MATERNITE');
      timeBar(this, 500, 400);
      let content = "congé matenité et les effets : isolement, injonctions. Une question se pose alors : reprise du travail oui ou non ?";
      let reponseOui = "oui je veux reprendre le travail + conséquences";
      let reponseNon ="non, je veux m'occuper de mon enfant";
      let toastTexte1 = "60% des familles en suisse sont composés d'une\n femme au foyer"
      let textBoxQuestion = creerTextBox(this, content, 7);

      let boutonOui = creerBouton(this, false, 380, 500, 'Oui, je veux reprendre le travail');
      let boutonNon = creerBouton(this, false, 580, 500, 'Non, je désire m\'ocuper de ma fille');

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
          'retour',
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
          'mobilite',
          toastTexte1
        );
      });




  
    }
  }