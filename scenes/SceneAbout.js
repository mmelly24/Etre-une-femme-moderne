class SceneAbout extends Phaser.Scene {
  constructor() {
    super('about');
  }

  create() {
    const style = {
      fontSize: '18px',
    };
    let text = 'Voir les informations ci-dessous';
    this.add.text(200, 300, text, style);

    let boutonMenu = this.add.text(200, 100, 'BACK TO MENU');
    boutonMenu.setInteractive();
    boutonMenu.on('pointerdown', () => this.scene.start('accueil'));
  }
}
