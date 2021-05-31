class SceneInstructions extends Phaser.Scene{
    constructor(){
        super('instructions')
    }


    create() {
        let boutonNext = this.add.text(700, 500, 'NEXT');
        boutonNext.setInteractive();
        boutonNext.on('pointerdown', () => this.scene.start('mariage'));

        let boutonMenu = this.add.text(200, 100, 'BACK TO MENU');
        boutonMenu.setInteractive();
        boutonMenu.on('pointerdown', () => this.scene.start('accueil'));
        
    }
}

