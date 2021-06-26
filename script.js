let uwon = document.querySelector(".uw");
let cwon = document.querySelector(".cw");
    
let userwins=0
let computerwins=0

function playgame(choice){
    
    let computerchoice=''
    let chance=Math.random();
    if(chance<0.333)
      computerchoice='rock'
      else if(chance<0.666)
      computerchoice='scissor'
      else
      computerchoice='paper'

   return computewinner(choice,computerchoice);    

}

function computewinner(userchoice,computerchoice){
    switch(userchoice){
        case 'rock':
            if(computerchoice==='rock')
              {
                  showresult('tie');}
              else if(computerchoice==='paper')
              {   computerwins++;
                  showresult('lose');}
              else
              {   userwins++;
                  showresult('win');}

              break;
        case 'paper':
                if(computerchoice==='rock')
                  {  computerwins++;
                      showresult('lose');}
                  else if(computerchoice==='paper')
                  {showresult('tie');}
                  else
                  {  userwins++;
                      showresult('win');}
    
                  break;
        case 'scissor':
            if(computerchoice==='rock')
              {  computerwins++;
                  showresult('lose');}
              else if(computerchoice==='paper')
              {  userwins++;
                  showresult('win');}
              else
              {showresult('tie');}

              break;
       default:
           alert("something went wrong");
           break;
    }
}

function showresult(x){

    
    if(x==='win')
    {   
        uwon.innerHTML=addon1 + userwins;
        document.querySelector('.res').innerHTML= "You Win";
        document.querySelector('.res').style.background= "#80ee11";
    }
  else if(x=='lose')
    {   cwon.innerHTML=addon2 + computerwins;
        document.querySelector('.res').innerHTML= "Computer win";
        document.querySelector('.res').style.background= "#ff3333";
    }
  else
    {   document.querySelector('.res').innerHTML="It's a tie";
        document.querySelector('.res').style.background= "#ffff00";
    }
   

}

function reset(){

    userwins=0;
    computerwins=0;
    uwon.innerHTML= addon1 + userwins.toString();
    cwon.innerHTML= addon2 + computerwins.toString();
    document.querySelector('.res').innerHTML="";
}

let addon1 = "You won: ";
let addon2 = "Computer won: ";
