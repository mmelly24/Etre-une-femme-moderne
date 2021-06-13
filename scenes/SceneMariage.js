class SceneMariage extends Phaser.Scene {
  constructor() {
    super('mariage');
  }

  preload() {
    this.load.image('happyFace', 'assets/sprite_happy_face.png');
    this.load.image('jaugeVert', 'assets/greenBar.png');
    this.load.image('jaugeJaune', 'assets/yellowBar.png');
    this.load.image('boyfriend', 'assets/sprite_boyfriend_happyface.png');
    this.load.image('basicFace', 'assets/sprite_basic_face.png');
    
    chargerPlugin(this);
    this.load.scenePlugin({
      key: 'rexuiplugin',
      url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
      sceneKey: 'rexUI',
    });
  }

  create() {
    timeBar(this, 500, 400);
    this.add.image(110, 250,'boyfriend').setScale(0.4);
    jaugeDesillusion(this, 900, 290, 'happyFace', 'jaugeVert', 120);

    let content = `\nCela fait maintenant plusieurs mois que vous travaillez dans votre nouvelle entreprise. Malgré quelques déceptions, vous êtes globalement heureuse et satisfaite de votre lieu de travail.
    Mais quelque chose vous taraude l’esprit… Mathieu se comporte de manière étrange. Il paraît très stressé et s’isole beaucoup, il est scotché à son téléphone. \n\n\nLorsque vous lui en faites la remarque, il refuse d’en parler, ce qui contribue à augmenter votre sentiment de malaise.
    Une semaine plus tard, le mystère s’éclaircit. Alors que vous vous dirigez vers le lac pour profiter d'une belle soirée d'été, Mathieu vous emmène par surprise sur un bateau qu'il a privatisé. Là, avec grande cérémonie, il s'agenouille et vous demande en mariage! Vous ne l’avez pas du tout vu venir !`;
    //this.add.text(200, 100, 'SCENE MARIAGE');
    //this.add.image(700, 150, 'happyFace').setScale(0.5);

    let textBoxQuestion = creerTextBox(this, content, 16);

    //let decisionMariage = '';

    //VARIABLE REPONSE NON

    let reponseOui = `\nVous acceptez sa demande avec grand plaisir ! Vous y pensiez également depuis quelques mois. 
    Après l’annonce à vos familles et amis respectifs, il faut désormais s’atteler aux préparatifs. Mathieu, qui occupe un poste important, vous fait remarquer qu’il n’a pas le temps de s’occuper des détails. Lui-même insiste d’ailleurs sur son incapacité à faire des choix esthétiques, et souligne votre bon goût inné. 
    \nVous savez d’expérience que Mathieu n’est effectivement pas très motivé par ce genre de préparatifs. Vous acceptez donc de prendre en charge l’organisation du mariage en vous disant que ce sera plus simple que de tout lui expliquer! 
    Mais vous aviez sous-estimé la charge de travail… Pendant l’année que vous prennent les préparatifs, vous ressentez une énorme pression, et votre moral n’est pas au beau fixe… \n\nLa fatigue s’accumule. Votre chef vous fait remarquer que votre travail baisse en qualité. 
    Le jour J arrive enfin, et vous êtes aussi stressée qu'excitée! La cérémonie est splendide. Avec soulagement, vous revenez ensuite à votre rythme de vie habituel.`;

    //VARIABLE POUR REPONSE OUI

    let reponseNon = `Même si vous aimez profondément Mathieu, vous ne vous sentez pas prête. Vous n'êtes d'ailleurs même pas sûre de vouloir vous marier un jour. 
    Vous refusez donc gentiment la proposition de votre petit-ami, tout en le rassurant: le mariage n’est pas une condition nécessaire à l’amour, et vos sentiments pour lui restent inchangés. 
    Après quelques jours, Mathieu comprend et accepte votre choix, même si cela représente un sacrifice important pour lui, sa famille étant très attachée aux traditions.`;

    let toastTexte1 = `Le mariage est devenu un véritable \névénement dans les dernières décennies. \nSon organisation s'est considérablement \ncomplexifiée et alourdie. Elle \nrepose essentiellement sur les épaules \ndes femmes, qui y sont assignées de \npart leurs compétences "naturelles". \nLa demande en mariage est devenue un acte \nen soi, sous la responsabilité des hommes, \ndans leur rôle "naturel" d'initiateurs de \nl'action. \nLe mariage contribue ainsi toujours \nà normaliser les stéréotypes de genres.\n(Maillochon, 2016)`;

    let boutonOui = creerBouton(
      this,
      false,
      300,
      480,
      'ACCEPTER' /*, 'mariageOui'*/
    );
    let boutonNon = creerBouton(
      this,
      false,
      580,
      480,
      'REFUSER' /*, 'mariageNon'*/
    );

    textBoxQuestion.on('pageend', () => {
      if (textBoxQuestion.isLastPage) {
        boutonOui.setVisible(true);
        boutonNon.setVisible(true);
      }
    });

    boutonOui.on('pointerdown', () => {
      choixJoueur(
        this,
        boutonOui,
        true,
        textBoxQuestion,
        reponseOui,
        16,
        boutonNon,
        'enfants',
        toastTexte1
      );
      jaugeDesillusion(this, 900, 290, 'basicFace', 'jaugeJaune', 2);
    });

    boutonNon.on('pointerdown', () => {
      choixJoueur(
        this,
        boutonNon,
        false,
        textBoxQuestion,
        reponseNon,
        12,
        boutonOui,
        'enfants'
      );
      jaugeDesillusion(this, 900, 290, 'happyFace', 'jaugeVert', 120);
    });
  }
}
