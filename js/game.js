//import { Level001 } from "./Levels/Level001.js";
import { Level002 } from "./Levels/Level002.js";
import { Level003 } from "./Levels/Level003.js";
import { LoadScene } from "./LoadScene.js";


const config = {
    width: 8700,
    height: 4350,
    type: Phaser.AUTO,
    parent: 'game-canvas',
    backgroundColor: '#ffff',
    scene: [LoadScene, Level001, Level002, Level003],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 800
            },
            debug: false
        }
    },
    pixelArt: true
}

new Phaser.Game(config);