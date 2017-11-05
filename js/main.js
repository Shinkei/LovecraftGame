import 'pixi.js';
import 'p2';
import { Phaser } from 'phaser';

import BACKGROUND from './../assets/background.jpg';

var game = new Phaser.Game(640, 360, Phaser.AUTO);

// states of the game
var gameState = {
    preload: function() { // where all the requirements are loaded before the game starts
        this.load.image('background', BACKGROUND);
    },
    create: function() { // the game starts
        this.background = this.game.add.sprite(0, 0, 'background');
    },
    update: function() { // every change the game excecutes this method
        
    }
};

// set the state to the game
game.state.add('GameState', gameState);

// start the game using a previously set estate
game.state.start('GameState');