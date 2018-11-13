//Random number between 19-120
$(document).ready(function() {

var compPick = Math.floor(Math.random() * 102) + 19; 
		console.log("compPick: " + compPick); 
        $("#randomNumber").html(compPick); 

//setting all possible numbers for the gems 1-12
var number1= Math.floor(Math.random()*11+1)
var number2= Math.floor(Math.random()*11+1)
var number3= Math.floor(Math.random()*11+1)
var number4= Math.floor(Math.random()*11+1)

//setting tallies to 0
var wins = 0;
var losses = 0;
var playerTotal = 0;

//appending the win and loss tallies
$('#winnumber').text("wins: " + wins);
$('#losenumber').text("losses: " + losses);
$('#total-score').text(playerTotal);

//Click for gem 1
$('#one').on ('click', function(){
    playerTotal = playerTotal + number1;
    console.log("New playerTotal= " + playerTotal);
    $('#total-score').text(playerTotal);

})
//click for gem 2
$('#two').on ('click', function() {
    playerTotal = playerTotal + number2;
    console.log("New playerTotal= " + playerTotal);
    $('#total-score').text(playerTotal);
})

//click for gem 3
$('#three').on ('click', function() {
    playerTotal = playerTotal + number3;
    console.log("New playerTotal= " + playerTotal);
    $('#total-score').text(playerTotal);
})

//click for gem 4
$('#four').on ('click', function() {
    playerTotal = playerTotal + number4;
    console.log("New playerTotal= " + playerTotal);
    $('#total-score').text(playerTotal)
})
});