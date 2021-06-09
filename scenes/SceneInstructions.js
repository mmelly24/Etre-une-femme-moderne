
class SceneInstructions extends Phaser.Scene {
  constructor() {
    super('instructions');
  }

  preload() {
    new SceneDesign(this, 'mariage', 'happyFace');
  }

  create() {

    let content = `Vous incarnez une jeune femme de 25 ans, nommée Julie. Après un parcours universitaire exemplaire, vous entrez dans le monde du travail, plus motivée que jamais. 
    Quelques mois de recherche ont suffi à ce que vous trouviez un job, qui répond à toutes vos attentes. Vous avez hâte de commencer, et de rencontrer tous vos nouveaux collègues.
    C’est désormais à vous de prendre les bonnes décisions, pour permettre à Julie de vivre une vie... extraordinaire !`;

    this.add.image(700, 150, 'happyFace').setScale(0.5);

    let texte = new TextBox(this, content, 6);
    console.log(texte);
  }

}

