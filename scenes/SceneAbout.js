class SceneAbout extends Phaser.Scene {
  constructor() {
    super('about');
  }

  create() {
    let text =
      "Projet créé dans le cadre du cours intitulé 'Jeu vidéo 2d' et dispensé à l'Université de Lausanne par le professeur Isaac Pante.";
    this.add.text(200, 300, text, { fontSize: '12px' });


    let boutonMenu = this.add.text(200, 100, 'BACK TO MENU');
    boutonMenu.setInteractive();
    boutonMenu.on('pointerdown', () => this.scene.start('accueil'));
  }
}

