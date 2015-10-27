 $(document).ready(function() {


  var battlePlayerHealth;
  var battleEnemyHealth;

  // Show the initial view that accepts player name
  $("#player-setup").show();

  //Store value of player name
  var playerName = "";
  $(".submit-name").click(function() {
    playerName = $("#player-name").val();
    console.log(playerName);
  });

  //Store value of selected Class 
  var selectedClass;
  $(".class__link").click(function(e) {
    selectedClass = $(this).children(".btn__text").html();
    selectedClassObj = new window[selectedClass];
  });

 
  //Store value of selected Weapon 
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
    // console.log("you clicked a card");

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = (selectedClass !== "");
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
          console.log("magical");
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
    //create player object
    currentPlayer = new Human(playerName);
    currentPlayer.setWeapon(selectedWeapon);
    currentPlayer.class = selectedClassObj;
    //adding to get total player health
    totalPlayerHealth = currentPlayer.health + currentPlayer.class.healthBonus;
    battlePlayerHealth = totalPlayerHealth;
    console.log("totalplayerhealth", totalPlayerHealth);
    // currentPlayer.generateClass();  // This will be used for "Surprise me" option
    console.log(currentPlayer.toString());
    console.log(currentPlayer);

    // create random enemy
    var enemyName = "Guldan the Enemy";
    var enemyOptions = ["Orc", "Ogre", "Rat"];
    var random = Math.round(Math.random() * (enemyOptions.length - 1));
    var randomEnemy = enemyOptions[random];
    currentEnemy = new window[randomEnemy](enemyName);
    //adding to get total enemy health
    totalEnemyHealth = currentEnemy.health + currentEnemy.class.healthBonus;
    battleEnemyHealth = totalEnemyHealth;
    console.log("totalEnemyHealth", totalEnemyHealth);
    console.log(currentEnemy);

    var output = "";
    output += "<p>" + currentPlayer.toString() + "</p>";
    output += "<p>" + currentEnemy.toString() + "</p>";

    $("#game-content").html(output);
  });

  var gameDiv = $("#game-content");

  // function to execute battle on attack click
  $("#attack").click(function() {
   // subtract player damage from enemy health
    // target player damage value
    var playerDamage = Math.round(Math.random() * (currentPlayer.weapon.damage));
    console.log(playerDamage);
    // execute math and assign to variable
    battleEnemyHealth = battleEnemyHealth - playerDamage;
    console.log("battleEnemyHealth =", battleEnemyHealth);
   // subtract enemy damage from player health 
    // target enemy damage value
    var enemyDamage = Math.round(Math.random() * (currentEnemy.weapon.damage));
    // execute math and assign to variable
    battlePlayerHealth = battlePlayerHealth - enemyDamage;
    console.log("battlePlayerHealth =", battlePlayerHealth);
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

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});