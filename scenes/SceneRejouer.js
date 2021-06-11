class SceneRejouer extends Phaser.Scene {
  constructor() {
    super('rejouer');
  }

  preload() {
    this.load.image('happyFace', 'assets/sprite_happy_face.png');
    chargerPlugin(this);
  }

  create() {
    this.add.text(200, 150, 'SCENE REJOUER');
    //this.add.image(700, 150, 'happyFace').setScale(0.5);

    boutonMenu(this);

    let toastTexte1 = `Ce n'est pas une fatalité.
    \nCe n'est pas une loi naturelle,
    \nC'est le résultat de l'apprentissage 
    \nprécoce d'une différenciation et d'une 
    \nhiérarchisation des sexes.`;

    let toastTexte2 = `C'est le quotidien d'une femme moderne.`;

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
        hold: 5000, //A MODIFIER SI BESOIN EN FONCTION DE L'INFORMATIONS
        out: 200, //TEMPS MIS POUR FADEOUT
      },
    })
    .show(toastTexte1)
    .show(toastTexte2)
  }
}
