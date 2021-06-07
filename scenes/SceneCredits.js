class SceneCredits extends Phaser.Scene {
  constructor() {
    super('credits');
  }

  preload () {
    this.load.audio('outro',"assets/sounds/jazz_besound.mp3" )
  }
  create() {
    /*let boutonMenu = this.add.text(200, 100, 'BACK TO MENU');
    boutonMenu.setInteractive();
    boutonMenu.on('pointerdown', () => this.scene.start('accueil'));*/

    this.music = this.sound.add("outro");
    let musicConfig = {
      mute: false,
      volume: 0.3,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0
    }

    this.music.play(musicConfig);

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

    //zone game object 
    this.zone = this.add.zone(
      config.width / 2,
      config.height / 2,
      config.width,
      config.height
    );

    Phaser.Display.Align.In.Center(this.creditsText, this.zone);

    Phaser.Display.Align.In.Center(this.madeByText, this.zone);

    Phaser.Display.Align.In.Center(this.spriteByText, this.zone);


    //setY methode place le texte en dehors de l'écran, et le fait 
    //ensuite défilé en temps voulu
    this.madeByText.setY(1000);
    this.spriteByText.setY(1000);

    
    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      //posiiton de notre objet game à laquelle nous voulons qu'il se termine
      y: -100,
      //ease : fonction de tween
      ease: 'Power1',
      //durée du tween
      duration: 3000,
      //durée d'attente avant que le tween commence
      delay: 1000,
      //callback appelé une fois que le tween est complété
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
        this.destroy;
        this.music.stop(musicConfig);
        this.scene.start('accueil');
      }.bind(this)
    });
  }
}
