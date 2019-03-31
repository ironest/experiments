var elem = document.querySelectorAll("button.drum");

for (var i=0;i<elem.length;i++)
   elem[i].addEventListener("click", function () {

   var btnInnerHTML = this.innerHTML;
   makeSound(btnInnerHTML);

});

document.addEventListener("keydown", function (event) {
   makeSound(event.key);
})

function makeSound(key){
   var audio;
   
   switch (key) {
      case "w":
         audio = new Audio("sounds/tom-1.mp3");
         break;
      case "a":
         audio = new Audio("sounds/tom-2.mp3");
         break;
      case "s":
         audio = new Audio("sounds/tom-3.mp3");
         break;
      case "d":
         audio = new Audio("sounds/tom-4.mp3");
         break;
      case "j":
         audio = new Audio("sounds/snare.mp3");
         break;
      case "k":
         audio = new Audio("sounds/crash.mp3");
         break;
      case "l":
         audio = new Audio("sounds/kick-bass.mp3");
         break;
      default:
         console.log(key);
         break;
   } 

   audio.play();
}