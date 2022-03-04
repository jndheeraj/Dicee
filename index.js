

// document.querySelector(".btn").click=location.reload();

function start(){
    document.querySelector(".str").style.display="none";
    document.querySelector("#diceHead").style.display="none";
    localStorage.setItem("#pl1", prompt("Please enter player1 Name:")); 
    localStorage.setItem("#pl2", prompt("Please enter player2 Name:")); 
    // var pl2Name=prompt("Please enter player2 Name:");
    // document.querySelector(".play").style.display="none"; //none = hides the display; to show the display use "block"
    location.replace("dicee.html"); //redirects to another webpage
}
var pls1=[];
var pls2=[];
var ilo=0;


function init(){
    ilo++;
    
    var randomNumber1=Math.floor((Math.random()*6)+1);
// console.log(randomNumber1);
    var randomDice="images/dice"+randomNumber1+".png"
    document.querySelector(".img1").setAttribute("src",randomDice);
    var randomNumber2=Math.floor((Math.random()*6)+1);
// console.log(randomNumber2);
    var randomDice="images/dice"+randomNumber2+".png"
    document.querySelector(".img2").setAttribute("src",randomDice);
    // document.querySelector(".btn").onclick=location.reload();
    // localStorage.setItem(".p1S",pls1+randomNumber1);
    // document.querySelector(".p1S").innerHTML=localStorage.getItem(".p1S");
    if(ilo!==5){
        pls1.push(randomNumber1);
        pls2.push(randomNumber2);
    }

    var sum1 = pls1.reduce(function(a, b){return a + b;}, 0);
    document.querySelector(".p1S").innerHTML=sum1;
    
    var sum2 = pls2.reduce(function(a, b){return a + b;}, 0);
    document.querySelector(".p2S").innerHTML=sum2;

    var w1=(localStorage.getItem("#pl1")+" is the winner!");
    var w2=(localStorage.getItem("#pl2")+" is the winner!");
    
    if(ilo===5){
        if(sum1<sum2){
            document.querySelector(".winner").style.display="block";
            document.querySelector(".winner").innerHTML=w2;
            document.querySelector(".btn").style.display="none";
            document.querySelector(".img1").style.display="none";
            document.querySelector(".img2").style.display="none";
            document.querySelector("#pl1").style.display="none";
            document.querySelector("#pl2").style.display="none";
            document.querySelector("#reload").style.display="block";
            document.querySelector("#changeNames").style.display="block";
        // alert("Player 2 is winner!" +sum1+"&"+sum2);
        }
        else if(sum1>sum2){
            // alert("Player 1 is winner," +sum1+"&"+sum2);
            document.querySelector(".winner").style.display="block";
            document.querySelector(".winner").innerHTML=w1;
            document.querySelector(".btn").style.display="none";
            document.querySelector(".img1").style.display="none";
            document.querySelector(".img2").style.display="none";
            document.querySelector("#pl1").style.display="none";
            document.querySelector("#pl2").style.display="none";
            document.querySelector("#reload").style.display="block";
            document.querySelector("#changeNames").style.display="block";
        }
        else if(sum1==sum2){
            document.querySelector(".winner").style.display="block";
            document.querySelector(".winner").innerHTML="The Game is draw!";
            document.querySelector(".btn").style.display="none";
            document.querySelector(".img1").style.display="none";
            document.querySelector(".img2").style.display="none";
            document.querySelector("#pl1").style.display="none";
            document.querySelector("#pl2").style.display="none";  
            document.querySelector("#reload").style.display="block";
            document.querySelector("#changeNames").style.display="block"; 
        }
    }  
}

var play1N=(localStorage.getItem("#pl1")+"'s Score");
var play2N=(localStorage.getItem("#pl2")+"'s Score");

document.querySelector("#pl1").innerHTML=localStorage.getItem("#pl1");
document.querySelector("#pl2").innerHTML=localStorage.getItem("#pl2");
document.querySelector(".pl1Score").innerHTML=play1N;
document.querySelector(".pl2Score").innerHTML=play2N;

function startOver(){
    location.replace("index.html");
}