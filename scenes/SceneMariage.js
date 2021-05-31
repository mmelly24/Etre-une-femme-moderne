class SceneMariage extends Phaser.Scene {
  constructor() {
    super('mariage');
  }

  create() {
    let boutonOui = this.add.text(380, 500, 'OUI');
    boutonOui.setInteractive();
    boutonOui.on('pointerdown', () => this.scene.start('enfants'));

    let boutonNon = this.add.text(580, 500, 'NON');
    boutonNon.setInteractive();
    boutonNon.on('pointerdown', () => this.scene.start('enfants'));
  }
}
