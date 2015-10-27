var Orc = function(name) {
  this.playerName = name;
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];
  this.class = "Warrior";
  this.weapon = "club";
};
Orc.prototype = new Monster();

var Ogre = function(name) {
  this.playerName = name;
  this.health = this.health + 15;
  this.species = "Ogre";
  this.allowedClasses = ["Valkyrie", "Monk", "Conjurer"];
  this.class = "Monk";
  this.weapon = "fist";

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
Ogre.prototype = new Monster();

var Rat = function(name) {
  this.playerName = name;
  this.health = this.health + 25;
  this.species = "Rat";
  this.allowedClasses = ["Thief", "Ninja", "Sorcerer"];
  this.class = "Ninja";
  this.weapon = "teeth";

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
Rat.prototype = new Monster();


