import {LoadScen} from('./LoadScene.js');
import {Level001} from('./Level001.js');


const config={
    width: 2048,
    height: 2048,
    type: Phaser.AUTO,
    parent:'game-canvas',
    scene:[LoadScene, Level001],
    physics:{
        default:'arcade',
        arcade:{
            gravity:{
                y:800

            },
            debug: true,
        }
    },
    
    pixelArt:true,
}


new Phaser.Game[config]
