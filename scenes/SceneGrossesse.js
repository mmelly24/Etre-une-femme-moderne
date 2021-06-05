class SceneGrossesse extends Phaser.Scene {
  constructor() {
    super('grossesse');
  }

  create() {
    //test
    let text;
    let count = 0;

    text = this.add.text(380, 300, 'annonce: blablabla');

    let boutonAnnonce = this.add.text(380, 500, 'NEXT');
    boutonAnnonce.setInteractive();
    //exemple d'une fonctionnalité NEXT
    boutonAnnonce.on('pointerdown', () => {
      count++;
      if (count == 1) {
        text.setText('Tout le monde est heureux pour vous');
      } else if (count == 2) {
        text.setText('Vous commencez à vous sentir très fatiguée');
      }
    });
  }
}
