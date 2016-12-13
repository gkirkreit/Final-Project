//Created by Gavin Kirkreit
function runOnload(){
	var story = document.querySelector("#story");
	var relative1 = document.querySelector("#relative1");
	var adjective1 = document.querySelector("#adjective1");
	var adjective2 = document.querySelector("#adjective2");
	var adjective3 = document.querySelector("#adjective3");
	var personInRoom1 = document.querySelector("#personInRoom1");
	var adjective4 = document.querySelector("#adjective4");
	var adjective5 = document.querySelector("#adjective5");
	var verbEndingInED = document.querySelector("#verbEndingInED");
	var bodyPart = document.querySelector("#bodyPart");
	var verbEndingInING = document.querySelector("#verbEndingInING");
	var nounPlural = document.querySelector("#nounPlural");
	var noun = document.querySelector("#noun");
	var adverb = document.querySelector("#adverb");
	var verb1 = document.querySelector("#verb1");
	var verb2 = document.querySelector("#verb2");
	var relative2 = document.querySelector("#relative2");
	var personInRoom2 = document.querySelector("#personInRoom2");
	storyArr = [story, relative1, adjective1, adjective2, adjective3, personInRoom1, adjective4, adjective5, verbEndingInED, bodyPart, verbEndingInING, nounPlural, noun, adverb, verb1, verb2, relative2, personInRoom2];

	var num;
	function inputCounter(arr){
		console.log(inputCounter + " WAS CALLED");
		num = 0;
		for(var i = 0; i < storyArr.length; i++){
			if(storyArr[i] !== null && storyArr[i].includes(/^[a-z0-9]+$/i) === true){
				num++;
			}
		}
		alert("You entered " + num + " entries!");
	}

	//event listener for the button
	var finished = document.querySelector("#finished");
	if(finished){
		finished.addEventListener("click", inputCounter(storyArr), createStory, false);
	} else{
		console.log("Button has been clicked but it can't do anything.");
	}

	//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
	function setCookie(cname, cvalue, exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires="+d.toUTCString();
	    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
	function getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
	}

	//event listener for the button
	var finished = document.querySelector("#finished");
	if(finished){
		finished.addEventListener("click", createStory, false);
	} else{
		console.log("Button has been clicked but it can't do anything.");
	}


	function createStory(){
		console.log("createStory HAS BEEN CALLED");
		var finalStory = ""; 
		finalStory += "Dear " + relative1.value + ", \n";
		finalStory += "I am having a(n) " + adjective1.value + ". ";
		finalStory += "The counselor is " + adjective2.value;
		finalStory += " and the food is " + adjective3.value;
		finalStory += ". I met " + personInRoom1.value;
		finalStory += " and we became " + adjective4.value;
		finalStory += " friends. Unfortunately, " + personInRoom1.value;
		finalStory += " is " + adjective5.value;
		finalStory += " and I " + verbEndingInED.value;
		finalStory += " my " + bodyPart.value;
		finalStory += " so we couldn't go " + verbEndingInING.value;
		finalStory += " like everybody else. I need more " + nounPlural.value;
		finalStory += " and a " + noun.value;
		finalStory += " sharpener, so please " + adverb.value + verb1.value;
		finalStory += " when you " + verb2.value + " back.\n";
		finalStory += "Your " + relative2.value + ",\n";
		finalStory += personInRoom2.value;
		story.innerHTML = finalStory;
		console.log(story + " IS THE STORY");
	}
}

window.onload = runOnload;