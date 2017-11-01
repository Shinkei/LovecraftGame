import 'pixi.js';
import 'p2';
import { Phaser } from 'phaser';

var game = new Phaser.Game(640, 360, Phaser.AUTO);

// states of the game
var gameState = {
    preload: function() { // where all the requirements are loaded before the game starts
        
    },
    create: function() { // the game starts
        
    },
    update: function() { // every change the game excecutes this method
        
    }
};

// set the state to the game
game.state.add('GameState', gameState);

// start the game using a previously set estate
game.state.start('GameState');