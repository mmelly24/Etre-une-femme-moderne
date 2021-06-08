class SceneMariageOui extends Phaser.Scene {
    constructor() {
      super('mariageOui');
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

      let content = `Vous acceptez sa demande avec grand plaisir ! Cela faisait quelques mois que vous y pensiez également, et vous êtes ravie de voir que vos envies sont similaires. Après l’excitation du début, et l’annonce à vos familles et amis respectifs, il faut désormais s’atteler aux préparatifs…
      Mathieu, qui occupe lui aussi un poste important, vous fait remarquer qu’il n’a pas le temps de s’occuper des détails, et vous laisse donc en charge de la décoration. Lui-même insiste d’ailleurs sur son incapacité à faire des choix esthétiques, et souligne votre bon goût inné.\n
      Vous n’avez pas le cœur de lui imposer cette tâche, et acceptez donc de prendre en charge cet aspect-là de la cérémonie… Toutefois, cela vous ajoute une énorme pression, et votre moral n’est pas au beau fixe…\n\n\n De plus, la fatigue s’accumule, et votre patron vous fait remarquer que votre travail baisse en qualité. Heureusement, le mariage arrive finalement et après une cérémonie splendide, vous revenez à votre rythme de vie initial. Tout rentre dans l’ordre et vous êtes à nouveau motivée.`

      new TextBox(this, content, 10);
      new Bouton(this, true, 700, 500, 'NEXT', 'enfants');
    }
  
  }
  