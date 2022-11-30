


function diceGame (play){
  var random = Math.floor(Math.random()*5+1);
  var random2 = Math.floor(Math.random()*5+1);

  $(".img1").attr("src", "images/dice"+random+".png");
  $(".img2").attr("src", "images/dice"+random2+".png");

  if(random>random2){
    $("h1").text("Player 1 Win!");
  } else if(random<random2){
    $("h1").text("Player 2 Win!");
  } else {
    $("h1").text("Draw!");
  };
};

$(document).on("keypress", function(){
  diceGame();
});
