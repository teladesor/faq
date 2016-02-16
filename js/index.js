// Tip: You can either hide the answer on page load with js or use display:none in css

$(document).ready(function(){
	$("#answer1").hide();
    $("#question1").click(function(){
    $("#answer1").slideToggle();
});

	$("#answer2").hide();
   	$("#question2").click(function(){
    $("#answer2").slideToggle();
});

	$("#answer3").hide();
    $("#question3").click(function(){
    $("#answer3").slideToggle();
});
});
