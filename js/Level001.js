export class Level001 extends Phaser.Scene{
    constructor(){
        super('Level001');
    }

    init(){

    }
    preload(){

    }
    create(){
        this.add.image(0, 0, 'background').setOrigin(0).setScale(1);
    }
}