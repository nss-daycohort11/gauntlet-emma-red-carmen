$(document).ready(function() {

  /*
    Test code to generate a human player and an orc player
   */

  // var warrior = new Human();
  // warrior.setWeapon(new WarAxe());
  // warrior.generateClass();  // This will be used for "Surprise me" option
  // console.log(warrior.toString());

  // var orc = new Orc();
  // orc.generateClass();
  // orc.setWeapon(new Sword());
  // console.log(orc.toString());

  /*
    Test code to generate a spell
   */
  // var spell = new Sphere();
  // console.log("spell: ", spell.toString());

  /*
    END OF TEST CODE

    Show the initial view that accepts player name
   */
  $("#player-setup").show();

var playerName = "";
$("#select-class").click(function(e) { // listener to get player's name
    playerName = $("#playerName").val();
    //$("#path").append('<span id="add_here">new-dynamic!!!</span>'); // trying to add player name to 'choose your path'
});

  //Store value of selected Class 
  var selectedClass;
  $(".class__link").click(function(e) {
    selectedClass = $(this).children(".btn__text").html();
    selectedClassObj = new window[selectedClass];
  });

 
  // Store value of selected Weapon
  var selectedWeapon;
  $(".weapon__link").click(function(e) {
    selectedWeapon = $(this).children(".btn__text").html();
    selectedWeapon = new window[selectedWeapon];
    console.log(selectedWeapon);
  });

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#playerName").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#playerName").val() !== "");
        break;
      case "card--battleground":
        moveAlong = (selectedWeapon !== "");
        break; 
    }

    if (moveAlong) {
      if (nextCard === "card--weapon") {
        if (selectedClass === "Warrior" ||
            selectedClass === "Valkyrie" ||
            selectedClass === "Berserker" ||
            selectedClass === "Monk") {
          console.log("fighter");
          $("#weapons-view").show();
          $("#spells-view").hide();
          $("#tools-view").hide();
        } else if (selectedClass === "Wizard" ||
                  selectedClass === "Sorcerer" ||
                  selectedClass === "Conjurer" ||
                  selectedClass === "Shaman") {
          $("#weapons-view").hide();
          $("#spells-view").show();
          $("#tools-view").hide();
        } else if (selectedClass === "Thief" ||
                  selectedClass === "Ninja" ||
                  selectedClass === "Assassin") {
          $("#weapons-view").hide();
          $("#spells-view").hide();
          $("#tools-view").show();
        }
      }
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

// Defeat Enemy Click
  $("#defeat-enemies").click (function(e) {
    console.log("Defeat Enemies clicked");
    var currentPlayer = new Human(playerName);
    currentPlayer.setWeapon(selectedWeapon);
    currentPlayer.class = selectedClassObj;

    var enemyOptions = ["Orc", "Orge", "Rat"];
    var random = Math.round(Math.random() * (enemyOptions.length -1));
    var randomEnemy = enemyOptions[random];
    var currentEnemy = new window[randomEnemy]();
    console.log("currentEnemy", currentEnemy);
    console.log("currentPlayer", currentPlayer);


// Output to battleground/battlefield
// var output = "";
// output += "<p>" + currentPlayer.toString;
// output += " is a " + currentPlayer.skinColor;
// output += currentPlayer.species + "!</p>";
// console.log(output);

// $("#attack-button").click(function () {
//   $("#battleground").html()
// })

});


  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});
