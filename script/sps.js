
let uwins=0
let cwins=0

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

function computewinner(uchoice,cchoice){
    switch(uchoice){
        case 'rock':
            if(cchoice==='rock')
              {showresult('tie');}
              else if(cchoice==='paper')
              {  cwins++;
                  showresult('lose');}
              else
              {  uwins++;
                  showresult('win');}

              break;
        case 'paper':
                if(cchoice==='rock')
                  {  cwins++;
                      showresult('lose');}
                  else if(cchoice==='paper')
                  {showresult('tie');}
                  else
                  {  uwins++;
                      showresult('win');}
    
                  break;
        case 'scissor':
            if(cchoice==='rock')
              {  cwins++;
                  showresult('lose');}
              else if(cchoice==='paper')
              {  uwins++;
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
   console.log("showresult")
    if(x==='win')
    {   
            document.getElementById('uw').innerHTML=uwins;
        document.getElementById('res').innerHTML="You Win";}
  else if(x=='lose')
    {  document.getElementById('cw').innerHTML=cwins;
      document.getElementById('res').innerHTML="Computer win";}
  else
  {document.getElementById('res').innerHTML="It's a tie";
  document.body.style.backgroundColor = "cyaan";}
   

}

function reset(){
    uwins=0;
    cwins=0;
    document.getElementById('uw').innerHTML=uwins;
    document.getElementById('cw').innerHTML=cwins;
    document.getElementById('res').innerHTML="...";
    
}

