
class SceneAbout extends Phaser.Scene {
  constructor() {
    super('about');
  }

  create() {
    const style = { fontSize: '18px', wrapWidth: 300, fixedWidth: 300, fixedHeight: 150 }
    let text =
      "Projet créé dans le cadre du cours intitulé\n 'Jeu vidéo 2d' et dispensé à l'Université de Lausanne par le professeur Isaac Pante.";
    this.add.text(200, 300, text, style);


    let boutonMenu = this.add.text(200, 100, 'BACK TO MENU');
    boutonMenu.setInteractive();
    boutonMenu.on('pointerdown', () => this.scene.start('accueil'));
  }

  
}

