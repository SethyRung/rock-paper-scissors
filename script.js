const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementsByTagName('h2')[0];

function btn_clicked(e){
    let player = e.target.id;
    let computer = ai_choice();
    check_display(player, computer);
    result.textContent = check_win(player, computer);
}

function ai_choice()
{
    let ai_num = Math.floor(Math.random() * 3) + 1;
    if(ai_num == 1)
        return 'rock';
    else if(ai_num == 2)
        return 'paper';
    else
        return 'scissors';
}

function check_display(player, computer){
    if(player=='rock')
    {
        paper.style.display = 'none';
        scissors.style.display = 'none';
    }
    else if(player=='paper')
    {
        rock.style.display = 'none';
        scissors.style.display = 'none';
    }
    else
    {
        paper.style.display = 'none';
        rock.style.display = 'none';
    }

    document.getElementById('rock-ai').style.display = 'block';
    document.getElementById('paper-ai').style.display = 'block';
    document.getElementById('scissors-ai').style.display = 'block';

    if(computer=='rock')
    {
        document.getElementById('paper-ai').style.display = 'none';
        document.getElementById('scissors-ai').style.display = 'none';
    }
    else if(computer=='paper')
    {
        document.getElementById('rock-ai').style.display = 'none';
        document.getElementById('scissors-ai').style.display = 'none';
    }
    else
    {
        document.getElementById('paper-ai').style.display = 'none';
        document.getElementById('rock-ai').style.display = 'none';
    }
}

function check_win(player, computer){
    if(player == computer){
        return "Draw!";
      }
  
      else if(computer == "rock"){
        return (player == "paper") ? "You Win!" : "You Lose!"
      }
  
      else if(computer == "paper"){
        return (player == "scissors") ? "You Win!" : "You Lose!"
      }
  
      else if(computer == "scissors"){
        return (player == "rock") ? "You Win!" : "You Lose!"
      }
}

rock.addEventListener('click', btn_clicked);
paper.addEventListener('click', btn_clicked);
scissors.addEventListener('click', btn_clicked);