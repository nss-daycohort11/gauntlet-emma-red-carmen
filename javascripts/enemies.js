var Orc = function(name) {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];
  this.class = new Warrior();
  this.weapon = new Club();
  this.playerName = name;

  // this.generateClass = function() {
  //   // Get a random index from the allowed classes array
  //   var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  //   // Get the string at the index
  //   var randomClass = this.allowedClasses[random];

  //   // Composes the corresponding player class into the player object
  //   this.class = new window[randomClass]();
  //   return this.class;
  // }
};

Orc.prototype = new Monster();

// Ogre monster //

var Ogre = function(name) {
  this.health = this.health + 15;
  this.species = "Ogre";
  this.allowedClasses = ["Valkrie", "Monk", "Conjurer"];
  this.class = new Monk();
  this.weapon = new Fist();
  this.playerName = name;

// this.generateClass = function() {
//     // Get a random index from the allowed classes array
//     var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

//     // Get the string at the index
//     var randomClass = this.allowedClasses[random];

//     // Composes the corresponding player class into the player object
//     this.class = new window[randomClass]();
//     return this.class;

//  }
};

Ogre.prototype = new Monster();

// Rat monster //

var Rat = function(name) {
  this.health = this.health + 25;
  this.species = "Rat";
  this.allowedClasses = ["Thief", "Ninja", "Sorcerer"];
  this.class = new Ninja();
  this.weapon = new Teeth();
  this.playerName = name;

//   this.generateClass = function() {
//     // Get a random index from the allowed classes array
//     var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

//     // Get the string at the index
//     var randomClass = this.allowedClasses[random];

//     // Composes the corresponding player class into the player object
//     this.class = new window[randomClass]();
//     return this.class;

//  }
};

Rat.prototype = new Monster();






