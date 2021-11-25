var noOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    // console.log(this);
    // this.style.color="white";

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    animation(buttonInnerHTML);
  });
}

// var audio=new Audio("./sounds/tom-1.mp3");
// audio.play();

//Detecting key press

document.addEventListener("keydown", function (event) {
  // makeSound(event.key);
  makeSound(event.key);
  animation(event.key);
});

function animation(currentKey){
  var button=document.querySelector("."+currentKey);

  button.classList.add("pressed");
  setTimeout(function(){
    button.classList.remove("pressed");
  },200)

}

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kickbass = new Audio("./sounds/kickbass.mp3");
      kickbass.play();
      break;
    case "l":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}
