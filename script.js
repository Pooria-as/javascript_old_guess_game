
const btn_guess=document.querySelector("#guessBtn")

let RandomNumber=Math.floor(Math.random() * 20)+1
let Game_score=20
let highScore=0
// console.log(RandomNumber);
let finalScore=document.querySelector(".highscore").textContent = highScore


btn_guess.addEventListener('click',()=>{
    const guess_value=Number(document.getElementById("guessInput").value)
    
    if(!guess_value || guess_value > 20 || guess_value < 1)
    {
        alert(" 😶😑لطفا فقط عدد بین 1تا 20 کنید")
    }
    else if(guess_value===RandomNumber)
    {
        alert('بردی')
        document.body.style.backgroundColor='#60b347'
        document.querySelector(".number").textContent=RandomNumber


let lastScore = finalScore + Number(document.querySelector(".score").textContent);
    
document.querySelector(".highscore").textContent =lastScore

        RandomNumber=Math.floor(Math.random() * 20)+1
      
       
    }
    else if(guess_value < RandomNumber)
    {
        if(Game_score <= 1)
        {
          alert('بازی رو باختی')
          Game_score=20
        }
        alert("کمتر از عدد حدس")
        Game_score--
        document.querySelector(".score").textContent =Game_score
    }
    else if(guess_value > RandomNumber)
    {
        if(Game_score <= 1 )
        {
          alert('بازی رو باختی')
          Game_score=20

        }
        alert("بیشتر از عدد حدس")
        Game_score--
        document.querySelector(".score").textContent=Game_score
    }

})
document.querySelector('#btn_again').addEventListener("click",()=>
{
    document.querySelector(".score").textContent=20
    document.body.style.backgroundColor='#cd5c5c'
    document.querySelector(".number").textContent='?'

})
