export default class Jogador extends Phaser.GameObject.Sprite{
    constructor(scene, x,y,texture){
        super(scene,x,y,texture)

        this.scene=scene;
        this.setScale(15,15);

    }

    init(){

    }

    update(time){
        
    }
}