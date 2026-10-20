let randomNumber=Math.floor(Math.random()*100)+1;
let Attempts=3;
function press(){
    let guess=parseInt(document.getElementById('display').value);
    Attempts=Attempts-1;
    document.getElementById('Attempts').textContent=Attempts;
    if(guess > randomNumber){
          document.getElementById('Message').textContent="Too High!";
    }
     else if(guess < randomNumber){
          document.getElementById('Message').textContent="Too Low!";
    }
     else{
          document.getElementById('Message').textContent="Correct!";
    }
     if(Attempts<=0 && guess!=randomNumber){
          document.getElementById('Message').textContent="Game Over! Number was" +randomNumber;
    }
}
