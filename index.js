var player1 = prompt("Enter the name of first player.");
var player2 = prompt("Enter the name of second player.");

function newGame(){
  var random1 = 1 + Math.floor(Math.random()*6);
  var random2 = 1 + Math.floor(Math.random()*6);

  console.log(random1+" "+random2);
  var ans = "";

  if(random1 == random2){
    ans = "Draw";
  }
  else if(random1 > random2){
    ans = `🚩${player1} Wins!`;
  }
  else{
    ans =  `${player2} Wins! 🚩`;
  }

  document.querySelector("h2").innerHTML = ans;
  document.querySelector(".img1").setAttribute("src", `images/dice${random1}.png`);
  document.querySelector(".img2").setAttribute("src", `images/dice${random2}.png`);
}

newGame();

document.querySelector(".btn").addEventListener('click', newGame );
