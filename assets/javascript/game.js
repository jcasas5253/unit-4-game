//Random number between 19-120
$(document).ready(function() {

var compPick = Math.floor(Math.random() * 102) + 19; 
		console.log("compPick: " + compPick); 
        $("#randomNumber").html(compPick); 
});
//setting all possible numbers for the gems 1-12
var number1= Math.floor(Math.random()*11+1)
var number2= Math.floor(Math.random()*11+1)
var number3= Math.floor(Math.random()*11+1)
var number4= Math.floor(Math.random()*11+1)