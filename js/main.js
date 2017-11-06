import 'pixi.js';
import 'p2';
import { Phaser } from 'phaser';

import BACKGROUND from './../assets/background.jpg';
import BROWN_JENKIN from './../assets/Brown_Jenkin.png';
import CTHULHU from './../assets/Cthulhu.png';
import DAGON from './../assets/Dagon.png';
import DEVILS_REEF from './../assets/Devils_Reef.png';
import EDWARD_DERBY from './../assets/Edward_Derby.png';
import NAHUM_GARDNER from './../assets/Nahum_Gardner.png';
import NYARLATHOTEP from './../assets/Nyarlathotep.png';
import WILBUR_WHATELEY from './../assets/wilbur_Whateley.png';
import YOG_SOTHOTH from './../assets/Yog_Sothoth.png';
import ZADOK_ALLEN from './../assets/Zadok_Allen.png';
import ARROW from './../assets/arrow.png';

var game = new Phaser.Game(640, 360, Phaser.AUTO);

// states of the game
var gameState = {
    preload: function() { // where all the requirements are loaded before the game starts
        this.load.image('background', BACKGROUND);
        // Load the images that represents the characters
        this.load.image('brown-jenkin', BROWN_JENKIN);
        this.load.image('cthulhu', CTHULHU);
        this.load.image('dagon', DAGON);
        this.load.image('devils-reef', DEVILS_REEF);
        this.load.image('edward-derby', EDWARD_DERBY);
        this.load.image('nahum-gardner', NAHUM_GARDNER);
        this.load.image('nyarlathotep', NYARLATHOTEP);
        this.load.image('wilbur-whateley', WILBUR_WHATELEY);
        this.load.image('yog-sothoth', YOG_SOTHOTH);
        this.load.image('zadok-allen', ZADOK_ALLEN);
        this.load.image('arrow', ARROW);

    },
    create: function() { // the game starts

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // adjust the game to the screen device
        this.scale.pageAlignHorizontally = true; // set the game aligned in the center horizontally
        this.scale.pageAlignVertically = true; // set the game aligner in the center vertically

        this.background = this.game.add.sprite(0, 0, 'background');

        // characters
        this.brown_jenkin = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'brown-jenkin');
        this.brown_jenkin.anchor.setTo(0.5, 0.5); // change image anchor point, 0 means the most left, 1 the most right, 0.5 the middle
        // if we are using the same number for x and y we can put it only once
        this.brown_jenkin.scale.setTo(3); // scale the image, 1 is normal, bigger numbers make it grow and smaller make it reduce
        // to flip an immage you have to scale it in only one sise with -1, eg: scale.setTo(-1, 1).

        this.brown_jenkin.angle = -45; // rotates the image, around the anchor point -45 grades

        //temporal animation
        this.brown_jenkin.inputEnabled = true;
        this.brown_jenkin.input.pixelPerfectClick = true;
        this.brown_jenkin.events.onInputDown.add(this.animateAnimal, this);

        // left arrow
        this.left_arrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow');
        this.left_arrow.anchor.setTo(0.5);
        this.left_arrow.scale.setTo(-1, 1);
        this.left_arrow.customParams = {direction: -1};

        this.left_arrow.inputEnabled = true;
        this.left_arrow.input.pixelPerfectClick = true; // make the click martch perfectly the image and not the whole rectangle
        this.left_arrow.events.onInputDown.add(this.switchAnimal, this); // add the function to the event
        // right arrow
        this.right_arrow = this.game.add.sprite(580, this.game.world.centerY, 'arrow');
        this.right_arrow.anchor.setTo(0.5);
        this.right_arrow.customParams = {direction: 1};
        
        this.right_arrow.inputEnabled = true;
        this.right_arrow.input.pixelPerfectClick = true;
        this.right_arrow.events.onInputDown.add(this.switchAnimal, this);
    },
    update: function() { // every change the game excecutes this method
        this.brown_jenkin.angle += 0.5;
    },
    switchAnimal: function(sprite, event) {
        console.log('move animal');
    },
    animateAnimal: function (sprite, event) {
        console.log('animate animal');
    }
};

// set the state to the game
game.state.add('GameState', gameState);

// start the game using a previously set estate
game.state.start('GameState');