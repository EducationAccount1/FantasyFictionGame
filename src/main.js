let G_width = window.innerWidth;
let G_height = window.innerHeight;

// Main Game Object
let game = new Phaser.Game(
  G_width, G_height, Phaser.AUTO, 'game',
  { preload: preload, create: create, update: update, render: render }
);

class Race {

}
class Class {

};

// Main Character Class
  const StrengthIndex = 0;
  const DexterityIndex = 1;
  const IntelligenceIndex = 2;
  const WisdomIndex = 3;
  const CharismaIndex = 4;
  const ConstitutionIndex = 5
class Character {
  stats = [ 0, 0, 0, 0, 0 ];
  Health = 0;
  Level = 0;
  race = new Race();
  class_ = new Class();
}

function preload() {
  // Intro Page (This should be removed after the creation)

  // Loading Page

  // Character Page
  
  // Game

  /*
    let good_bmd = game.add.bitmapData(100,100);
    good_bmd.ctx.fillStyle = '#00ff00';
    good_bmd.ctx.arc(50,50,50, 0, Math.PI * 2);
    good_bmd.ctx.fill();
    game.cache.addBitmapData('good', good_bmd);
    let bad_bmd = game.add.bitmapData(64,64);
    bad_bmd.ctx.fillStyle = '#ff0000';
    bad_bmd.ctx.arc(32,32,32, 0, Math.PI * 2);
    bad_bmd.ctx.fill();
    game.cache.addBitmapData('bad', bad_bmd);
  */
}

function create() {
  // render intro page (if possible?)
  // load character page
}

function update() {
  // check if character page

  // else assume game state
}

function render() {
}

