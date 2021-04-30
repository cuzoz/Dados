function randomRoll(){
  let random1 = Math.floor(Math.random() * 6 + 1);
  let random2 = Math.floor(Math.random() * 6 + 1);

  document.querySelector(".img1").setAttribute("src", "images/dice"+random1+".png");
  document.querySelector(".img2").setAttribute("src", "images/dice"+random2+".png");

  if (random1 > random2){
    document.querySelector(".container h1").textContent = "Jugador 1 gana!";
  }else if (random2 > random1){
    document.querySelector(".container h1").textContent = "Jugador 2 gana!";
  }else{
    document.querySelector(".container h1").textContent = "Es un empate!";
  }
}
