class SceneMariageNon extends Phaser.Scene {
    constructor() {
      super('mariageNon');
    }
  
    preload() {
      this.load.image('happyFace', 'assets/sprite_happy_face.png');
      this.load.scenePlugin({
        key: 'rexuiplugin',
        url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
        sceneKey: 'rexUI',
      });
      this.load.image(
        'nextPage',
        'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/arrow-down-left.png'
      );
    }

    create() {

      let content = `Même si vous aimez profondément Mathieu, vous ne vous sentez pas prête à faire le grand pas. D’ailleurs, vous pensez même ne jamais vouloir le faire car le mariage n’a jamais été un but en soi pour vous.\n\n\n
    Vous refusez donc gentiment la proposition de votre petit-ami, tout en le rassurant sur votre amour : le mariage n’est pas une condition nécessaire à l’amour, et vos sentiments pour lui restent inchangés.\n Après quelques jours, Mathieu comprend et accepte votre choix, même si cela représente un sacrifice important pour lui, sa famille étant très attachée aux traditions.`
      new TextBox(this, content, 9);
      new Bouton(this, true, 700, 500, 'NEXT', 'enfants');
    }
  
  }