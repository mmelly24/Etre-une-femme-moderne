class ScenePression extends Phaser.Scene {
    constructor() {
      super('pression');
    }

    create() {
      this.add.text(200, 100, 'SCENE PRESSION');
      let text;
      let count = 0;

      text = this.add.text(400, 300, 'première pression');

      //centrer le text --> pas idéal comme mise en page
      Phaser.Display.Align.In.Center(text, this.add.zone(400, 300, 800, 600));

      let boutonPression = this.add.text(700, 500, 'NEXT');
      boutonPression.setInteractive();

      boutonPression.on('pointerdown', () => {
        count++;
        if (count == 1) {
          text.setText('Vous annoncez à vos parents votre refus de devenir mère.');
        } else if (count == 2) {
          text.setText('A votre grand étonnement, la nouvelle est très mal reçue. Votre mère éclate en sanglots.')
        }

      })


    }


}