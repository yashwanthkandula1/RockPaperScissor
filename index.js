function compChoice(){
    let word = ['rock', 'paper', 'scissor'];
    let cc = word[Math.floor(Math.random()*word.length)];
    return cc
}
var e
var l
var r
let pscore = 0;
let cscore = 0;
var oc=0
function decision(c){

    document.getElementById("triangle-set").style.display = "none";
    document.getElementById("win-loose").style.display = "block"
    
    let cc= compChoice()
    if(cc==c){
        e = effect = 1
        console.log("Tie")
        console.log(cc)

    }
    else if(cc=='rock' && c=='paper' || cc=='paper' && c=='scissor'|| cc=='scissor' && c=='rock'){
        e = effect = 'elp-left'
        console.log("You Win")
        console.log(cc)
        pscore++
    }
    else{
        e = effect = 'elp-right'
        console.log("You Lose")
        console.log(cc)
        cscore++
    }
    

    l = 'btn-'+c+'-left'
    r = 'btn-'+cc+'-right'
    console.log(effect)
    if (effect==1) {
        
    } else {
        e=effect
        document.getElementById(effect).style.display = "block"
    }
    document.getElementById(l).style.display = "block"
    document.getElementById(r).style.display = "block"  
    document.getElementById("playagain").style.display = "block"

    if (e=='elp-left') {
        document.getElementById("result").innerText="YOU WIN"
        document.getElementById("againstpc").innerText= "AGAINST PC" 
        document.getElementById("playagain").innerText= "PLAY AGAIN" 
        document.getElementById("player-score").innerText= `${pscore}` 
        
    } else if(e=='elp-right') {
        document.getElementById("result").innerText="YOU LOST"
        document.getElementById("againstpc").innerText= "AGAINST PC"
        document.getElementById("playagain").innerText= "PLAY AGAIN"
        document.getElementById("comp-score").innerText= cscore
    }
    else {
        document.getElementById("result").innerText="TIE UP"
        document.getElementById("playagain").innerText= "REPLAY"
    }
    if(pscore>cscore){
        document.getElementById("next").style.display='inline-block'
    }
    
}




function playAgain(){
    console.log(e+"=e")
    document.getElementById("win-loose").style.display = "none"
    if (e==1) {
        
    } else {
        document.getElementById(e).style.display = "none"
    }
    document.getElementById(l).style.display = "none"
    document.getElementById(r).style.display = "none"  
    document.getElementById("playagain").style.display = "none"

    document.getElementById("triangle-set").style.display = "block";
    document.getElementById("next").style.display='none'
}

function openCloseRules(){
    if (oc==0) {
        document.getElementById("popup-display").style.display='inline-block'
        oc=1
    } else {
        document.getElementById("popup-display").style.display='none'
        oc=0
    }

}

function hurrayDisplay(){ 
    
    document.getElementById("score-tite-box").style.display='none'
    document.getElementById("rules-btn-space").style.display='none'
    document.getElementById("win-loose").style.display='none' 
    document.getElementById("hurray-box").style.display='block' 
    document.getElementById("rules-hurray").style.display='block' 
    
    
}
function playAgainHurray(){
    document.getElementById("score-tite-box").style.display='block'
    document.getElementById("rules-btn-space").style.display='block'
    document.getElementById("win-loose").style.display='block' 
    document.getElementById("hurray-box").style.display='none' 
    document.getElementById("rules-hurray").style.display='none'
}


