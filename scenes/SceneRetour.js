class SceneRetour extends Phaser.Scene {
    constructor() {
      super('retour');
    }

    preload() {
      chargerPlugin(this);
    }
  
    create() {
      this.add.text(200, 100, 'SCENE RETOUR');

      let content = "Tentative de reprendre le travail";
    
      let toastTexte1 = "compliqué pour les femmes de reprendre travail"
      let reponseTextBox = creerTextBox(this, content, 7);

      reponseTextBox.on('pageend', () => {
        if (reponseTextBox.isLastPage) {
            this.time.addEvent({
              delay: 2000,
              callback: () => {
                reponseTextBox.destroy();
                creerToast(this, 'mobilite', toastTexte1)
              },
              loop: false,
            });
      
        } else changerPage(scene, 700, 500, 'NEXT', 'mobilite');
      });

    }


}