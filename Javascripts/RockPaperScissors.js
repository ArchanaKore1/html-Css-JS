let score=JSON.parse(sessionStorage.getItem('score'));

    if(score===null)
    {
       score={
        wins:0,
        losses:0,
        Ties:0
      }

    } ;  
    
    document.getElementsByClassName("Wins")[0].innerHTML  =`${score.wins}`;
    document.getElementsByClassName("losses")[0].innerHTML=`${score.losses}`;
    document.getElementsByClassName("Ties")[0].innerHTML=`${score.Ties}`;

    function reset(){
        score.wins=0;score.losses=0;score.Ties=0;
        document.querySelector(".Wins").innerHTML ='0';
        document.querySelector(".losses").innerHTML='0';
        document.querySelector(".Ties").innerHTML='0';
    };

    function computerMove()
   { 
    let randomNo=Math.random();
    let pick="";

    if(randomNo >=0 && randomNo<1/3)
        pick='Rock';
    else if(randomNo>=1/3 && randomNo<2/3)
        pick='Paper';
    else if(randomNo>=2/3 && randomNo<1)
        pick='Scissors';
     
     document.getElementsByClassName("computermove")[0].innerHTML=`Computer :<img src="/images/${pick}.PNG">`;
     console.log(`computer picked ${pick}`);
     return pick;
   }
   
   function comparemove(compmove,mymove)
   {  
      console.log(`comp picked:${compmove} & you picked: ${mymove} So`);
      let res="";
     
        if(mymove===compmove)
         { res="It's a tie 😅"; score.Ties++;}
      else if(mymove==='Rock')
      {
           if(compmove==='Paper') 
            {res= "You lost 😢"; score.losses++;}
          else {res= "You won 🎉"; score.wins++;}
      }  
      else if(mymove==='Paper')
      { 
          if(compmove==='Scissors') 
          {res= "You lost 😢"; score.losses++;}
          else {res= "You won 🎉"; score.wins++;}
      }  
      else if(mymove==='Scissors') 
      { 
          if(compmove=='Rock') 
          {res= "You lost 😢"; score.losses++;}
         else {res= "You won 🎉"; score.wins++;}

      }  
      console.log(`${res}`);
      document.getElementsByClassName("computermove")[0].innerHTML+=` <img src="/images/${mymove}.PNG">:You`;
      document.getElementsByClassName("winner")[0].innerHTML=res; 

      // alert(`Wins :${score.wins} , Losses: ${score.losses}, Ties:${score.Ties}`);
      document.getElementsByClassName("Wins")[0].innerHTML =`${score.wins}`;
      document.getElementsByClassName("losses")[0].innerHTML=`${score.losses}`;
      document.getElementsByClassName("Ties")[0].innerHTML=`${score.Ties}`;

      sessionStorage.setItem('score',JSON.stringify(score));
    }