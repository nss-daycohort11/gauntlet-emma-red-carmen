var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

// REGULAR WEAPONS
var Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Dagger.prototype = new Weapon();

var Sword = function() {
  this.name = "sword";
  this.damage = 14;
  this.hands = 2;
};
Sword.prototype = new Weapon();

var Axe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
Axe.prototype = new Weapon();

// MAGIC SPELLS
var Sphere = function() {
  this.name = "spere";
  this.damage = 4;
  this.hands = 1;
};
Sphere.prototype = new Weapon();

var Fireball = function() {
  this.name = "fireball";
  this.damage = 4;
  this.hands = 1;
};
Fireball.prototype = new Weapon();

var Wand = function() {
  this.name = "wand";
  this.damage = 4;
  this.hands = 1;
};
Wand.prototype = new Weapon();

// STEALTH WEAPONS
var Cloak = function() {
  this.name = "cloak";
  this.damage = 4;
  this.hands = 1;
};
Cloak.prototype = new Weapon();

var Nunchucks = function() {
  this.name = "nunchucks";
  this.damage = 4;
  this.hands = 1;
};
Nunchucks.prototype = new Weapon();

var Crowbar = function() {
  this.name = "crowbar";
  this.damage = 4;
  this.hands = 1;
};
Crowbar.prototype = new Weapon();
