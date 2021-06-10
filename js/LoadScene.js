export class LoadScene extends Phaser.Scene {
    constructor() {
        super('LoadScene');
    }

    preload() {
        
        this.load.image('background', './images/Background/nivel_praia_1.png');
        this.load.image('background2', './images/Background/nivel_pordosol.png');
        this.load.image('background3', './images/Background/nivel_noite.png');

        this.load.image('arpao', './images/arpao.png');

        this.load.spritesheet('bolas', './images/bola.png', { 
        frameWidth: 256,
        frameHeight: 256
        });

        this.load.spritesheet('player', './images/personagem_costas.png', {
            frameWidth: 256,
            frameHeight: 288
        });

    }

    create() {
        this.createAnimations();
        this.scene.start('Level001');
    }

    createAnimations() {
        this.anims.create({
            key: 'walking',
            frames: this.anims.generateFrameNames('player', {
                
                start: 2,
                end: 3,
                first: 2
            }),
            frameRate: 5,
            yoyo: true,
            repeat: -1
        });

        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNames('player', {
                
                start: 0,
                end: 1,
                first: 0
            }),
            frameRate: 3,
            yoyo: true,
            repeat: -1
        });
    }
}
