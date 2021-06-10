export class LoadScene extends Phaser.Scene {
    constructor() {
        super('LoadScene');
    }

    preload() {
        
        this.load.image('background', './Images/Background/nivel_praia_1.png');
        this.load.image('background2', './Images/Background/nivel_pordosol.png');
        this.load.image('background3', './Images/Background/nivel_noite.png');

    

        this.load.spritesheet('player', './Images/Personagem/personagem_costas.png', {
            frameWidth: 256,
            frameHeight: 288
        });

        this.load.image('laser', './Images/fio.png');

        this.load.image('bola', './Images/bola.png', { 
        frameWidth: 256,
        frameHeight: 256
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
                //frame: [9, 10]
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
                //frame: [9, 10]
                start: 0,
                end: 1,
                first: 0
            }),
            frameRate: 3,
            yoyo: true,
            repeat: -1
        });

        this.anims.create({
            key: 'scream',
            frames: this.anims.generateFrameNames('player', {
                //frame: [9, 10]
                start: 4,
                end: 4,
                first: 4
            }),
            frameRate: 1,
            repeat: -1
        });
    }
}