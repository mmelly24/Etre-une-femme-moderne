class SceneMenu extends Phaser.Scene{
    constructor(){
        super('accueil')
    }

preload(){
        this.load.image('femme', 'assets/Femme_accueil.jpg')  
    }

create(){
    this.add.text(400,100, 'ETRE UNE FEMME MODERNE')
    this.add.image(500,300,'femme')
    let boutonPlay = this.add.text(480,500,'PLAY')
    boutonPlay.setInteractive();
    boutonPlay.on('pointerdown', () => this.scene.start('instructions'))
}







}



