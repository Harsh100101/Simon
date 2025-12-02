var buttonsColors = ["red", "blue", "green", "yellow"];

var gamepattern = [];

var userClickedPattern = [];
var started = false;

var level = 0;
$(document).keypress(function () {
	if (!started) {
		$("#level-title").text("Level " + level);
		nextSequence();
		started = true;
	}
});
function nextSequence() {
	userClickedPattern = [];
	level++;
	$("#level-title").text("Level " + level);

	var randomnumber = Math.floor(Math.random() * 4);
	var randomChosenColour = buttonsColors[randomnumber];
	gamepattern.push(randomChosenColour);

	$("#" + randomChosenColour)
		.fadeIn(100)
		.fadeOut(100)
		.fadeIn(100);

	playSound(randomChosenColour);
}

$(".btn").click(function () {
	var userChosenColor = $(this).attr("id");

	userClickedPattern.push(userChosenColor);

	playSound(userChosenColor);
	animatePress(userChosenColor);
	checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
	var audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}
function animatePress(currentColor) {
	$("#" + currentColor).addClass("pressed");

	setTimeout(function () {
		$("#" + currentColor).removeClass("pressed");
	}, 100);
}

function checkAnswer(currentLevel) {
	if (userClickedPattern[currentLevel] === gamepattern[currentLevel]) {
		console.log("success");
		if (userClickedPattern.length === gamepattern.length) {
			setTimeout(function () {
				nextSequence();
			}, 1000);
		}
	} else {
		console.log("wrong");
		$("#level-title").text("Game Over!! Start Over Press any Key!");

		$("body").addClass("game-over");
		setTimeout(function () {
			$("body").removeClass("game-over");
		}, 200);
		playSound("wrong");
		startOver();
	}
}
function startOver() {
	level = 0;
	gamepattern = [];
	started = false;
}
