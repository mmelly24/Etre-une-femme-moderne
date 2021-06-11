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

    let content = `\n\nAprès deux mois de tentatives, vous voilà enfin enceinte. La joie que vous avez éprouvée lorsque vous avez découvert un test de grossesse positif est indescriptible ! Vous vous empressez d'appeler vos parents, pour leur annoncer la bonne nouvelle.
    "Papa maman !! J'ai quelque chose à vous dire ! Mathieu et moi attendons un bébé... vous allez être grands-parents !!"\n
    \n\n"Oh ma chérie ! C’est fantastique !! Nous n’attendions que cela depuis que Mathieu et toi avez emménagé ensemble !"
    Après avoir annoncé la bonne nouvelle à vos parents et vos beaux-parents, vous gardez le secret pour les trois premiers mois, comme votre médecin vous l’a conseillé. Vous commencez toutefois à préparer l’arrivée du bébé, en achetant le matériel nécessaire.\n
    \n\n\nMathieu, qui jusque-là travaillait à 80%, prend un temps plein pour mettre de l'argent de côté. Les dépenses pour le bébé à venir sont déjà importantes, et ce n’est que le début ! 
    \n\nVous voilà à la fin de votre premier trimestre ! Sur l’échographie, vous avez pu voir votre petit bout de chou, qui est en très bonne santé ! Quel soulagement !! Vous pouvez donc annoncer à votre entourage la bonne nouvelle : vous allez devenir mère !
    Pour fêter cela, votre belle-sœur, déjà maman de trois merveilleux enfants, vous invite au restaurant. Vous vous réjouissez, Mathieu et vous n’ayant plus pris le temps de sortir manger dehors depuis l’annonce de votre grossesse. 
    “Julie… Je ne suis pas sûre que ce soit bien que tu prennes un coca pour le petit… et puis tiens d’ailleurs, prend cette salade de quinoa, mon médecin me la recommandait pendant mes grossesses” dit votre belle soeur... Elle ne vous laisse d’ailleurs pas le temps de répondre, et commande pour vous…. Cet événement n’est que le début d’une longue série. Il semblerait que depuis que vous portez un bébé en vous, tout le monde vous traite comme un incubateur dont le seul but est de maintenir en vie ce petit être.
    “Mange pas ça, mange ça, bois ça, surtout pas ça,  assieds toi comme ça, ne bouge pas autant, ne reste pas inactive …" font désormais partie de votre quotidien. A cela s'ajoutent les gens qui touchent sans cesse votre ventre qui, depuis que vous avez entamé votre deuxième trimestre, est devenu très visible. 
    Ces sollicitations incessantes vous mettent dans un état de stress intense et continu. Tout le monde vous l’a bien fait comprendre : si votre enfant est en mauvaise santé, ce sera vous la responsable, et personne d’autre. 
    Mathieu. maintenu dans l’euphorie de sa future parentalité, ne remarque pas votre détresse. D’ailleurs, depuis qu’il travaille à temps plein, son patron l’a remarqué et a salué son travail. C’est lors de votre 6ème mois de grossesse que Mathieu reçoit une promotion : “Tu te rends compte ! j’ai réussi à obtenir une promotion alors que je l’attendais depuis des mois ! Je suis si content”. 
    De votre côté, la situation n’est pas là même. Votre patron vous l’a fait comprendre, votre grossesse n’est pas très bien venue : “Oh, vous allez avoir un enfant ? très bien très bien…. il va donc falloir que je cherche encore un remplaçant pendant votre congé maternité…. quelle angoisse… Mais enfin bon, toutes mes félicitations !”
    Comme vous allez vous absenter environ 14 semaines pendant votre congé maternité, vous essayez de tenir le plus longtemps possible pour obtenir les bonnes grâces de votre patron. Toutefois, lors de votre 8ème mois de grossesse, vous êtes tenue de rester chez vous : il ne faudrait pas vous épuiser, et mettre la vie du bébé en danger !
    Cette situation fait que le poste que vous visiez a été pourvu par l’un de vos collègue dont, ironiquement, la conjointe attend un enfant… Mais vous ne vous laissez pas abattre : ce sera pour la prochaine fois !
    Au 270ème jour de votre grossesse, le travail commence ! Vite vite, Mathieu vous emmène aux urgences ! “Mon dieu mon dieu mon dieu ! ça va aller ma chérie, reste calme, ça va aller !!!” crie-t-il, affolé, en vous conduisant au service maternité. 
    Lorsque vous arrivez au CHUV, le travail a déjà bien commencé. Vous êtes dilatée à 7cm. Plus que 3cm, et votre petit amour sera prêt à arriver ! La douleur est si intense que vous avez l’impression de vivre dans une autre dimension. Il vous est difficile de saisir ce qui se dit autour de vous, tant l’agitation des gens est accablante.  Le personnel soignant préfère d’ailleurs s’adresser directement à Mathieu plutôt qu’à vous, qui êtes devenue, il semblerait, invisible aux yeux de tous.
    Vous accouchez d’une magnifique petite fille, que vous nommez Emma. Quant à votre accouchement, il vous est encore difficile de revenir dessus…. La gynécologue, vous ordonnant de pousser à la prochaine contraction, vous a rétorquée, alors que vous disiez  ne pas sentir les contractions à cause de la péridurale : “Madame, il faut arrêter les enfantillages et pousser maintenant.”. En prononçant cette phrase déjà douloureuse, elle s’est appuyée sur votre ventre pour faire sortir plus rapidement…. 
    Le souvenir de cette douleur vous rend nauséeuse. Vous essayez de l’oublier, mais  des flash back vous accompagneront encore longtemps….
    
    `

    let toastTexte1 = "Une femme sur dix subi des violences gynécologiques en Suisse."


    let reponseTextBox = creerTextBox(this, content, 16)

    reponseTextBox.on('pageend', () => {
      if (reponseTextBox.isLastPage) {
          this.time.addEvent({
            delay: 2000,
            callback: () => {
              reponseTextBox.destroy();
              creerToast(this, 'maternite', toastTexte1)
            },
            loop: false,
          });
    
      } else changerPage(scene, 'SUIVANT', 'maternite');
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
