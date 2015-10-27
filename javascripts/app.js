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

  var battlePlayerHealth;
  var battleEnemyHealth;


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

  var currentPlayer;
  var currentEnemy;
  var totalPlayerHealth;
  var totalEnemyHealth;



  $("#defeat-enemies-button").click(function(e) {

// Creating chosen player //

    currentPlayer = new Human(playerName);
    currentPlayer.setWeapon(selectedWeapon);
    currentPlayer.class = selectedClassObj;
    console.log(currentPlayer);

  // Adds player health and bonus' together //  

    totalPlayerHealth = currentPlayer.health + currentPlayer.class.healthBonus;
    battlePlayerHealth = totalPlayerHealth;

    //Creating random enemy //
    var enemyName = "Guldan the Enemy";
    var enemyOptions = ["Orc", "Ogre", "Rat"];
    var random = Math.round(Math.random() * (enemyOptions.length - 1));
    var randomEnemy = enemyOptions[random];
    currentEnemy = new window[randomEnemy](enemyName);
    console.log(currentEnemy);

    // Adds enemy health and bonus' together //

    totalEnemyHealth = currentEnemy.health + currentEnemy.class.healthBonus;
    battleEnemyHealth = totalEnemyHealth;

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

  // Functions to execute attack button: //

  var gameDiv = $("#game-content");

  // Attack button-starting the fight //

   $(".attack-button").click(function() {
    // subtract player damage from enemy health //
     // target player damage value
     var playerDamage = Math.round(Math.random() * (currentPlayer.weapon.damage));
     // execute math and assign to variable //
     battleEnemyHealth = battleEnemyHealth - playerDamage;
     console.log(battleEnemyHealth, "= battleEnemyHealth");

    // subtract enemy damage from player health 
     // target enemy damage value
     var enemyDamage = Math.round(Math.random() * (currentEnemy.weapon.damage));
     // execute math and push to respective objects
     battlePlayerHealth = battlePlayerHealth - playerDamage;
     console.log(battlePlayerHealth, "= battlePlayerHealth");
     var output = "";

     if (battlePlayerHealth > 0 && battleEnemyHealth > 0) {
      output += "<p class='game-log'>" + currentPlayer.playerName;
      output += " (" + battlePlayerHealth + " HP) ";
      output += "attacks " + currentEnemy.playerName + " for ";
      output += playerDamage + " damage.</p>";
      output += "<p class='game-log'>" + currentEnemy.playerName;
      output += " (" + battleEnemyHealth + " HP) ";
      output += "attacks " + currentPlayer.playerName + " for ";
      output += enemyDamage + " damage.</p>";
      console.log("ATTACK LOG: ", output);
      //output to html
      gameDiv.append(output);
    } else if (battlePlayerHealth <= 0 && battleEnemyHealth > 0) {
      output += "<p class='game-log'>" + currentPlayer.playerName;
      output += " (" + battlePlayerHealth + " HP) ";
      output += "attacks " + currentEnemy.playerName + " for ";
      output += playerDamage + " damage.</p>";
      output += "<p class='game-log'>" + currentEnemy.playerName;
      output += " (" + battleEnemyHealth + " HP) ";
      output += "attacks " + currentPlayer.playerName + " TO KILL!</p><p>GAME OVER</p>";
      gameDiv.append(output);
    } else if (battleEnemyHealth <= 0 && battlePlayerHealth > 0) {
      output += "<p class='game-log'>" + currentPlayer.playerName;
      output += " (" + battlePlayerHealth + " HP) ";
      output += "attacks " + currentEnemy.playerName + " TO KILL!</p><p>GAME OVER</p>";
      gameDiv.append(output);
    }
  });



    
  


});
