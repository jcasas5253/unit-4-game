$(document).ready(function() {

var compPick = Math.floor(Math.random() * 102) + 19; 
		console.log("compPick: " + compPick); 
        $(".randomNumber").html(compPick); 
});