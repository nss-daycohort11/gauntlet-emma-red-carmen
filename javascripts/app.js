 $(document).ready(function() {

  var playerName = "";
  var selectedClass;
  var selectedWeapon;

  var currentPlayer;
  var currentEnemy;
  var totalPlayerHealth;
  var totalEnemyHealth;

  var battlePlayerHealth;
  var battleEnemyHealth;

  var gameDiv = $("#game-content");


  // Show the initial view that accepts player name
  $("#player-setup").show();

  //Store value of player name
  $(".submit-name").click(function() {
    playerName = $("#player-name").val();
    //create player object
    currentPlayer = new Human(playerName);
  });

  //Store value of selected Class 
  $(".class__link").click(function(e) {
    if ( $(this).hasClass("surprise") ) {
      currentPlayer.generateClass();
      selectedClass = currentPlayer.class.name;
    } else {
      selectedClass = $(this).children(".btn__text").html();
      currentPlayer.class = new window[selectedClass];
    }
    // console.log("the class is ", currentPlayer.class);
  });
 
  //Store value of selected Weapon 
  $(".weapon__link").click(function(e) {
    selectedWeapon = $(this).children(".btn__text").html();
    selectedWeapon = new window[selectedWeapon];
    // assign weapon to player
    currentPlayer.setWeapon(selectedWeapon);
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
            selectedClass === "Berserker" ||
            selectedClass === "Monk" ) {
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

  

  $("#defeat-enemies-button").click(function(e) {
    //adding to get total player health
    totalPlayerHealth = currentPlayer.health + currentPlayer.class.healthBonus;
    battlePlayerHealth = totalPlayerHealth;
    console.log("totalplayerhealth", totalPlayerHealth);
    console.log(currentPlayer.toString());
    console.log(currentPlayer);

    // create random enemy
    var enemyName = "Guldan the Enemy";
    var enemyOptions = ["Orc", "Ogre", "Rat"];
    var random = Math.round(Math.random() * (enemyOptions.length - 1));
    var randomEnemy = enemyOptions[random];
    currentEnemy = new window[randomEnemy](enemyName);
    currentEnemy.class = currentEnemy.generateClass();
    //adding to get total enemy health
    totalEnemyHealth = currentEnemy.health + currentEnemy.class.healthBonus;
    battleEnemyHealth = totalEnemyHealth;
    console.log("totalEnemyHealth", totalEnemyHealth);
    console.log(currentEnemy);

    var output = "";
    output += "<p>" + currentPlayer.toString() + "</p>";
    output += "<p>" + currentEnemy.toString() + "</p>";

    $("#game-header").html(output);
  });


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
      output += "<div class='game-log'><p>" + currentPlayer.playerName;
      output += " (" + battlePlayerHealth + " HP) ";
      output += "attacks " + currentEnemy.playerName + " for ";
      output += playerDamage + " damage.</p>";
      output += "<p>" + currentEnemy.playerName;
      output += " (" + battleEnemyHealth + " HP) ";
      output += "attacks " + currentPlayer.playerName + " for ";
      output += enemyDamage + " damage.</p></div>";
      console.log("ATTACK LOG: ", output);
      //output to html
      gameDiv.append(output);
    } else if (battlePlayerHealth <= 0 && battleEnemyHealth > 0) {
      output += "<div class='game-end'><p>" + currentEnemy.playerName;
      output += " (" + battleEnemyHealth + " HP) ";
      output += "attacks " + currentPlayer.playerName + " TO KILL!</p><img src='https://media3.giphy.com/media/PrCdnw7opGBa0/giphy.gif'><p>GAME OVER</p></div>";
      gameDiv.append(output);
    } else if (battleEnemyHealth <= 0 && battlePlayerHealth > 0) {
      output += "<div class='game-end'><p>" + currentPlayer.playerName;
      output += " (" + battlePlayerHealth + " HP) ";
      output += "attacks " + currentEnemy.playerName + " TO KILL!</p><img src='http://img.pandawhale.com/74110-oh-yeah-gif-Obama-b86q.gif'><p>GAME OVER</p></div>";
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