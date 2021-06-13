let count = 0;
class SceneCredits extends Phaser.Scene {
  constructor() {
    super('credits');
  }

  preload() {
    count++;

    if (count == 1) {
      let progressBar = this.add.graphics();
      let progressBox = this.add.graphics();
      progressBox.fillStyle(0x222222, 0.8);
      progressBox.fillRect(240, 270, 320, 50);

      let width = this.cameras.main.width;
      let height = this.cameras.main.height;
      let loadingText = this.make.text({
        x: width / 2,
        y: height / 2 - 50,
        text: 'Loading...',
        style: {
          font: '20px monospace',
          fill: '#ffffff',
        },
      });
      loadingText.setOrigin(0.5, 0.5);

      let percentText = this.make.text({
        x: width / 2,
        y: height / 2 - 5,
        text: '0%',
        style: {
          font: '18px monospace',
          fill: '#ffffff',
        },
      });
      percentText.setOrigin(0.5, 0.5);

      let assetText = this.make.text({
        x: width / 2,
        y: height / 2 + 50,
        text: '',
        style: {
          font: '18px monospace',
          fill: '#ffffff',
        },
      });
      assetText.setOrigin(0.5, 0.5);

      this.load.on('progress', function (value) {
        console.log(value);
        progressBar.clear();
        progressBar.fillStyle(0xffffff, 1);
        progressBar.fillRect(250, 280, 300 * value, 30);
        percentText.setText(parseInt(value * 100) + '%');
      });

      this.load.on('fileprogress', function (file) {
        console.log(file.src);
        assetText.setText('Loading asset: ' + file.key);
      });

      this.load.on('complete', function () {
        console.log('complete');
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
        assetText.destroy();
      });
    }
    this.load.audio('outro', 'assets/sounds/outro_besound.mp3');
    this.load.image('enceinte', 'assets/sprite_pregnant_woman.png');
    this.load.image('travailleuse', 'assets/sprite_working_woman1.png');
  }
  create() {
    
    this.add.image(200, 200, 'enceinte').setScale(0.7);
    this.add.image(800, 200, 'travailleuse').setScale(0.7);

    this.music = this.sound.add('outro');
    let musicConfig = {
      mute: false,
      volume: 0.3,
      rate: 1.2,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0,
    };

    this.music.play(musicConfig);

    this.creditsText = this.add.text(0, 0, 'Credits', {
      fontSize: '32px',
      fill: '#fff',
    });
    this.madeByText = this.add.text(
      0,
      0,
      'Jeu vidéo créé par: Nadège Pio et Marie Melly',
      {
        fontSize: '20px',
        fill: '#fff',
        textAlign: 'center',
      }
    );
    this.spriteByText = this.add.text(
      0,
      0,
      'Sprites: Nadège Pio et Marie Melly',
      {
        fontSize: '20px',
        fill: '#fff',
        textAlign: 'center',
      }
    );

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
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 12000,
      delay: 1000,
      onComplete: function () {
        this.destroy;
      },
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
      }.bind(this),
    });
  }
}
