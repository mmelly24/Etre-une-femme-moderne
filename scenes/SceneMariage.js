class SceneMariage extends Phaser.Scene {
  constructor() {
    super('mariage');
  }

  preload() {
    this.load.image('happyFace', 'assets/sprite_happy_face.png');
    chargerPlugin(this);
    this.load.scenePlugin({
      key: 'rexuiplugin',
      url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
      sceneKey: 'rexUI',
    });
  }

  create() {
    timeBar(this, 500, 400);
    let content = `Cela fait maintenant plusieurs mois que vous travaillez dans votre nouvelle entreprise. Malgré quelques déceptions, vous êtes globalement heureuse et satisfaite par votre lieu de travail.
    Toutesfois, quelque chose vous taraude l'esprit...\n\n\n\n\n\n
    Habitant depuis 2 ans avec votre petit-ami Mathieu, vous remarquez que ce dernier se comporte de manière suspecte... Lorsque vous lui en faite la remarque, il refuse d'en parler.
    Cette situation contribue à augmenter votre sentiment de malaise, et vous ne savez plus quoi faire pour que la situation s'arrange... Vous avez peur de voir votre couple se détruire aussi rapidement.
    ...\n
    Une semaine plus tard, votre calvaire se termine. En réalité, Mathieu préparait une merveilleuse surprise !
    
    Il vous demande en mariage au bord du lac, dans votre endroit favoris. Vous ne vous êtes absolument douté de rien ! Il s'agit maintenant de lui donner une réponse... 
    
    Acceptez-vous sa demande ?`;

    this.add.image(700, 150, 'happyFace').setScale(0.5);

    let textBoxQuestion = creerTextBox(this, content, 7);

    //let decisionMariage = '';

    //VARIABLE REPONSE NON

    let reponseOui = `Vous acceptez sa demande avec grand plaisir ! Cela faisait quelques mois que vous y pensiez également, et vous êtes ravie de voir que vos envies sont similaires. Après l’excitation du début, et l’annonce à vos familles et amis respectifs, il faut désormais s’atteler aux préparatifs…
    Mathieu, qui occupe lui aussi un poste important, vous fait remarquer qu’il n’a pas le temps de s’occuper des détails, et vous laisse donc en charge de la décoration. Lui-même insiste d’ailleurs sur son incapacité à faire des choix esthétiques, et souligne votre bon goût inné.\n
    Vous n’avez pas le cœur de lui imposer cette tâche, et acceptez donc de prendre en charge cet aspect-là de la cérémonie… Toutefois, cela vous ajoute une énorme pression, et votre moral n’est pas au beau fixe…\n\n\n De plus, la fatigue s’accumule, et votre patron vous fait remarquer que votre travail baisse en qualité. Heureusement, le mariage arrive finalement et après une cérémonie splendide, vous revenez à votre rythme de vie initial. Tout rentre dans l’ordre et vous êtes à nouveau motivée.`;

    //VARIABLE POUR REPONSE OUI

    let reponseNon = `Même si vous aimez profondément Mathieu, vous ne vous sentez pas prête à faire le grand pas. D’ailleurs, vous pensez même ne jamais vouloir le faire car le mariage n’a jamais été un but en soi pour vous.\n\n\n
      Vous refusez donc gentiment la proposition de votre petit-ami, tout en le rassurant sur votre amour : le mariage n’est pas une condition nécessaire à l’amour, et vos sentiments pour lui restent inchangés.\n Après quelques jours, Mathieu comprend et accepte votre choix, même si cela représente un sacrifice important pour lui, sa famille étant très attachée aux traditions.`;

    let boutonOui = creerBouton(
      this,
      false,
      380,
      500,
      'OUI' /*, 'mariageOui'*/
    );
    let boutonNon = creerBouton(
      this,
      false,
      580,
      500,
      'NON' /*, 'mariageNon'*/
    );

    textBoxQuestion.on('pageend', () => {
      if (textBoxQuestion.isLastPage) {
        boutonOui.setVisible(true);
        boutonNon.setVisible(true);
      }
    });

    //let popupTexte = null;
    //let popupTitre = null;
    let popupTitre = 'MARIAGE';
    let popupTexte = ` Le mariage reste un choix de vie largement adopté par la population 
    suisse: XX% est mariée`;

    /*boutonOui.on('pointerdown', () => {
      decisionMariage = true;
      let reponse = `Vous acceptez sa demande avec grand plaisir ! Cela faisait quelques mois que vous y pensiez également, et vous êtes ravie de voir que vos envies sont similaires. Après l’excitation du début, et l’annonce à vos familles et amis respectifs, il faut désormais s’atteler aux préparatifs…
      Mathieu, qui occupe lui aussi un poste important, vous fait remarquer qu’il n’a pas le temps de s’occuper des détails, et vous laisse donc en charge de la décoration. Lui-même insiste d’ailleurs sur son incapacité à faire des choix esthétiques, et souligne votre bon goût inné.\n
      Vous n’avez pas le cœur de lui imposer cette tâche, et acceptez donc de prendre en charge cet aspect-là de la cérémonie… Toutefois, cela vous ajoute une énorme pression, et votre moral n’est pas au beau fixe…\n\n\n De plus, la fatigue s’accumule, et votre patron vous fait remarquer que votre travail baisse en qualité. Heureusement, le mariage arrive finalement et après une cérémonie splendide, vous revenez à votre rythme de vie initial. Tout rentre dans l’ordre et vous êtes à nouveau motivée.`;
      textBoxQuestion.destroy();
      let reponseTextBox = creerTextBox(this, reponse, 5);
      reponseTextBox.on('pageend', () => {
        if (reponseTextBox.isLastPage) {
          if (popupTexte != null) {
            this.time.addEvent({
              delay: 5000,
              callback: () => {
                reponseTextBox.destroy();
                Alert(this, 'salut', popupTexte, 500, 300);
                changerPage(this, 700, 500, 'NEXT', 'enfants', [
                  decisionMariage,
                ]); // VERIFIER LE PASSAGE DE LA VARIABLE A LA SCENE SUIVANTE
              },
              loop: false,
            });
          } else changerPage(this, 700, 500, 'NEXT', 'enfants', [decisionMariage,]);
        }
      });
      boutonOui.setVisible(false);
      boutonNon.setVisible(false);
      boutonOui.disableInteractive();
      boutonNon.disableInteractive();
    });

    boutonNon.on('pointerdown', () => {
      decisionMariage = false;
      let reponse = `Même si vous aimez profondément Mathieu, vous ne vous sentez pas prête à faire le grand pas. D’ailleurs, vous pensez même ne jamais vouloir le faire car le mariage n’a jamais été un but en soi pour vous.\n\n\n
      Vous refusez donc gentiment la proposition de votre petit-ami, tout en le rassurant sur votre amour : le mariage n’est pas une condition nécessaire à l’amour, et vos sentiments pour lui restent inchangés.\n Après quelques jours, Mathieu comprend et accepte votre choix, même si cela représente un sacrifice important pour lui, sa famille étant très attachée aux traditions.`;
      textBoxQuestion.destroy();
      let reponseTextBox = creerTextBox(this, reponse, 5);
      reponseTextBox.on('pageend', () => {
        if (reponseTextBox.isLastPage) {
          changerPage(this, 700, 500, 'NEXT', 'enfants', [decisionMariage]); // VERIFIER LE PASSAGE DE LA VARIABLE A LA SCENE SUIVANTE
        }
      });
      boutonOui.setVisible(false);
      boutonNon.setVisible(false);
      boutonOui.disableInteractive();
      boutonNon.disableInteractive();
    });*/

    boutonOui.on('pointerdown', () => {
      choixJoueur(
        this,
        boutonOui,
        true,
        textBoxQuestion,
        reponseOui,
        10,
        boutonNon,
        'enfants',
        popupTexte,
        popupTitre
      );
    });

    boutonNon.on('pointerdown', () => {
      choixJoueur(
        this,
        boutonNon,
        false,
        textBoxQuestion,
        reponseNon,
        10,
        boutonOui,
        'enfants',
        popupTexte,
        popupTitre
      );
    });

    
    
    /*Alert(this, 'salut', 'salut ca va', 500, 300).then(() => {
        return Alert(this, 'chainage', 'test chainage', 500, 300);
      });*/
  }
}
