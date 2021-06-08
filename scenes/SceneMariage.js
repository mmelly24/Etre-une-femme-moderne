class SceneMariage extends Phaser.Scene {
  constructor() {
    super('mariage');
  }

  preload(){
    this.load.scenePlugin({
      key: 'rexuiplugin',
      url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
      sceneKey: 'rexUI',
    });
  }

  create() {
    let content = `Cela fait maintenant plusieurs mois que vous travaillez dans votre nouvelle entreprise. Malgré quelques déceptions, vous êtes globalement heureuse et satisfaite par votre lieu de travail.
    Toutesfois, quelque chose vous taraude l'esprit...\n\n\n\n\n\n
    Habitant depuis 2 ans avec votre petit-ami Mathieu, vous remarquez que ce dernier se comporte de manière suspecte... Lorsque vous lui en faite la remarque, il refuse d'en parler.
    Cette situation contribue à augmenter votre sentiment de malaise, et vous ne savez plus quoi faire pour que la situation s'arrange... Vous avez peur de voir votre couple se détruire aussi rapidement.
    ...\n
    Une semaine plus tard, votre calvaire se termine. En réalité, Mathieu préparait une merveilleuse surprise !
    
    Il vous demande en mariage au bord du lac, dans votre endroit favoris. Vous ne vous êtes absolument douté de rien ! Il s'agit maintenant de lui donner une réponse... 
    
    Acceptez-vous sa demande ?`;

    new TextBox(this, content, 7);

    let boutonOui = this.add.text(380, 500, 'OUI');
    boutonOui.setInteractive();
    boutonOui.on('pointerdown', () => this.scene.start('enfants'));

    let boutonNon = this.add.text(580, 500, 'NON');
    boutonNon.setInteractive();
    boutonNon.on('pointerdown', () => this.scene.start('enfants'));
  }
}
