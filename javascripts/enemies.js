var Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];
  this.class = "Orc";

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

var Ogre = function() {
  this.health = this.health + 15;
  this.species = "Orge";
  this.allowedClasses = "Valkyrie", "Monk", "Conjurer";
  this.class = "Ogre";

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
Ogre.prototype = new Monster;

var Rat = function() {
  this.health = this.health + 15;
  this.species = "Rat";
  this.allowedClasses = "Thief", "Ninja", "Sorcerer";
  this.class = "Rat";

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
Rat.prototype = new Monster;






