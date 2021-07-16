function randomImages1() {

    randomNumber1 = Math.floor((Math.random() * 6)+1);

    if(randomNumber1 === 1){
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
    }
    else if(randomNumber1 === 2){
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
    }
    else if(randomNumber1 === 3){
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
    }
    else if(randomNumber1 === 4){
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
    }
    else if(randomNumber1 === 5){
        document.querySelector(".img1").setAttribute("src","images/dice5.png");
    }
    else if(randomNumber1 === 6){
        document.querySelector(".img1").setAttribute("src","images/dice6.png");
    }

}

function randomImages2() {

    randomNumber2 = Math.floor((Math.random() * 6)+1);

    if(randomNumber2 === 1){
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
    }
    else if(randomNumber2 === 2){
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
    }
    else if(randomNumber2 === 3){
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
    }
    else if(randomNumber2 === 4){
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
    }
    else if(randomNumber2 === 5){
        document.querySelector(".img2").setAttribute("src","images/dice5.png");
    }
    else if(randomNumber2 === 6){
        document.querySelector(".img2").setAttribute("src","images/dice6.png");
    }

}

randomImages1();
randomImages2();




function compare(){
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerText = "Player1 wins!🎉";
    }
    else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerText = "Player2 wins!🎉";
    }
    else{
        document.querySelector("h1").innerText = "It's a Draw!";
    }
}

compare();