// var btn = document.querySelectorAll("button");
//
// function handleClick() {
//
//   if (this.textContent == "w") {
//     var w = new Audio("sounds/tom-1.mp3");
//     w.play();
//     this.style.color = "white";
//   }
//
//   if (this.textContent == "a") {
//     var a = new Audio("sounds/tom-2.mp3");
//     a.play();
//     this.style.color = "white";
//   }
//
//   if (this.textContent == "s") {
//     var s = new Audio("sounds/tom-3.mp3");
//     s.play();
//     this.style.color = "white";
//   }
//
//   if (this.textContent == "d") {
//     var d = new Audio("sounds/tom-4.mp3");
//     d.play();
//     this.style.color = "white";
//   }
//
//   if (this.textContent == "j") {
//     var j = new Audio("sounds/snare.mp3");
//     j.play();
//     this.style.color = "white";
//   }
//
//   if (this.textContent == "k") {
//     var k = new Audio("sounds/crash.mp3");
//     k.play();
//     this.style.color = "white";
//   }
//
//   if (this.textContent == "l") {
//     var l = new Audio("sounds/kick-bass.mp3");
//     l.play();
//     this.style.color = "white";
//   }
// }
//
// for (var i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", handleClick);
// }
//
//
// document.addEventListener("keydown",function(event){
// console.log(event);
// });


// ******SWITCH*******
//
// var btn = document.querySelectorAll("button");
//
// for (var i = 0; i < btn.length; i++) {
//
//    btn[i].addEventListener("click", function() {
//
//   var buttonInnerHtml = this.textContent;
//
//   switch (buttonInnerHtml) {
//     case "w":
//       var tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;
//
//     case "a":
//       var tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;
//
//     case "s":
//       var tom3 = new Audio("sounds/tom-3.mp3");
//       tom3.play();
//       break;
//
//     case "d":
//       var tom4 = new Audio("sounds/tom-4.mp3");
//       tom4.play();
//       break;
//
//     case "j":
//       var snare = new Audio("sounds/snare.mp3");
//       snare.play();
//       break;
//
//     case "k":
//       var crash = new Audio("sounds/crash.mp3");
//       crash.play();
//       break;
//
//     case "l":
//       var kickbass = new Audio("sounds/kick-bass.mp3");
//       kickbass.play();
//       break;
//
//     default:console.log(buttonInnerHtml);
//
//   }
//
// });
//
// }



// Detecting Button keyPress

var btn = document.querySelectorAll("button");

for (var i = 0; i < btn.length; i++) {

  btn[i].addEventListener("click", function() {

    var buttonClicked = this.textContent;

    makeSound(buttonClicked);

    buttonAnimation(buttonClicked);
  });

}

// Detecting Keyboard Press\

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    default:
      console.log(key);

  }

}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
