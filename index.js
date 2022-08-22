var random1 = 1 + Math.floor(Math.random()*6);
var random2 = 1 + Math.floor(Math.random()*6);

console.log(random1+" "+random2);
var ans = "";

if(random1 == random2){
  ans = "Draw";
}
else if(random1 > random2){
  ans = "🚩Player 1 Wins!";
}
else{
  ans = "Player 2 Wins!🚩";
}

document.querySelector("h1").innerHTML = ans;
document.querySelector(".img1").setAttribute("src", `images/dice${random1}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${random2}.png`);
