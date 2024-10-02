let timer=false; // timer is initially is off 
let second=0;    //second start form zero
let minute=0;    // minute start from zero

function btnStart(){
    timer=true;     // timer is on when click on btnstart button 
    Stopwatch();    // called Stopwatch();

    
}
function btnStop(){
    timer=false;    


}
function btnReset(){
    timer=false;
    document.getElementById("sec").innerHTML="00"; 
    document.getElementById("min").innerHTML="00";   

}

function Stopwatch() {

    if (timer==true) {
        second=second+1;
        document.getElementById ("sec").innerHTML=second;
        setTimeout("Stopwatch()",1000);

        if (second==60) {
            minute=minute+1;
            document.getElementById("min").innerHTML=minute;
            second=0;
            
        }

        
    }

    
}
