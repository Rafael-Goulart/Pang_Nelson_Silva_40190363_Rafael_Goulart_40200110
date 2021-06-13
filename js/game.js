import { nivel1 } from "./Level001.js";
import { nivel2 } from "./Level002.js";
import { nivel3 } from "./Level003.js";
import { LoadScene } from "./LoadScene.js";

const config = {
    width: 1345,
    height: 755,
    type: Phaser.AUTO,
    parent: 'game-canvas',
    backgroundColor: '#d3fa2',
    scene: [LoadScene, nivel1, nivel2, nivel3],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 1500

            },
            debug: false
        }
    },
    pixelArt: true
}

new Phaser.Game(config);