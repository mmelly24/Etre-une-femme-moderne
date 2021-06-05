class SceneEnfants extends Phaser.Scene {
    constructor() {
      super('enfants');
    }

    create(){

      this.add.text(380, 300, "enfants: blablabla");
      
      let oui = this.add.text(380, 500, 'OUI');
      oui.setInteractive();
      //aller vers une scène qui contient de la théorie sur la grossesse
      oui.on('pointerdown', () => this.scene.start('grossesse'));
  
      let boutonNon = this.add.text(580, 500, 'NON');
      boutonNon.setInteractive();
      //aller vers une scène qui illustre la pression sociale
      boutonNon.on('pointerdown', () => this.scene.start('pression'));
    }
}