class SceneMaternite extends Phaser.Scene {
    constructor() {
      super('maternite');
    }
  
    preload() {
      chargerPlugin(this);
      this.load.image('baby', 'assets/sprite_baby.png')
      this. load.image('jaugeVert', 'assets/greenBar.png');
      this.load.image('stunnedFace', 'assets/sprite_stunned_face.png');
      this.load.image('happyFace', 'assets/sprite_happy_face.png');
      this.load.image('jaugeOrange', 'assets/yellowBar.png');
      this.load.image('jaugeRouge', 'assets/redBar.png')
      this.load.image('basic', 'assets/sprite_basic_face.png')
    }
  
    create() {
      this.add.image(110, 170,'baby').setScale(0.8);
      jaugeDesillusion(this, 900, 290, 'stunnedFace', 'jaugeOrange', 1.3);
      //this.add.text(200, 100, 'SCENE MATERNITE');
      timeBar(this, 500, 400, 2.6);

      let content = `\n\nVotre sortie de l'hôpital a été difficile à gérer. L’expérience traumatisante que vous avez vécue, ainsi que votre épuisement général vous rendent presque incapable de vous occupez correctement d’Emma lors des premiers jours. Vous n’avez toutefois par le choix de vous remettre rapidement : Mathieu n’a que 10 jours de congé paternité.\n\n
      \n\nCette difficulté s’accompagne alors d’un sentiment de culpabilité : vous qui venez de vivre “le plus beau jour de votre vie”, êtes en réalité dans un état dépressif, et vous avez l’impression de ne pas être à la hauteur pour vous occuper d’Emma.La reprise du travail par Mathieu accentue alors ce sentiment puisque vous êtes désormais la plupart du temps seule avec votre petite fille.
      \n\n\n\n\nBien sûr, votre famille et vos amis passent de temps en temps. "Comme elle est mignonne cette petite !" "Combien pesait-elle à sa naissance ?" "Est-ce que tu la nourris suffisamment ?"... Tous se préoccupent beaucoup de la petite, et vous en oublient presque.\n\n\n\n\n
      A la fin de votre congé maternité, vous avez réussi à trouver un équilibre supportable. Mathieu regrette évidemment de ne pas pouvoir être plus présent à vos côtés pour prendre soin d’Emma mais son nouveau poste lui prend beaucoup de temps. Votre patron vous appelle pour savoir si vous désirez retrouver le poste que vous aviez laissé le temps d’accoucher.
      \n
      \n\nVous hésitez longuement : vous avez envie de retrouver votre travail, mais vous souhaitez également passer du temps avec votre fille et la voir grandir.
      Désirez-vous reprendre le travail ou quitter votre poste pour vous occuper de votre fille encore quelques années ?\n\n`;
      let reponseOui = `\n\n\n\nComme vous n’étiez pas encore sûre de vouloir laisser votre fille, vous n’avez pas chercher une place en crèche lors de votre grossesse. Vous cherchez donc désespérément une place, mais les garderies sont pleines à craquer et il manque cruellement de places.\n\n\n\n\n\n\n\n"Essayez l’année prochaine madame ! Vous savez, il faut vous inscrire en crèche dès que vous apprenez votre grossesse si vous espérez trouver une place à temps... Ah bah oui ma petite dame, c’est la vraie vie ici, pas un conte de fée !" répond le directeur de la dernière garderie de votre liste.\n\n
      \n\n\n\nBien que le nouveau poste de Mathieu vous offre une situation financière agréable, vous n’avez pas les moyens de vous payer une maman de jour 5 jours par semaine. Vous devez donc recommencer le travail à temps partiel. Vous entamez un 60%, et consacrez vos jeudis et vendredis à votre petite Emma.\n\n\n\nEn plus de cela, vous prenez en charge les tâches ménagères de votre maison : "Je sais ma chérie, j’aimerais pouvoir t’aider mais tu sais en ce moment avec le travail je suis épuisé.".Evidemment, pour Mathieu s’occuper de votre fille et travailler à 60% n’est pas source d’épuisement... Vous chassez ces pensées négatives, en vous rappelant que tous les deux essayez de faire au mieux… Pour lui aussi ce n’est pas facile de tout gérer… \n\n
      \n\n\n\n\nToutefois, entre les repas, les rdv chez le médecin, les courses, le ménage, les invitations, vous commencez à ne plus savoir où donner de la tête.\n\n\n\n\n\n\n\n\n\n\nAu travail, la situation n’est pas au beau fixe non plus. Puisque vous devez vous dépêcher de récupérer Emma à la fin du travail, vous loupez de nombreuses sorties d’entreprise.\n\n\n\n\n\n\n\nEn plus de vous empêcher de créer de réels liens avec vos collègues, vous ratez une occasion d’obtenir une promotion : le poste pour lequel vous étiez en concurrence avec l’un de vos collègue a été pourvu lors d’une réunion imprévue et tardive à laquelle vous n’avez justement pas pu assister à cause d’Emma...\n\n\nAprès 2 ans dans cette situation, vous baissez les bras. L’épuisement constant que vous ressentez devient insoutenable, et vos parents vous font remarquer que vous ne passez plus assez de temps avec votre fille... Vous décidez de suivre leur conseil, et démissionnez donc de votre poste.`;
      let reponseNon =`\n\n\n\nVous devenez donc mère au foyer, et vous vous consacrez à Emma. Ce n'est pas facile car vous abandonnez vos rêves de carrière, mais c'est la meilleure solution pour l'instant.\n\n`;
      let toastTexte1 = `L'inégalité est moins forte\nlorsque des structures d’accueil\nsont disponibles pour la petite enfance,\net les congés parentaux étendus\nconstituent un agent facilitateur\nimportant pour le retour des femmes\nà la vie professionnelle.\nOr, en Suisse, ces deux éléments\nsont encore peu développés.\n(Bühlmann, Elcheroth, Tettamanti, 2016)`;
      let toastTexte2 = `En 2019, les hommes actifs en Suisse\nsont 82% à travailler à temps plein,\ncontre seulement 40% des femmes actives.\nCette distribution est considérée\ncomme la nouvelle division sexuée du travail,\ndans laquelle les femmes doivent assumer\nune double journée de travail. (Stat. OFS, 2019)`;
      let toastTexte3 = `On parle de "pafond de verre"\npour désigner la barrière invisible\nbloquant l'accès des femmes\naux positions dirigeantes\ndans les entreprises.\nCette situation peut être engendrée\npar des critères formels\n(par exemple la mobilité géographique,\nplus acceptée chez les hommes),\ninformels ou représentationnels\n(les stéréotypes associent\nle pouvoir aux hommes)\n(Guillaume, Pochic, 2007)`

      let textBoxQuestion = creerTextBox(this, content, 16);

      let boutonOui = creerBouton(this, false, 200, 480, 'REPRENDRE LE TRAVAIL');
      let boutonNon = creerBouton(this, false, 500, 480, 'S\'OCCUPER DE VOTRE FILLE');

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
          'mobilite',
          toastTexte1,
          toastTexte2,
          toastTexte3
        );
        jaugeDesillusion(this, 900, 290, 'basic', 'jaugeRouge', 1.3);
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
          toastTexte1,
          toastTexte2,
          toastTexte3
        );
        jaugeDesillusion(this, 900, 290, 'basic', 'jaugeOrange', 1.9);
      }); 
    }
  }