class SceneGrossesse extends Phaser.Scene {
  constructor() {
    super('grossesse');
  }

  preload() {
    chargerPlugin(this);
  }

  create() {
    this.add.text(200, 100, 'SCENE GROSSESSE');
    timeBar(this, 500, 400);

    let content = 'grossesse'/*`\n\nAprès deux mois de tentatives, vous voilà enfin enceinte. La joie que vous avez éprouvée lorsque vous avez découvert un test de grossesse positif est indescriptible ! Vous vous empressez d'appeler vos parents, pour leur annoncer la bonne nouvelle.
    "Papa maman !! J'ai quelque chose à vous dire ! Mathieu et moi attendons un bébé... vous allez être grands-parents !!"\n
    \n\n"Oh ma chérie ! C’est fantastique !! Nous n’attendions que cela depuis que Mathieu et toi avez emménagé ensemble !"
    Après avoir annoncé la bonne nouvelle à vos parents et vos beaux-parents, vous gardez le secret pour les trois premiers mois, comme votre médecin vous l’a conseillé. Vous commencez toutefois à préparer l’arrivée du bébé, en achetant le matériel nécessaire.\n
    \n\n\n\n\nMathieu, qui jusque-là travaillait à 80%, prend un temps plein pour mettre de l'argent de côté. Les dépenses pour le bébé à venir sont déjà importantes, et ce n’est que le début ! 
    \n\n\n\n
    Vous voilà à la fin de votre premier trimestre ! Sur l’échographie, vous avez pu voir votre petit bout de chou, qui est en très bonne santé ! Quel soulagement !! Vous pouvez donc annoncer à votre entourage la bonne nouvelle : vous allez devenir mère !
    Pour fêter cela, votre belle-sœur, déjà maman de trois merveilleux enfants, vous invite au restaurant.\n\n\n Vous vous réjouissez, Mathieu et vous n’ayant plus pris le temps de sortir manger dehors depuis l’annonce de votre grossesse. 
    Au restaurant, votre belle-soeur vous dit : “Julie… Je ne suis pas sûre que ce soit bien que tu prennes un coca pour le petit… et puis tiens d’ailleurs, prend cette salade de quinoa, mon médecin me la recommandait pendant mes grossesses”. Elle ne vous laisse d’ailleurs pas le temps de répondre, et commande pour vous…\n \n\n\n\n\nCet événement n’est que le début d’une longue série. Il semblerait que depuis que vous portez un bébé en vous, tout le monde vous traite comme un incubateur dont le seul but est de maintenir en vie ce petit être.
    \n\n\n
    \n\n“Mange pas ça, mange ça, bois ça, surtout pas ça, assieds toi comme ça, ne bouge pas autant, ne reste pas inactive…" sont des phrases qui font désormais partie de votre quotidien. A cela s'ajoutent les gens qui touchent sans cesse votre ventre qui, depuis que vous avez entamé votre deuxième trimestre, est devenu très visible. \n\n\n
    Ces sollicitations incessantes vous mettent dans un état de stress intense et continu. Tout le monde vous l’a bien fait comprendre : si votre enfant est en mauvaise santé, ce sera vous la responsable, et personne d’autre. 
    Mathieu, maintenu dans l’euphorie de sa future parentalité, ne remarque pas votre détresse. De plus, depuis qu’il travaille à temps plein, son patron l’a remarqué et le sollicite de plus en plus.\n\n\n\n\n\nC’est lors de votre 6ème mois de grossesse que Mathieu reçoit une promotion : "Tu te rends compte ! j’ai réussi à obtenir une promotion alors que je l’attendais depuis des mois ! Je suis si content !!”.\n\n\n\n
    \n\n\nDe votre côté, la situation n’est pas là même. Votre patron vous l’a fait comprendre, votre grossesse n’est pas très bien venue : "Oh, vous allez avoir un enfant ? très bien très bien… Il va donc falloir que je cherche encore un remplaçant pendant votre congé maternité… quelle angoisse… Mais enfin bon, toutes mes félicitations !"\n\n
    \n\nComme vous allez vous absenter environ 14 semaines pendant votre congé maternité, vous essayez de tenir le plus longtemps possible pour obtenir les bonnes grâces de votre patron. Toutefois, lors de votre 8ème mois de grossesse, vous êtes tenue de rester chez vous : il ne faudrait pas vous épuiser, et mettre la vie du bébé en danger !\n\n
    Cette situation fait que le poste que vous visiez a été pourvu par l’un de vos collègue dont, ironiquement, la conjointe attend un enfant… Mais vous ne vous laissez pas abattre : ce sera pour la prochaine fois !
    Au 270ème jour de votre grossesse, le travail commence ! Vite vite, Mathieu vous emmène aux urgences ! “Mon dieu, mon dieu, mon dieu ! ça va aller ma chérie, reste calme, ça va aller !!!” crie-t-il, affolé, en vous conduisant au service maternité. \n
    \n\nLorsque vous arrivez au CHUV, le travail a déjà bien commencé. Vous êtes dilatée à 7cm. Plus que 3cm, et votre petit amour sera prêt à arriver ! La douleur est si intense que vous avez l’impression de vivre dans une autre dimension. Il vous est difficile de saisir ce qui se dit autour de vous, tant l’agitation des gens est accablante.\n\n\n\n\n\n\n\nLe personnel soignant préfère d’ailleurs s’adresser directement à Mathieu plutôt qu’à vous, qui êtes devenue, il semblerait, invisible aux yeux de tous.\n\n\n\n\n
    \n\n\n\n\n\n\n\nVous accouchez d’une magnifique petite fille, que vous nommez Emma.\n\n\n\n\n\n \n\n\nQuant à votre accouchement, il vous est encore difficile de revenir dessus... 
    Vous essayez d'oublier cette expérience traumatisante, mais des flash back vous accompagneront encore longtemps...
    `;*/

    let toastTexte1 = `Les violences obstétricales\nsont les comportements, actes, paroles\nou omissions commis par le personnel de santé\nqui ne sont pas justifiés\nmédicalement ou sont accomplis\nsans le consentement libre et éclairé\nd'une femme enceinte ou d'une jeune mère.\n(Wikipédia)`;
    let toastTexte2 = `La transition à la parentalité\nannonce souvent des obstacles dans\nla carrière des femmes et a contrario\nun accelerateur de la carrière des hommes\nsur le modèle du "male breadwinner" (l'homme pourvoyeur)\nqui se doit de subvenir aux besoins\nde sa famille. (Le Goff & Girardin, 2016)`;
    reponseTextBox = creerTextBox(this, content, 16);
    reponseTextBox.on('pageend', () => {
      if (reponseTextBox.isLastPage) {
        if (toastTexte1 != null) {
          this.time.addEvent({
            delay: 2000,
            callback: () => {
              reponseTextBox.destroy();
              creerToast(this, 'maternite', toastTexte1);
            },
            loop: false,
          });
        }
        if (toastTexte2 != null) {
          this.time.addEvent({
            delay: 15000,
            callback: () => {
              creerToast(this, 'maternite', toastTexte2);
            },
          });
        } else changerPage(this, 'SUIVANT', 'maternite');
      }
    });

    /* -----RENDU INUTILE PAR LES TEXTBOXES
    //test
    let text;
    let count = 0;

    text = this.add.text(400, 300, 'annonce: blablabla');

    //centrer le text
    Phaser.Display.Align.In.Center(text, this.add.zone(400, 300, 800, 600));

    let boutonAnnonce = this.add.text(700, 500, 'NEXT');
    boutonAnnonce.setInteractive();

    //exemple d'une fonctionnalité NEXT
    boutonAnnonce.on('pointerdown', () => {
      count++;
      if (count == 1) {
        text.setText('Tout le monde est heureux pour vous');
      } else if (count == 2) {
        text.setText('Vous commencez à vous sentir très fatiguée');
      }
    });*/
  }
}
