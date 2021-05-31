class SceneInstructions extends Phaser.Scene{
    constructor(){
        super('instructions')
    }


    create() {
        let boutonNext = this.add.text(700, 500, 'NEXT');
        boutonNext.setInteractive();
        boutonNext.on('pointerdown', () => this.scene.start('mariage'))
    }
}

