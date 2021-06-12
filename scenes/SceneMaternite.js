class SceneMaternite extends Phaser.Scene {
    constructor() {
      super('maternite');
    }
  
    preload() {
      chargerPlugin(this);
    }
  
    create() {
      this.add.text(200, 100, 'SCENE MATERNITE');
      timeBar(this, 500, 400);
      let content = `Votre sortie de l'hôpital a été difficile à gérer. L’expérience traumatisante que vous avez vécue, ainsi que votre épuisement général vous rendent presque incapable de vous occupez correctement d’Emma lors des premiers jours. Vous n’avez toutefois par le choix de vous remettre rapidement : Mathieu n’a que 10 jours de congé paternité. Cette difficulté s’accompagne alors d’un sentiment de culpabilisation : vous qui venez de vivre “le plus beau jour de votre vie”, êtes en réalité dans un état dépressif, et vous avez l’impression de ne pas être à la hauteur pour vous occuper d’Emma.\n La reprise du travail par Mathieu accentue alors ce sentiment puisque vous êtes désormais la plupart du temps seule avec votre petite fille. Bien sûr, votre famille et vos amis passent de temps en temps. "Comme elle est mignonne cette petite !" "Combien pesait-elle à sa naissance ?" "Est-ce que tu la nourris suffisamment ?"`;
      let reponseOui = "oui je veux reprendre le travail + conséquences";
      let reponseNon ="non, je veux m'occuper de mon enfant";
      let toastTexte1 = "60% des familles en suisse sont composés d'une\n femme au foyer"
      let textBoxQuestion = creerTextBox(this, content, 7);

      let boutonOui = creerBouton(this, false, 380, 500, 'Oui, je veux reprendre le travail');
      let boutonNon = creerBouton(this, false, 580, 500, 'Non, je désire m\'ocuper de ma fille');

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
          'retour',
          toastTexte1
        );
      });

      boutonNon.on('pointerdown', () => {
        choixJoueur(
          this,
          boutonNon,
          false,
          textBoxQuestion,
          reponseNon,
          16,
          boutonOui,
          'mobilite',
          toastTexte1
        );
      });




  
    }
  }