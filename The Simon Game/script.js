var buttonColours = ["red", "blue", "green", "yellow", "wrong"],
    gamePattern = [],
    userClickedPattern = [],
    gameStarted = false,
    level = 0;

function playSound(name) {

   var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();

}

function animatePress(currentColour) {
   $("#"+currentColour).toggleClass("pressed");
}

function nextSequence() {

   userClickedPattern = [];

   level++;
   $("h1").text("Level " + level);

   var randomNumber = Math.floor(Math.random() * 4);

   randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);

   $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

   playSound(randomChosenColour);

}

function checkAnswer(currentLevel) {

   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){

         setTimeout(function () {
            nextSequence();
         }, 1000);
      }
   }
   else {
      console.log("wrong");
      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function() {
         $("body").removeClass("game-over")
      }, 200);

      $("h1").text("Game Over, Press Any Key to Restart");

      startOver();

   }

}

function startOver() {
   level = 0;
   gamePattern = [];
   gameStarted = false;

}

$(".btn").on("click", function(){
   userChosenColour = $(this).attr("id");
   userClickedPattern.push(userChosenColour);
   playSound(userChosenColour);
   animatePress(userChosenColour);
   setTimeout(animatePress, 100, userChosenColour);

   checkAnswer(userClickedPattern.length-1);

});

$(document).on("keydown", function(){
   if(!gameStarted) {
      level = 0;
      gameStarted = true;
      nextSequence();
   }

});