import Jogador from "./jogador";

export default class MainScene extends Phaser.Scene{
    constructor(){
        super('MainScene');
    }

    init(){

    }
    preload(){
        this.jogadorIMG = this.load.image
        this.ball1Img= this.load.image
    }
    create(){
 this.jogador=this.add.existing(
     new Jogador(thi,0,0,'paddle')
 )
    }

    update(time){

    }
}