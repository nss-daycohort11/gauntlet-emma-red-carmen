var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

var Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Dagger.prototype = new Weapon();

var Sword = function() {
  this.name = "broad sword";
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

var Club = function() {
  this.name = "club";
  this.damage = 8;
  this.hands = 2;
};
Club.prototype = new Weapon();

var Fist = function() {
  this.name = "fist";
  this.damage = 10;
  this.hands = 2;
};
Fist.prototype = new Weapon();

var Teeth = function() {
  this.name = "teeth";
  this.damage = 8;
  this.hands = 2;
};
Teeth.prototype = new Weapon();