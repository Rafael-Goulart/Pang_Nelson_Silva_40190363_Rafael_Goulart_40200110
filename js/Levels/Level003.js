import { Player } from "./player.js";
import { Bolas } from "./Bolas.js";
import { Arpao } from "./Arpao.js";

export class Level003 extends Phaser.Scene {
    constructor() {
        super('Level003');

        this.countHarpon = 0;
        this.velocity = 100;
    }

    init() {
        this.controls = this.input.keyboard.createCursorKeys();

        this.input.on('pointerdown', (pointer) => {
            console.log(`${pointer.x}, ${pointer.y}`);
        });

        this.hearts = [];
    }

    create() {
        this.add.image(0, 0, 'background3').setOrigin(0).setScale(5);

        this.player = new Player(
            this,
            this.game.config.width * 0.5,
            this.game.config.height,
            'player', 0
        );

        this.bolas = new Bolas(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            'bolas', 0
        );

        this.input.manager.enabled = true;
        this.input.once('pointerdown', function () {
            this.scene.start('Level001');
        }, this);

        this.add.text(100, 100, 'Level 03', {
            color: '#ffff',
            fontSize: 150
        });

        this.physics.add.overlap(this.player, this.bolas, this.onBolas, null, this);

        this.prepareHUD();
    }

    onBolas(player, meteors) {
        player.hit();
        if(!player.isDead()) {
            player.setPosition(
                this.game.config.width * 0.5,
                this.game.config.height,
            )
        } else {
            this.scene.restart();
        }
    }

    prepareHUD() {
        let nLives = this.player.getLives();

        for(let i = 0; i < nLives; ++i) {
            this.hearts.push(
                this.add.image(200 + i * 250, 400, 'egg')
            );
        }
    }

    updateHUD() {
        let availableLives = this.player.getLives();

        for(let i = this.hearts.length - 1; i >= availableLives; --i) {
            this.hearts[i].setTexture('egg2');
        }
        
    }

    update(time) {
        this.player.update(time);
        

        this.updateHUD();

    }

    fireArpao() {
        if(this.countArpao >= 1) return;
        this.countArpao++;
   
        var Arpao = this.add.image(this.player.x, 900, 'arpao').setOrigin(0).setScale(10);
        this.physics.add.overlap(Arpao,this.Bolas,this.fireArpaoo,null,this);
    }
}