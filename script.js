 
 
 var scores , activePlayer , roundScore , activeGame;
// lets initiallise all the score and the roundscore
init();

// lets create the button rolle dice 

   

    document.querySelector('.btn-roll').addEventListener('click' ,function(){

        if (activeGame){
        // create the variable dice first 
        var dice = Math.floor((Math.random() *6) +1 );
    
        // then display the dice 
         document.querySelector('.dice').style.display ='block';
    
         // change the dice value according to the dice random number
    
         document.querySelector('.dice').src ='dice-' + dice +'.png';
         
         // lets add the rounded  value to the current active player score
    
         // lets put the condition on dice number
          
         if (dice !== 1){
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
    
         }
         else{
             nextPlayer();
         }
        }
    });

   
// lets implement the huld up bottun 
        
document.querySelector('.btn-hold').addEventListener('click',function(){

    if(activeGame){
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //document.querySelector('.player-' +activePlayer +'-panel').classList.remove('active');
//now lets check if the active player wonn the game 

if (scores[activePlayer] >= 100){
        // if the current player is the winner 
           // change the propretty of active player to winner 
           
           document.querySelector('#name-' +  activePlayer).textContent ='winner!';
           document.querySelector('.dice').style.display = 'none';
           document.querySelector('.player-' +activePlayer +'-panel').classList.add('winner');
           document.querySelector('.player-' +activePlayer +'-panel').classList.remove('active');
           document.querySelector('#current-0').textContent = 0;
           document.querySelector('#current-1').textContent = 0;
           activeGame = false;

   } else {
        
    //  otherwise its the next player turn 
                      nextPlayer();
   }
}
});
  
// function next player accessible anywhere in the program 

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
     document.querySelector('#current-0').textContent = 0;
     document.querySelector('#current-1').textContent = 0;
     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');
     document.querySelector('.dice').style.display = 'none';

}



 // lets implement the New bottun to the game 
 
 document.querySelector('.btn-new').addEventListener('click' , init);
     // when the button new is click the game is initiallise 
     

function init() {
    scores =[0 , 0];
    roundScore = 0;
    activePlayer = 0;
    activeGame= true;
    document.querySelector('.dice').style.display ='none';
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#name-0').textContent ='player 1';
    document.querySelector('#name-1').textContent ='player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
}

*/
/*
var  scores , rounDscore , activePlayer ,gameOn , maxScore 
,winning ,diceSvalue ,rounDscores,rounDscore1 ;
    
  
 

var lastDice;
init();

document.querySelector('.btn-roll').addEventListener('click' , function(){
    if (gameOn){
            var dice = Math.floor((Math.random() *6) +1 );
            var dice1 = Math.floor((Math.random() *6) +1 );
            
        
        // redisplay the dice on the user interface 
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice1').style.display = 'block';
    //select the dice class and create a new  source based of dice number 
    document.querySelector('.dice').src = 'dice-' + dice +'.png';
    document.querySelector('.dice1').src = 'dice-' + dice1 +'.png';

  diceSvalue = dice1 + dice;

    if(lastDice === 6 && diceSvalue === 6){
      scores[activePlayer] = 0;
      document.querySelector('#score-' +activePlayer).textContent = 0;
       nextPlayer();
    }
    
    // condition: if the random number is one 
    
    else if(dice !==1 && dice1 !==1){
             rounDscore += dice + dice1 ;
           
            document.querySelector('#current-' +  activePlayer).textContent = rounDscore;

        }
     // now upgrade the variable score to the  actif player score
     //document.querySelector('#current-' +  activePlayer).textContent = rounDscore;
    
        else{
            // in case the random number is 1 its the next playr turn 
             nextPlayer();
    
    
        }  
    } 

    lastDice = dice + dice1 ;
});

 function nextPlayer(){
    rounDscore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
 }
 // now lets implement the bottun hold up 

 document.querySelector('.btn-hold').addEventListener('click' , function(){
     if(gameOn){

     
    scores[activePlayer] += rounDscore;
document.querySelector('#score-' +activePlayer).textContent = rounDscore;
document.querySelector('#current-' + activePlayer).textContent = '0';
maxScore = document.querySelector('.finalscore').value;
if (maxScore){
  winning = maxScore;
}
else{
    winning = 100;
}

// lets make sure the current player is not the winner 

     if (scores[activePlayer] >=winning){ 
        document.querySelector('#score-' +activePlayer).textContent = scores[activePlayer];
        document.querySelector('#name-'+ activePlayer).textContent = ('Winner!');
        document.querySelector('.player-'+ activePlayer+'-panel').classList.add('winner');
         document.querySelector('.player-'+ activePlayer+'-panel').classList.remove('active');
         document.querySelector('.dice').style.display = 'none';
         document.querySelector('.dice1').style.display = 'none';
         document.querySelector('#current-' + activePlayer).textContent = '0';
         gameOn = false;
     }
                else{
        
      document.querySelector('#score-' +activePlayer).textContent = scores[activePlayer];
        nextPlayer();
        
     }

    }
         
 });


 document.querySelector('.btn-new').addEventListener('click' , init);
  function init(){

scores = [0,0];
activePlayer = 0;
rounDscore = 0;
gameOn = true;

// first lets initialisee all the score to 0
document.querySelector('#name-0').textContent = ('player 1');
document.querySelector('#name-1').textContent = ('Player 2');
document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice1').style.display = 'none';
document.querySelector('#current-0').textContent = '0' ;
document.querySelector('#current-1').textContent = '0';
document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

  };

*/

/*
 var arr = [1966, 1990 , 1978 ,1999 , 1966];

 function arrCalage(array , func){
       var arrRe = [];
        for( var i = 0; i< arr.length ; i++){
           
           arrRe.push(func(arr[i]));
        }
  return arrRe;
 };
  
 function calculeAge(ta){
     return 2016 - ta;


 }

  var b = arrCalage(arr , calculeAge);
  console.log(b);*/
 


     // how the closer works behind the scene \

     /*
 function retirement(retirementAge){

  var q = 'before your age of retirement';

    return function(yearObirth){
       var age = 2018 - yearObirth;

       console.log((retirementAge - age) +'  ' +q);
    }
 }

  var retirementUe = retirement(65);
   retirementUe(1990);
   

