const colors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;


$('*').click(function(event) {
   if(!started){
		$("#level-title").html("Level " + level);
		nextSequence();
		started = true;
	} 
});


$(".btn").click(function() {

	const choosenColor = (this.id);
	userClickedPattern.push(choosenColor);

	animatePress(choosenColor);
	checkAnswer(userClickedPattern.length-1);
});
 


function checkAnswer(currentLevel) {

	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
		if (userClickedPattern.length === gamePattern.length){
			setTimeout(function () {
				nextSequence(); 
			}, 1000);
		}
	} else {
		$("body").addClass("game-over");
		setTimeout(function () {
			$("body").removeClass("game-over");
		}, 200);
		$("#level-title").text("Game Over, Please refresh to restart.");                    
	}

}


function nextSequence(){
	userClickedPattern = [];
	level++;
	$("#level-title").text("Level " + level);
	const randomNumber = (Math.floor(Math.random()*4));
	const randomColor = (colors[randomNumber]);
	var found = document.getElementById(randomColor).id;
	gamePattern.push(found);
	$("#" + found).fadeOut(100).fadeIn(100);
}



function animatePress(choosenColor){
	$("#" + choosenColor).addClass("pressed");
	setTimeout(function(){
		$("#" + choosenColor).removeClass("pressed");
	}, 100);
}


function startOver(){
	level = 0;
	gamePattern = [];
	started = false;
}








