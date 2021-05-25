const config = {
    width: 1000,
    height: 600,
    //backgroundColor : 'white', //ne fonctionne pas...?
    scene: [SceneMenu,SceneInstructions] //ajouter les autres scènes au fur et à mesure
}

let jeu = new Phaser.Game(config);