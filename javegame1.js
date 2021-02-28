function calnumberrandom(){

var randomplayer1=Math.floor(Math.random()*6)+1;
var randomplayer2=Math.floor(Math.random()*6)+1;

if(randomplayer1===randomplayer2){
    console.log("Draw");
    var output=document.querySelector("h1").innerHTML="🚩Draw🚩";
    var fontwin=document.querySelector("h2.p1").style.fontSize="4rem";
    var fontwin2=document.querySelector("h2.p2").style.fontSize="4rem";
    var output1=document.querySelector("img.imgplayer1").setAttribute("src","images/dice"+randomplayer1+".png");
    var output2=document.querySelector("img.imgplayer2").setAttribute("src","images/dice"+randomplayer2+".png");
    return output,output1,output2,fontwin,fontwin2;
}

else if(randomplayer1>randomplayer2){
    var output=document.querySelector("h1").innerHTML="🚩Player1 wins";
    var fontwin=document.querySelector("h2.p1").style.fontSize="4rem";
    var output1= document.querySelector("img.imgplayer1").setAttribute("src","images/dice"+randomplayer1+".png");
    var output2=document.querySelector("img.imgplayer2").setAttribute("src","images/dice"+randomplayer2+".png");
    return output,output1,output2,fontwin;

}

else{
    console.log("Player2 wins"+randomplayer2);
    var output=document.querySelector("h1").innerHTML="Player2 wins🚩";
    var fontwin=document.querySelector("h2.p2").style.fontSize="4rem";
    var output1= document.querySelector("img.imgplayer1").setAttribute("src","images/dice"+randomplayer1+".png");
    var output2=document.querySelector("img.imgplayer2").setAttribute("src","images/dice"+randomplayer2+".png");
    return output,output1,output2,fontwin;

}
}

var output=calnumberrandom();
