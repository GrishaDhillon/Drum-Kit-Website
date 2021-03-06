
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) 
{
   document.querySelectorAll("button")[i].addEventListener("click", handleClick);

    function handleClick()
    {
	  //this.style.color = "white";
	  var buttonInnerHTML=this.innerHTML;
	  buttonAnimation(buttonInnerHTML);
	  switch(buttonInnerHTML)
	  {
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

	    default : console.log(buttonInnerHTML)
      }
    }
}

// anonymous function- a function without a name..see example below
// document.querySelectorAll("button")[i].addEventListener("click", function{
// 	alert("I got clicked");
//     });

 // var audio = new Audio("sounds/tom-1.mp3");
	// audio.play(); 

	document.addEventListener("keydown",function(event){
		//console.log(event);
		//var keypressInnerHTML=this.event.key;
		buttonAnimation(event.key);
	  switch(event.key)
	  {
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

	    default : console.log("Press a valid Key")
      }
	})  


	function buttonAnimation(currentKey){
		var buttonPressed = document.querySelector("."+currentKey);
		buttonPressed.classList.add("pressed");
		setTimeout(function(){
			buttonPressed.classList.remove("pressed")
		},100);

	}