const config = {
    width: 1000,
    height: 600,
    type: Phaser.WEBGL,
    //backgroundColor : 'white', //ne fonctionne pas...?
    scene: [SceneMenu,SceneInstructions, SceneMariage] //ajouter les autres scènes au fur et à mesure
}

let jeu = new Phaser.Game(config);