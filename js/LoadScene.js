export class LoadScene extends Phaser.Scene{
    constructor(){
        super('LoadScene');
    }
    preload(){
        this.load.image('Background','./Images/Background/nivel_praia_1.png');
    }

    create(){
        this.Scene.start('Level001');
    }
}