class SceneRejouer extends Phaser.Scene {
  constructor() {
    super('rejouer');
  }

  preload() {
    this.load.image('happyFace', 'assets/sprite_happy_face.png');
    chargerPlugin(this);
  }

  create() {
    //this.add.text(200, 150, 'SCENE REJOUER');

    let toastTexte1 = `C'est le quotidien d'une femme moderne.`;

    let toastTexte2 = `Déconstruisons le mythe moderne de la mère parfaite: 
    \n1) L'injonction à être mère reste très forte. 
    \n2) Les obstacles restent nombreux dans la carrière d'une femme, 
    \nmême si elle n'a pas d'enfants.
    \n3) Une femme ne peut être une mère investie et ambitieuse 
    \nprofessionnellement qu'au prix de sa santé physique et/ou mentale.`;

    this.rexUI.add
      .toast({
        x: 500,
        y: 300,

        background: this.rexUI.add
          .roundRectangle(0, 0, 2, 2, 20, COLOR_PRIMARY)
          .setStrokeStyle(5, 0xd50000),
        text: this.add.text(0, 0, '', {
          fontSize: '24px',
        }),
        space: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20,
        },
        duration: {
          in: 1000, //TEMPS MIS POUR FADEIN
          hold: 4000, //A MODIFIER SI BESOIN EN FONCTION DE L'INFORMATION
          out: 200, //TEMPS MIS POUR FADEOUT
        },
      })
      .show(toastTexte1);

    this.time.addEvent({
      delay: 6000,
      callback: () => {
        this.rexUI.add
          .toast({
            x: 500,
            y: 300,

            background: this.rexUI.add
              .roundRectangle(0, 0, 2, 2, 20, COLOR_PRIMARY)
              .setStrokeStyle(5, 0xd50000),
            text: this.add.text(0, 0, '', {
              fontSize: '24px',
            }),
            space: {
              left: 20,
              right: 20,
              top: 20,
              bottom: 20,
            },
            duration: {
              in: 1000, //TEMPS MIS POUR FADEIN
              hold: 12000, //A MODIFIER SI BESOIN EN FONCTION DE L'INFORMATIONS
              out: 200, //TEMPS MIS POUR FADEOUT
            },
          })
          .show(toastTexte2);
        this.time.addEvent({
          delay: 14000,
          callback: () => {
            let boutonMenu = this.add.text(500, 300, 'RETOUR AU MENU', {
              fontSize: '25px',
            });
            boutonMenu.setInteractive();
            boutonMenu.on('pointerdown', () => this.scene.start('accueil'));
          },
        });
      },
    });
  }
}
