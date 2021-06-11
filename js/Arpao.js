export class Arpao extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);

        this.controls = scene.input.keyboard.createCursorKeys();

        this.countArpao = 0;
    }

    update(time){
        if(this.controls.space.isDown){
            FireArpao();
        }
        this.setVelocityX(1000);
    }

    FireArpao(){
        console.log(+ this.countArpao);
         this.setVelocityX(-this.velocity);
        if(this.countArpao >= 2)
        { 
            return;
        } else {
        this.countArpao = this.countArpao + 1;
        
        var arpao = this.add.image(this.player.x, 1000, 'fio').setOrigin(0).setScale(10);
        arpao.scaleY=0;
        this.physics.add.collider(arpao,this.groupBall,this.hitArpaoo,null,this);
        }
    }
}