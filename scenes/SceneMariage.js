class SceneMariage extends Phaser.Scene {
  constructor() {
    super('mariage');
  }

  create() {
    let boutonOui = this.add.text(480, 500, 'oui');
    boutonOui.setInteractive();
    boutonOui.on('pointerdown', () => this.scene.start('enfants'));
  }
}
