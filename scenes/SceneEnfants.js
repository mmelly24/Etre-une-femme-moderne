class SceneEnfants extends Phaser.Scene {
  constructor() {
    super('enfants');
  }

  preload() {
    this.load.image('happyFace', 'assets/sprite_happy_face.png');
    chargerPlugin(this);
    //this.load.plugin('rexeventpromiseplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexeventpromiseplugin.min.js', true);
  }

  create() {
    this.add.image(700, 150, 'happyFace').setScale(0.5);

    let content =
      'Les années passent, se pose la question des enfants. BLA BLA BLA Souaitez-vous avoir des enfants?';
    let reponseOui =
      "La décision est claire, tant pour vous que pour votre conjoint: c'est oui! BLA BLA BLA";
    let reponseNon = 'Après mûre réflexion, non. BLA BLA BLA';
    let popupTitre = 'PARENTALITÉ';
    let popupTexte = "Seules x% des femmes en Suisse n'ont pas d'enfants au cours de leur vie";

    let textBoxQuestion = creerTextBox(this, content, 3);

    let boutonOui = creerBouton(this, false, 380, 500, 'OUI');
    let boutonNon = creerBouton(this, false, 580, 500, 'NON');

    textBoxQuestion.on('pageend', () => {
      if (textBoxQuestion.isLastPage) {
        boutonOui.setVisible(true);
        boutonNon.setVisible(true);
      }
    });


    boutonOui.on('pointerdown', () => {
      textBoxQuestion.destroy();
      reponseTextBox = creerTextBox(this, reponseOui, 7);
      reponseTextBox.on('pageend', () => {
        if (reponseTextBox.isLastPage) {
          if (popupTexte != null) {
            this.time.addEvent({
              delay: 5000,
              callback: () => {
                reponseTextBox.destroy();
                var toast = this.rexUI.add.toast({
                  x: 400,
                  y: 300,
                
                  background: this.rexUI.add.roundRectangle(0, 0, 2, 2, 20, COLOR_PRIMARY),
                  text: this.add.text(0, 0, '', {
                      fontSize: '24px'
                  }),
                  space: {
                      left: 20,
                      right: 20,
                      top: 20,
                      bottom: 20,
                  },
                })
                  .show(popupTexte)
                  .show('Phaser 3 is good')
                  .show('See you next time')
                /*Alert(this, popupTitre, popupTexte, 500, 300);*/
                changerPage(this, 700, 500, 'NEXT', 'grossesse');
              },
              loop: false,
            });
          } else changerPage(this, 700, 500, 'NEXT', 'grossesse');
        }
      });
      boutonOui.setVisible(false);
      boutonNon.setVisible(false);
      boutonOui.disableInteractive();
      boutonNon.disableInteractive();
    });



    //boutonNon.on('pointerdown', () => {});

    /*boutonOui.on('pointerdown', () => {
      choixJoueur(this, boutonOui, true, textBoxQuestion, reponseOui, 3, boutonNon, 'grossesse', popupTexte, popupTitre);
    });

    boutonNon.on('pointerdown', () => {
      choixJoueur(this, boutonNon, false, textBoxQuestion, reponseNon, 3, boutonOui, 'promotion', popupTexte, popupTitre);
    });*/

    /*
    this.add.text(380, 300, 'enfants: blablabla');

    let oui = this.add.text(380, 500, 'OUI');
    oui.setInteractive();
    //aller vers une scène qui contient de la théorie sur la grossesse
    oui.on('pointerdown', () => this.scene.start('grossesse'));

    let boutonNon = this.add.text(580, 500, 'NON');
    boutonNon.setInteractive();
    //aller vers une scène qui illustre la pression sociale
    boutonNon.on('pointerdown', () => this.scene.start('pression'));
    */
  }

  
}


