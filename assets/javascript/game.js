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
$('#winnumber').text(" " + wins);
$('#losenumber').text(" " + losses);
$('#total-score').text(playerTotal);

//resets the game
function reset(){
    compPick = Math.floor(Math.random() * 102) + 19; 
    console.log("compPick: " + compPick); 
    $("#randomNumber").html(compPick);
    number1= Math.floor(Math.random()*11+1)
    number2= Math.floor(Math.random()*11+1)
    number3= Math.floor(Math.random()*11+1)
    number4= Math.floor(Math.random()*11+1)
    playerTotal= 0;
    $('#total-score').text(playerTotal);
    } 

    //adds the wins to the playerTotal
function winner(){
    alert("Winner!");
      wins++; 
      $('#winnumber').text(" " + wins);
      reset();
    }
    //adds the losses to the playerTotal
    function loser(){
    alert ("You lose! Try Again.");
      losses++;
      $('#losenumber').text(" " + losses);
      reset()
    }

    //Click for gem 1
$('#one').on ('click', function(){
    playerTotal = playerTotal + number1;
    console.log("New playerTotal= " + playerTotal);
    $('#total-score').text(playerTotal);
    //sets win/lose
    if (playerTotal == compPick){
        winner();
}
    else if ( playerTotal > compPick){
        loser();
}

})
//click for gem 2
$('#two').on ('click', function() {
    playerTotal = playerTotal + number2;
    console.log("New playerTotal= " + playerTotal);
    $('#total-score').text(playerTotal);
    //sets win/lose
    if (playerTotal == compPick){
        winner();
}
    else if ( playerTotal > compPick){
        loser();
}
})

//click for gem 3
$('#three').on ('click', function() {
    playerTotal = playerTotal + number3;
    console.log("New playerTotal= " + playerTotal);
    $('#total-score').text(playerTotal);
//sets win/lose
    if (playerTotal == compPick){
        winner();
}
    else if ( playerTotal > compPick){
        loser();
}
})

//click for gem 4
$('#four').on ('click', function() {
    playerTotal = playerTotal + number4;
    console.log("New playerTotal= " + playerTotal);
    $('#total-score').text(playerTotal)
//sets win/lose
    if (playerTotal == compPick){
        winner();
}
     else if ( playerTotal > compPick){
         loser();
}
})
});