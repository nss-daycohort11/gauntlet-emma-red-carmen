$(document).ready(function() {

  /*
    Test code to generate a human player and an orc player
   */

  var warrior = new Human();
  warrior.setWeapon(new WarAxe());
  // warrior.generateClass();  // This will be used for "Surprise me" option
  console.log(warrior.toString());

  var orc = new Orc();
  // orc.generateClass();
  orc.setWeapon(new BroadSword());
  console.log(orc.toString());

  /*
    Test code to generate a spell
   */
  var spell = new Sphere();
  console.log("spell: ", spell.toString());


  /*
    END OF TEST CODE

    Show the initial view that accepts player name
   */
  $("#player-setup").show();



// BEGIN ADDED BY RED
var playerName = "";
$("#select-class").click(function(e) { // listener to get player's name
    playerName = $("#player-name").val();
    console.log(playerName);
    // $("#path").append('<span id="add_here">new-dynamic!!!</span>'); // trying to add player name to 'choose your path'
});
// END ADD



  //Store value of selected Class 
  // var selectedClass;
  // $("body").click(function(e) {
  //   var thisElement = $(event.target).html();
  //   selectedClass = thisElement;
  //   console.log(selectedClass);
  // });


// var selectedClass;
// $("body").click (function(e) {
//   var thisElement = $(event.target).html();
//   if (thisElement === "Warrior") {
//     selectedClass = thisElement;


//   }
//   else if (thisElement === "Valkyrie") {
//     selectedClass = thisElement;
//   }
//   else if (thisElement === "Berserker") {
//     selectedClass = thisElement;
//   }
//   else if (thisElement === "Monk") {
//     selectedClass = thisElement;
//   }
//   else if (thisElement === "Wizard") {
//     selectedClass = thisElement;
//   }
//   else if (thisElement === "Sorcerer") {
//     selectedClass = thisElement;
//   }
//   else if (thisElement === "Conjurer") {
//     selectedClass = thisElement;
//   }
//   else if (thisElement === "Shaman") {
//     selectedClass = thisElement;
//   }
//   else if (thisElement === "Thief") {
//     selectedClass = thisElement;
//   }
//   else if (thisElement === "Ninja") {
//     selectedClass = thisElement;
//   }
//   else if (thisElement === "Assassin") {
//     selectedClass = thisElement;
//   }
//   else if (thisElement === "Surprise") {
//     selectedClass = thisElement;
//   }
//   else if (thisElement === "Dagger") {
//     selectedWeapon = thisElement;
//     }
//   else if (thisElement === "Sword") {
//     selectedWeapon = thisElement;
//     }
//   else if (thisElement === "War Axe") {
//     selectedWeapon = thisElement;
//     }
// });


  //Store value of selected Class 
  var selectedClass;
  $(".class__link").click(function(e) {
    selectedClass = $(this).children(".btn__text").html();
  });

 
  // Store value of selected Weapon // THIS WILL REPLACE ABOVE
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
          $("#tools-view").hide();
        } else if (selectedClass === "Wizard" ||
                  selectedClass === "Sorcerer" ||
                  selectedClass === "Conjurer" ||
                  selectedClass === "Shaman") {
                  // selectedClass === "Thief" ||
                  // selectedClass === "Ninja" ||
                  // selectedClass === "Assassin") {
          $("#weapons-view").hide();
          $("#spells-view").show();
          $("#tools-view").hide();
        // }
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





  $("#defeat-enemies").click (function(e) {
    var currentPlayer = new Human();
    currentPlayer.setWeapon(selectedWeapon);
    currentPlayer.class = selectedClass;
  });
  // var warrior = new Human();
  // warrior.setWeapon(new WarAxe());

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});
