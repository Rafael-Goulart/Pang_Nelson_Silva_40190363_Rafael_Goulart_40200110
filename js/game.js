export class LoadScene extends Phaser.Scene {
    constructor() {
        super('LoadScene');
    
    }
    
preload()  {
    this.load.image('bg0', './Images/Background/nivel_praia_1.png');
    this.load.image('bg', './Images/BackGround/nivel_pordosol.png');
   this.load.image('bg1', './Images/Background/nivel_noite.png');
    this.load.spritesheet('ball','./Images/bola.png',{
        frameWidth:128,
        frameHeight:128
    });
    this.load.spritesheet('player','./Images/Personagem/Player_SriteSheet.png',{
        frameWidth:128,
        frameHeight:128
    });
    this.load.image('weapon', './Images/fio.png');
    this.load.image('lives', './img/2.png');
    
}
create(){
    this.scene.start("nivel1"); 
   this.createAnimations();
  
}

createAnimations(){
    this.anims.create({
        key:'idle',
        frames: this.anims.generateFrameNames('player',{
            start: 1, end:1, first:1
        }), frameRate:6, yoyo: true, repeat: -1 });
    this.anims.create({
    key:'walk',
    frames: this.anims.generateFrameNames('player',{
        start: 1, end:0, first:1
    }), frameRate:6, yoyo: true, repeat: -1 });

    this.anims.create({
        key:'shoot',
        frames: this.anims.generateFrameNames('player',{
            start: 1, end:1, first:1
        }), frameRate:6, yoyo: true, repeat: -1 });
     
}

}