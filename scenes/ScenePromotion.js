class ScenePromotion extends Phaser.Scene {
  constructor() {
    super('promotion');
  }

  preload() {
    this.load.image('happyFace', 'assets/sprite_happy_face.png');
    chargerPlugin(this);
  }

  create() {
    this.add.image(700, 150, 'happyFace').setScale(0.5);

    // IL FAUT ADAPTER LE TEXTE SELON LA REPONSE DU JOUEUR
    let pressionsSociales =
      'Vos parents sont très déçus. Vos amis ne comprennent pas votre choix, etc.';
    let promotion =
      "Qu'à cela ne tienne, vous êtes déterminée à faire carrière. Introduire 1) soupçon de maternité 2) inégalité salariale 3) harcèlement une fois promue cheffe";

    let boxPressionsSociales = creerTextBox(this, pressionsSociales, 3);

    boxPressionsSociales.on('pageend', () => {
      if (boxPressionsSociales.isLastPage) {
        let boutonNext1 = creerBouton(this, true, 700, 500, 'SUITE');
        boutonNext1.on('pointerdown', () => {
          boxPressionsSociales.destroy();
          let boxPromotion = creerTextBox(this, promotion, 3);
          boxPromotion.on('pageend', () => {
            if (boxPromotion.isLastPage) {
              changerPage(this, 700, 500, 'SUITE', 'denonciation');
            }
          });
        });
      }
    });

    /*boxPromotion.on('pageend', () => {
      if (boxPressionsSociales.isLastPage) {
        let boutonNext2 = creerBouton(this, true, 700, 500, 'SUITE');
        return boutonNext2;
      }
    });*/


  }
}
