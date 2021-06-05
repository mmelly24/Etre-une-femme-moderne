class SceneGrossesse extends Phaser.Scene {
    constructor() {
      super('grossesse');
    }

    create(){
      //texte à implémenter
      this.add.text(380, 300, 'annonce:blablabl')

        let boutonAnnonce = this.add.text(380, 500, 'NEXT');
        boutonAnnonce.setInteractive();
        boutonAnnonce.on('pointerdown', function(){
          console.log('bonjour');
        });



    }
}