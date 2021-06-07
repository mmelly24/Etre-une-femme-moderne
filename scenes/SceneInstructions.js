const COLOR_PRIMARY = 000000;
const COLOR_LIGHT = 000000;
const COLOR_DARK = 000000;

let content = `Vous incarnez une jeune femme de 25 ans, nommée Julie. Après un parcours universitaire exemplaire, vous entrez dans le monde du travail, plus motivée que jamais. 
Quelques mois de recherche ont suffi à ce que vous trouviez un job, qui répond à toutes vos attentes. Vous avez hâte de commencer, et de rencontrer tous vos nouveaux collègues.`;

class SceneInstructions extends Phaser.Scene{
    constructor(){
        super('instructions')
    }

    preload() { 
        this.load.image('happyFace', 'assets/sprite_happy_face.png')
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
        
        this.load.image('nextPage', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/arrow-down-left.png');
    }

    create() {
        this.add.image(700, 150, 'happyFace').setScale(0.5)

        /*let boutonNext = this.add.text(700, 500, 'NEXT');
        boutonNext.setInteractive();
        boutonNext.setVisible(false);
        boutonNext.on('pointerdown', () => this.scence.start('mariage'));
        */

        let boutonMenu = this.add.text(200, 100, 'BACK TO MENU');
        boutonMenu.setInteractive();
        boutonMenu.on('pointerdown', () => this.scene.start('accueil'));

        createTextBox(this, 200, 200, {
                wrapWidth: 400,
            })
            .start(content, 50);

        
        changerPage(this, 700, 500, 'NEXT');
    }

    update() {
    }
}

function changerPage(scene, x, y, contenu) {
    let boutonNext = scene.add.text(x, y, contenu);
    boutonNext.setInteractive();
    boutonNext.on('pointerdown', () => scene.scene.start('mariage'));
    return boutonNext;

}

const GetValue = Phaser.Utils.Objects.GetValue;

function createTextBox(scene, x, y, config) {
    let wrapWidth = GetValue(config, 'wrapWidth', 0);
    let fixedWidth = GetValue(config, 'fixedWidth', 0);
    let fixedHeight = GetValue(config, 'fixedHeight', 0);
    let textBox = scene.rexUI.add.textBox({
            x: x,
            y: y,

            background: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 20, COLOR_PRIMARY)
                .setStrokeStyle(2, COLOR_LIGHT),
               

            icon: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 20, COLOR_DARK),

            // text: getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),
            text: getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight),

            action: scene.add.image(0, 0, 'nextPage').setTint(COLOR_LIGHT).setVisible(false), 

            space: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20,
                icon: 10,
                text: 10,
            }
        })
        .setOrigin(0)
        .layout();

    textBox
        .setInteractive()
        .on('pointerdown', function () {
            let icon = this.getElement('action').setVisible(false);
            this.resetChildVisibleState(icon);
            if (this.isTyping) {
                this.stop(true);
            } else {
                this.typeNextPage();
            }
        }, textBox)
        .on('pageend', function () {
            if (this.isLastPage) {
                
                return;
            }

            var icon = this.getElement('action').setVisible(true);
            this.resetChildVisibleState(icon);
            icon.y -= 30;
            var tween = scene.tweens.add({
                targets: icon,
                y: '+=30', // '+=100'
                ease: 'Bounce', // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 500,
                repeat: 0, // -1: infinity
                yoyo: false
            });
        }, textBox)
    //.on('type', function () {
    //})

    return textBox;
}

function getBuiltInText (scene, wrapWidth, fixedWidth, fixedHeight) {
    return scene.add.text(0, 0, '', {
            fontSize: '20px',
            wordWrap: {
                width: wrapWidth
            },
            maxLines: 5
        })
        .setFixedSize(fixedWidth, fixedHeight);
}

function getBBcodeText (scene, wrapWidth, fixedWidth, fixedHeight) {
    return scene.rexUI.add.BBCodeText(0, 0, '', {
        fixedWidth: fixedWidth,
        fixedHeight: fixedHeight,

        fontSize: '20px',
        wrap: {
            mode: 'word',
            width: wrapWidth
        },
        maxLines: 5
    })



/*  create() {

        this.add.text(380, 300, "Instructions: blablabla")

        let boutonNext = this.add.text(700, 500, 'NEXT');
        boutonNext.setInteractive();
        boutonNext.on('pointerdown', () => this.scene.start('mariage'));

        let boutonMenu = this.add.text(200, 100, 'BACK TO MENU');
        boutonMenu.setInteractive();
        boutonMenu.on('pointerdown', () => this.scene.start('accueil'));
        
    }*/
}

