class SceneMaternite extends Phaser.Scene {
    constructor() {
      super('maternite');
    }
  
    preload() {
      chargerPlugin(this);
    }
  
    create() {
      this.add.text(200, 100, 'SCENE MATERNITE');
      let content = "congé matenité et les effets : isolement, injonctions. Une question se pose alors : reprise du travail oui ou non ?";
      let reponseOui = "oui je veux reprendre le travail + conséquences";
      let reponseNon ="non, je veux m'occuper de mon enfant";
      let popupTexte = "60% des familles en suisse sont composés d'une\n femme au foyer"
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
          'retour',
          popupTexte
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
          boutonNon,
          'retour',
          popupTexte
        );
      });




  
    }
  }