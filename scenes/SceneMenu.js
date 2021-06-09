class SceneMenu extends Phaser.Scene {
  constructor() {
    super('accueil');
  }

  preload() {
    this.load.image('femme', 'assets/sprite_working_woman1.png');
    new Images (this, 500, 300, 'femme', 0.5, 'assests/sprite_working_woman1.png');
  }

  create() {
    this.add.text(250, 100, 'ETRE UNE FEMME MODERNE', { fontSize: '40px' });

    new Images (this, 500, 300, 'femme', 0.5);
    //this.add.image(500, 300, 'femme').setScale(0.7);
    let boutonPlay = this.add.text(480, 500, 'PLAY');
    boutonPlay.setInteractive();
    boutonPlay.on('pointerdown', () => this.scene.start('instructions'));
    

    let boutonAbout = this.add.text(540, 500, 'ABOUT');
    boutonAbout.setInteractive();
    boutonAbout.on('pointerdown', () => this.scene.start('about'));
    

    let boutonCredits = this.add.text(390, 500, 'CREDITS');
    boutonCredits.setInteractive();
    boutonCredits.on('pointerdown', () => this.scene.start('credits'));
  }
}
