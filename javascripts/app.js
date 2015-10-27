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
  // orc.setWeapon(new BroadSword());
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

/* 
  Stores the value of a players name  //
  */

  var playerName = "";
  $(".submit-name").click(function() {
    playerName = $("#player-name").val();
    console.log(playerName);
  });

  // Stores the value of selected class of player//

  var selectedClass;
  $(".class__link").click(function(e) {
    selectedClass = $(this).children(".btn__text").html();
    selectedClassObj = new window[selectedClass];
  });

 
  //Stores the value of selected Weapon choice //

  var selectedWeapon;
  $(".weapon__link").click(function(e) {
    selectedWeapon = $(this).children(".btn__text").html();
    selectedWeapon = new window[selectedWeapon];
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
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
        moveAlong = (selectedWeapon !== "");
        break;
    }

    if (moveAlong) {
      if (nextCard === "card--weapon") {
       if (selectedClass === "Warrior" ||
          selectedClass === "Valkyrie" ||
          selectedClass === "Berserker" ) {
          console.log("fighter");
          $("#weapons-view").show();
          $("#spells-view").hide();
        } else if (selectedClass === "Wizard" ||
            selectedClass === "Sorcerer" ||
            selectedClass === "Conjurer" ||
            selectedClass === "Shaman" ||
            selectedClass === "Thief" ||
            selectedClass === "Ninja" ||
            selectedClass === "Assassin") {
          $("#weapons-view").hide();
          $("#spells-view").show();
        }
      }
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

// Creating random enemy options //

  $("#defeat-enemies-button").click(function(e) {
    var currentPlayer = new Human(playerName);
    currentPlayer.setWeapon(selectedWeapon);
    currentPlayer.class = selectedClassObj;
    console.log(currentPlayer);
    var enemyOptions = ["Orc", "Ogre", "Rat"];
    var random = Math.round(Math.random() * (enemyOptions.length - 1));
    var randomEnemy = enemyOptions[random];
    var currentEnemy = new window[randomEnemy]();
    console.log(currentEnemy);
    var output = "";
    output += "<p>" + currentPlayer.toString() + "</p>";
    output += "<p>" + currentEnemy.toString() + "</p>";

    $("#game-content").html(output);
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
