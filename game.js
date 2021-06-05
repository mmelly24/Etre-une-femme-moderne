const config = {
  width: 1000,
  height: 600,
  type: Phaser.WEBGL,
  backgroundColor : '#4488aa', //couleur test
  //ajouter les autres scènes au fur et à mesure
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
  ],
};

let jeu = new Phaser.Game(config);
