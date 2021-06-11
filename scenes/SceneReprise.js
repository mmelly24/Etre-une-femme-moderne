class SceneReprise extends Phaser.Scene {
    constructor() {
      super('reprise');
    }

    preload() {
      chargerPlugin(this);
    }
    
    create() {
      this.add.text(200, 100, 'SCENE Reprise');
     /* 
      let count;
      console.log(count)

      if (count == 1) {
        let content = "Votre enfant est devenu adulte, question de la reprise du travail";
      } if (count > 1 && count < 4) {
        let content = 'vous ne trouvez pas de ravail'

      } if (count > 4) {
        let content = 'vous avez trouvé un travail mal payé, mais vous le prenez.'
      }*/

      let content = "Votre enfant est devenu adulte, question de la reprise du travail";
      let reponseOui = "oui je veux reprendre le travail + conséquences";
      let reponseNon ="non, je veux rester mère au foyer";
      let toastTexte1 = "Travail précaire"
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
          'rejouer',
          toastTexte1
        );
      });

    




  
    }

}