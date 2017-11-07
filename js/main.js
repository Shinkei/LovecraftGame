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
        this.load.image('brown_jenkin', BROWN_JENKIN);
        this.load.image('cthulhu', CTHULHU);
        this.load.image('dagon', DAGON);
        this.load.image('devils_reef', DEVILS_REEF);
        this.load.image('edward_derby', EDWARD_DERBY);
        this.load.image('nahum_gardner', NAHUM_GARDNER);
        this.load.image('nyarlathotep', NYARLATHOTEP);
        this.load.image('wilbur_whateley', WILBUR_WHATELEY);
        this.load.image('yog_sothoth', YOG_SOTHOTH);
        this.load.image('zadok_allen', ZADOK_ALLEN);
        this.load.image('arrow', ARROW);

    },
    create: function() { // the game starts

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // adjust the game to the screen device
        this.scale.pageAlignHorizontally = true; // set the game aligned in the center horizontally
        this.scale.pageAlignVertically = true; // set the game aligner in the center vertically
        
        this.background = this.game.add.sprite(0, 0, 'background');
        
        // create a group of objects that represents the characters
        var charactersObject = [
            {key: 'brown_jenkin', text: 'BROWN_JENKIN'},
            {key: 'cthulhu', text: 'CTHULHU'},
            {key: 'dagon', text: 'DAGON'},
            {key: 'devils_reef', text: 'DEVILS_REEF'},
            {key: 'edward_derby', text: 'EDWARD_DERBY'},
            {key: 'nahum_gardner', text: 'NAHUM_GARDNER'},
            {key: 'nyarlathotep', text: 'NYARLATHOTEP'},
            {key: 'wilbur_whateley', text: 'WILBUR_WHATELEY'},
            {key: 'yog_sothoth', text: 'YOG_SOTHOTH'},
            {key: 'zadok_allen', text: 'ZADOK_ALLEN'}
        ];
        this.characters = this.game.add.group();
        // loop over the character list and render the sprite
        for(let element of charactersObject){
            let character = this.characters.create(-210, this.game.world.centerY, element.key); // we render the characters but outside the screen

            character.anchor.setTo(0.5);
            character.scale.setTo(2);
            character.customParams = {text: element.text};

            character.inputEnabled = true;
            character.input.pixelPerfectClick = true;
            character.events.onInputDown.add(this.animateAnimal, this);
        }

        this.currentCharacter = this.characters.next();
        this.currentCharacter.position.setTo(this.game.world.centerX, this.game.world.centerY);

        // left arrow
        this.left_arrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow');
        this.left_arrow.anchor.setTo(0.5);
        this.left_arrow.scale.setTo(-1, 1);
        this.left_arrow.customParams = {direction: -1};

        this.left_arrow.inputEnabled = true;
        this.left_arrow.input.pixelPerfectClick = true; // make the click martch perfectly the image and not the whole rectangle
        this.left_arrow.events.onInputDown.add(this.previousAnimal, this); // add the function to the event
        // right arrow
        this.right_arrow = this.game.add.sprite(580, this.game.world.centerY, 'arrow');
        this.right_arrow.anchor.setTo(0.5);
        this.right_arrow.customParams = {direction: 1};
        
        this.right_arrow.inputEnabled = true;
        this.right_arrow.input.pixelPerfectClick = true;
        this.right_arrow.events.onInputDown.add(this.nextAnimal, this);
    },
    update: function() { // every change the game excecutes this method
        this.currentCharacter.angle += 0.5;
    },
    nextAnimal: function(sprite, event) { // hide the current character, get the next fromthe group and position it in the middle of the screen
        if (this.isAnimationRunning) {
            return false;
        }
        this.isAnimationRunning = true;
        let oldCharMovement = this.game.add.tween(this.currentCharacter);
        oldCharMovement.to({x: -210});
        oldCharMovement.start();
        // this.currentCharacter.position.setTo(-210, this.game.world.centerY);
        this.currentCharacter = this.characters.next();
        this.currentCharacter.position.setTo(this.game.world.width + 210, this.game.world.centerY);
        let newCharMovement = this.game.add.tween(this.currentCharacter);
        newCharMovement.to({ x: this.game.world.centerX });
        newCharMovement.onComplete.add(() => { this.isAnimationRunning = false }); // call this function when the animation is completed
        newCharMovement.start();
    },
    previousAnimal: function(sprite, event) {
        if(this.isAnimationRunning){
            return false;
        }
        this.isAnimationRunning = true;
        let oldCharMovement = this.game.add.tween(this.currentCharacter);
        oldCharMovement.to({ x: this.game.world.width + 210 });
        oldCharMovement.start();
        this.currentCharacter = this.characters.previous();
        this.currentCharacter.position.setTo(-210, this.game.world.centerY);
        let newCharMovement = this.game.add.tween(this.currentCharacter);
        newCharMovement.to({ x: this.game.world.centerX });
        newCharMovement.onComplete.add(() => { this.isAnimationRunning = false}); // call this function when the animation is completed
        newCharMovement.start();
    },
    animateAnimal: function (sprite, event) {
        console.log('animate animal');
    }
};

// set the state to the game
game.state.add('GameState', gameState);

// start the game using a previously set estate
game.state.start('GameState');