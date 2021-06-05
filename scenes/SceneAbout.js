class SceneAbout extends Phaser.Scene {
  constructor() {
    super('about');
  }

  create() {

    const text = "Projet créé dans le cadre d'un cours donné à l'Université de Lausanne.";

    const contenu = this.add.text(0, 0, text)

    Phaser.Display.Align.In.Center(contenu, this.add.zone(600, 300, 800, 600));

    let boutonMenu = this.add.text(200, 100, 'BACK TO MENU');
    boutonMenu.setInteractive();
    boutonMenu.on('pointerdown', () => this.scene.start('accueil'));
  }
}
