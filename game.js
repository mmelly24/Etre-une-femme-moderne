const config = {
  width: 1000,
  height: 600,
  type: Phaser.WEBGL,
  //backgroundColor : 'white', //ne fonctionne pas...?
  scene: [
    SceneMenu,
    SceneAbout,
    SceneCredits,
    SceneDenonciation,
    SceneDepart,
    SceneInstructions,
    SceneMariage,
    SceneEnfants,
    SceneMobilite,
    ScenePromotion,
    SceneReprise,
    SceneRetour,
    ScenePression,
    SceneGrossesse,
  ], //ajouter les autres scènes au fur et à mesure
};

let jeu = new Phaser.Game(config);
