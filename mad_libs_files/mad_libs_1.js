//Created by Gavin Kirkreit
var storyArr = [];

function runOnload(){
	var story = document.querySelector("#story");
	var inputs = document.querySelector("#inputs");
	var adjective1 = document.querySelector("#adjective1");
	var verbEndingInED = document.querySelector("#verbEndingInED");
	var nounPlural1 = document.querySelector("#nounPlural1");
	var liquid = document.querySelector("#liquid");
	var nounPlural2 = document.querySelector("#nounPlural2");
	var famousPerson = document.querySelector("#famousPerson");
	var place = document.querySelector("#place");
	var occupation = document.querySelector("#occupation");
	var noun1 = document.querySelector("#noun1");
	var nationality = document.querySelector("#nationality");
	var femaleCelebrity = document.querySelector("#femaleCelebrity");
	var noun2 = document.querySelector("#noun2");
	var femaleFriend = document.querySelector("#femaleFriend");
	var nounPlural3 = document.querySelector("#nounPlural3");
	var number = document.querySelector("#number");
	var adjective2 = document.querySelector("#adjective2");
	storyArr = [story, adjective1, verbEndingInED, nounPlural1, liquid, nounPlural2, famousPerson, place, occupation, noun1, nationality, femaleCelebrity, noun2, femaleFriend, number, adjective2];

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

	function createStory(){
		console.log("createStory HAS BEEN CALLED");
		var finalStory = ""; 
		finalStory += "I enjoy long, " + adjective1.value;
		finalStory += " walks on the beach, getting " + verbEndingInED.value;
		finalStory += " in the rain and serendipitous encounters with " + nounPlural1.value;
		finalStory += ". I really like piña coladas mixed with " + liquid.value;
		finalStory += ", and romantic, candle-lit " + nounPlural2.value;
		finalStory += ". I am well-read from Dr. Seuss to " + famousPerson.value;
		finalStory += ". I travel frequently, especially to " + place.value;
		finalStory += ", when I am not busy with work. (I am a " + occupation.value;
		finalStory += ".) I am looking for " + noun1.value;
		finalStory += " and beauty in the form of a " + nationality.value;
		finalStory += " goddess. She should have the physique of " + femaleCelebrity.value;
		finalStory += " and the " + noun2.value;
		finalStory += " of " + femaleFriend.value;
		finalStory += ". I would prefer if she knew how to cook, clean, and wash my " + nounPlural3.value;
		finalStory += ". I know I’m not very attractive in my picture, but it was taken " + number.value;
		finalStory += " days ago, and I have since become more " + adjective2.value + ".";
		story.innerHTML = finalStory;
		console.log(story + " IS THE STORY");
	}
}

window.onload = runOnload;