class SceneGrossesse extends Phaser.Scene {
  constructor() {
    super('grossesse');
  }

  preload() {
    chargerPlugin(this);
  }

  create() {
    this.add.text(200, 100, 'SCENE GROSSESSE');

    let content = "propos sur la grossesse en général"

    let toastTexte1 = "Une femme sur dix subi des violences gynécologiques en Suisse."


    let reponseTextBox = creerTextBox(this, content, 7)

    reponseTextBox.on('pageend', () => {
      if (reponseTextBox.isLastPage) {
          this.time.addEvent({
            delay: 2000,
            callback: () => {
              reponseTextBox.destroy();
              creerToast(this, 'maternite', toastTexte1)
            },
            loop: false,
          });
    
      } else changerPage(scene, 700, 500, 'NEXT', 'matenite');
    });





    /* -----RENDU INUTILE PAR LES TEXTBOXES
    //test
    let text;
    let count = 0;

    text = this.add.text(400, 300, 'annonce: blablabla');

    //centrer le text
    Phaser.Display.Align.In.Center(text, this.add.zone(400, 300, 800, 600));

    let boutonAnnonce = this.add.text(700, 500, 'NEXT');
    boutonAnnonce.setInteractive();

    //exemple d'une fonctionnalité NEXT
    boutonAnnonce.on('pointerdown', () => {
      count++;
      if (count == 1) {
        text.setText('Tout le monde est heureux pour vous');
      } else if (count == 2) {
        text.setText('Vous commencez à vous sentir très fatiguée');
      }
    });*/
  }
}
