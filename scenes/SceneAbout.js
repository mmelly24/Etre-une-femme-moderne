class SceneAbout extends Phaser.Scene {
    constructor() {
      super('about');
    }

    create(){
              let boutonMenu = this.add.text(200, 100, 'BACK TO MENU');
        boutonMenu.setInteractive();
        boutonMenu.on('pointerdown', () => this.scene.start('accueil'));
    }
}