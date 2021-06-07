class SceneCredits extends Phaser.Scene {
  constructor() {
    super('credits');
  }

  create() {
    /*let boutonMenu = this.add.text(200, 100, 'BACK TO MENU');
    boutonMenu.setInteractive();
    boutonMenu.on('pointerdown', () => this.scene.start('accueil'));*/

    this.creditsText = this.add.text(0, 0, 'Credits', {
      fontSize: '32px',
      fill: '#fff',
    });
    this.madeByText = this.add.text(0, 0, 'Créé par: Nadège Pio et Marie Melly', {
      fontSize: '20px',
      fill: '#fff',
    });
    this.spriteByText = this.add.text(0,0, 'Sprite de la personnage principale :\n\nNadège Pio et Marie Melly', {
      fontSize: '20px',
      fill: '#fff',
    })

    this.zone = this.add.zone(
      config.width / 2,
      config.height / 2,
      config.width,
      config.height
    );

    Phaser.Display.Align.In.Center(this.creditsText, this.zone);

    Phaser.Display.Align.In.Center(this.madeByText, this.zone);

    Phaser.Display.Align.In.Center(this.spriteByText, this.zone);



    this.madeByText.setY(1000);
    this.spriteByText.setY(1000);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete: function () {
        this.destroy;
      }
    });
     
    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 12000,
      delay: 1000,
      onComplete: function () {
        this.destroy;
      }
    });

    this.madeByTween = this.tweens.add({
      targets: this.spriteByText,
      y: -300,
      ease: 'Power1',
      duration: 12000,
      delay: 1500,
      onComplete: function () {
        this.madeByTween.destroy;
        this.scene.start('accueil');
      }.bind(this)
    });
  }
}
