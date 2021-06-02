const config = {
  width: 1000,
  height: 600,
  type: Phaser.WEBGL,
  //backgroundColor : 'white', //ne fonctionne pas...?
  scene: [
    SceneAbout,
    SceneCredits,
    SceneDenonciation,
    SceneDepart,
    SceneEnfants,
    SceneInstructions,
    SceneMariage,
    SceneMenu,
    SceneMobilite,
    ScenePromotion,
    SceneReprise,
    SceneRetour,
  ], //ajouter les autres scènes au fur et à mesure
};

let jeu = new Phaser.Game(config);
