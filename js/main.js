// static imports
import './../assets/fonts/Yataghan/yataghan.ttf';

import 'pixi.js';
import 'p2';
import { Phaser } from 'phaser';

import BACKGROUND from './../assets/background.jpg';
import BROWN_JENKIN from './../assets/sprites/Brown_Jenkin.png';
import CTHULHU from './../assets/sprites/Cthulhu.png';
import DAGON from './../assets/sprites/Dagon.png';
import DEVILS_REEF from './../assets/sprites/Devils_Reef.png';
import EDWARD_DERBY from './../assets/sprites/Edward_Derby.png';
import NAHUM_GARDNER from './../assets/sprites/Nahum_Gardner.png';
import NYARLATHOTEP from './../assets/sprites/Nyarlathotep.png';
import WILBUR_WHATELEY from './../assets/sprites/wilbur_Whateley.png';
import YOG_SOTHOTH from './../assets/sprites/Yog_Sothoth.png';
import ZADOK_ALLEN from './../assets/sprites/Zadok_Allen.png';
import ARROW from './../assets/arrow.png';

import BROWN_JENKIN_MP3 from './../assets/audio/brown.mp3';
import CTHULHU_MP3 from './../assets/audio/cthulhu.mp3';
import DAGON_MP3 from './../assets/audio/dagon.mp3';
import DEVILS_REEF_MP3 from './../assets/audio/devils.mp3';
import EDWARD_DERBY_MP3 from './../assets/audio/glub.mp3';
import NAHUM_GARDNER_MP3 from './../assets/audio/nahum.mp3';
import NYARLATHOTEP_MP3 from './../assets/audio/nyarlathotep.mp3';
import WILBUR_WHATELEY_MP3 from './../assets/audio/wilbur.mp3';
import YOG_SOTHOTH_MP3 from './../assets/audio/yog.mp3';
import ZADOK_ALLEN_MP3 from './../assets/audio/zadok.mp3';
import BROWN_JENKIN_OGG from './../assets/audio/brown.ogg';
import CTHULHU_OGG from './../assets/audio/cthulhu.ogg';
import DAGON_OGG from './../assets/audio/dagon.ogg';
import DEVILS_REEF_OGG from './../assets/audio/devils.ogg';
import EDWARD_DERBY_OGG from './../assets/audio/glub.ogg';
import NAHUM_GARDNER_OGG from './../assets/audio/nahum.ogg';
import NYARLATHOTEP_OGG from './../assets/audio/nyarlathotep.ogg';
import WILBUR_WHATELEY_OGG from './../assets/audio/wilbur.ogg';
import YOG_SOTHOTH_OGG from './../assets/audio/yog.ogg';
import ZADOK_ALLEN_OGG from './../assets/audio/zadok.ogg';

var game = new Phaser.Game(640, 360, Phaser.AUTO);

// states of the game
var gameState = {
    preload: function() { // where all the requirements are loaded before the game starts
        this.load.image('background', BACKGROUND);
        // Load the images that represents the characters
        this.load.spritesheet('brown_jenkin', BROWN_JENKIN, 98, 66,3);
        this.load.spritesheet('cthulhu', CTHULHU, 106, 106, 4);
        this.load.spritesheet('dagon', DAGON, 96, 103, 4);
        this.load.spritesheet('devils_reef', DEVILS_REEF, 140, 116, 4);
        this.load.spritesheet('edward_derby', EDWARD_DERBY, 120, 147, 4);
        this.load.spritesheet('nahum_gardner', NAHUM_GARDNER, 162, 169, 4);
        this.load.spritesheet('nyarlathotep', NYARLATHOTEP, 68, 132, 4);
        this.load.spritesheet('wilbur_whateley', WILBUR_WHATELEY, 70, 146, 3);
        this.load.spritesheet('yog_sothoth', YOG_SOTHOTH,111, 95,3);
        this.load.spritesheet('zadok_allen', ZADOK_ALLEN, 141, 111, 3);
        this.load.image('arrow', ARROW);

        // load audio
        this.load.audio('audi:brown_jenkin', [BROWN_JENKIN_MP3, BROWN_JENKIN_OGG])
        this.load.audio('audio:cthulhu', [CTHULHU_MP3, CTHULHU_OGG]);
        this.load.audio('audio:dagon', [DAGON_MP3, DAGON_OGG]);
        this.load.audio('audio:devils_reef', [DEVILS_REEF_MP3, DEVILS_REEF_OGG]);
        this.load.audio('audio:edward_derby', [EDWARD_DERBY_MP3, EDWARD_DERBY_OGG]);
        this.load.audio('audio:nahum_gardner', [NAHUM_GARDNER_MP3, NAHUM_GARDNER_OGG]);
        this.load.audio('audio:nyarlathotep', [NYARLATHOTEP_MP3, NYARLATHOTEP_OGG]);
        this.load.audio('audio:wilbur_whateley', [WILBUR_WHATELEY_MP3, WILBUR_WHATELEY_OGG]);
        this.load.audio('audio:yog_sothoth', [YOG_SOTHOTH_MP3, YOG_SOTHOTH_OGG]);
        this.load.audio('audio:zadok_allen', [ZADOK_ALLEN_MP3, ZADOK_ALLEN_OGG]);

    },
    create: function() { // the game starts

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // adjust the game to the screen device
        this.scale.pageAlignHorizontally = true; // set the game aligned in the center horizontally
        this.scale.pageAlignVertically = true; // set the game aligner in the center vertically
        
        this.background = this.game.add.sprite(0, 0, 'background');
        
        // create a group of objects that represents the characters
        var charactersObject = [
            {key: 'brown_jenkin', name: 'Brown Jenkin', audio: 'audi:brown_jenkin'},
            {key: 'cthulhu', name: 'CTHULHU', audio: 'audio:cthulhu'},
            {key: 'dagon', name: 'DAGON', audio: 'audio:dagon'},
            {key: 'devils_reef', name: 'DEVILS REEF', audio: 'audio:devils_reef'},
            {key: 'edward_derby', name: 'EDWARD DERBY', audio: 'audio:edward_derby'},
            {key: 'nahum_gardner', name: 'NAHUM GARDNER', audio: 'audio:nahum_gardner'},
            {key: 'nyarlathotep', name: 'NYARLATHOTEP', audio: 'audio:nyarlathotep'},
            {key: 'wilbur_whateley', name: 'WILBUR WHATELEY', audio: 'audio:wilbur_whateley'},
            {key: 'yog_sothoth', name: 'YOG SOTHOTH', audio: 'audio:yog_sothoth'},
            {key: 'zadok_allen', name: 'ZADOK ALLEN', audio: 'audio:zadok_allen'}
        ];
        this.characters = this.game.add.group();
        // loop over the character list and render the sprite
        for(let element of charactersObject){
            let character = this.characters.create(-210, this.game.world.centerY, element.key); // we render the characters but outside the screen

            character.anchor.setTo(0.5);
            character.scale.setTo(2);
            character.customParams = {text: element.text, name: element.name, sound: this.game.add.audio(element.audio)};
            //                                            add the sound as as custom property, so the character knows its own audio 
            character.inputEnabled = true;
            character.input.pixelPerfectClick = true;
            character.events.onInputDown.add(this.animateCharacter, this);

            // create character animation
            if (element.key === 'brown_jenkin' | element.key === 'wilbur_whateley' | element.key === 'yog_sothoth' | element.key === 'zadok_allen'){
                character.animations.add('animate', [0, 1, 2, 1, 0], 3,            false);
                //                        key       frames to show   frames x sec, is it going to loop?
            } else{
                character.animations.add('animate', [0, 1, 2, 3, 2, 1, 0], 4, false);
            }
        }

        this.currentCharacter = this.characters.next();
        this.currentCharacter.position.setTo(this.game.world.centerX, this.game.world.centerY);

        // show character name in the screen
        this.showName(this.currentCharacter);

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
        //this.currentCharacter.angle += 0.5;
    },
    nextAnimal: function(sprite, event) { // hide the current character, get the next fromthe group and position it in the middle of the screen
        if (this.isAnimationRunning) {
            return false;
        }
        this.isAnimationRunning = true;
        // hide text
        this.characterName.visible = false;

        let oldCharMovement = this.game.add.tween(this.currentCharacter);
        oldCharMovement.to({x: -210});
        oldCharMovement.start();
        // this.currentCharacter.position.setTo(-210, this.game.world.centerY);
        this.currentCharacter = this.characters.next();
        this.currentCharacter.position.setTo(this.game.world.width + 210, this.game.world.centerY);
        let newCharMovement = this.game.add.tween(this.currentCharacter);
        newCharMovement.to({ x: this.game.world.centerX });
        newCharMovement.onComplete.add(() => { 
            this.isAnimationRunning = false;
            this.showName(this.currentCharacter);
        }); // call this function when the animation is completed
        newCharMovement.start();
    },
    previousAnimal: function(sprite, event) {
        if(this.isAnimationRunning){
            return false;
        }
        this.isAnimationRunning = true;
        // hide text
        this.characterName.visible = false;

        let oldCharMovement = this.game.add.tween(this.currentCharacter);
        oldCharMovement.to({ x: this.game.world.width + 210 });
        oldCharMovement.start();
        this.currentCharacter = this.characters.previous();
        this.currentCharacter.position.setTo(-210, this.game.world.centerY);
        let newCharMovement = this.game.add.tween(this.currentCharacter);
        newCharMovement.to({ x: this.game.world.centerX });
        newCharMovement.onComplete.add(() => {
            this.isAnimationRunning = false;
            this.showName(this.currentCharacter);
        }); // call this function when the animation is completed
        newCharMovement.start();
    },
    animateCharacter: function(sprite, event) {
        sprite.play('animate');
        sprite.customParams.sound.play();
    },
    showName: function(character) {
        let style = {
            font: 'bold 30pt yataghan',
            fill: '#FF0000',
            align: 'center'
        };

        if(!this.characterName){
            this.characterName = this.game.add.text(this.game.world.width / 2, this.game.world.height * 0.85, '', style);
            this.characterName.anchor.setTo(0.5);
        }
        console.log(character.name);
        this.characterName.setText(character.customParams.name);
        this.characterName.visible = true;
    }
};

// set the state to the game
game.state.add('GameState', gameState);

// start the game using a previously set estate
game.state.start('GameState');