import playRound from '../main/playRound';
import renderInfo from './renderInfo';

const battleGround = {
  player: [],
  enemy: [],
  winner: null,
};

function render() {
  const gameHeading = document.querySelector('#game-heading');
  const playerGrid = document.querySelector('#player-field');
  const enemyGrid = document.querySelector('#enemy-field');

  gameHeading.textContent = 'Player Turn';
  playerGrid.innerHTML = '';
  enemyGrid.innerHTML = '';
  generateDOMGrid(playerGrid, battleGround.player);
  generateDOMGrid(enemyGrid, battleGround.enemy, 'enemy');
  if(battleGround.winner){
    gameHeading.textContent=`${battleGround.winner} Won!`;
    unhideEnemy(enemyGrid);
  }
  renderInfo();
}
function unhideEnemy(enemyGrid){
    const hiddenDivs=[...enemyGrid.querySelectorAll('.enemy-hidden')];
    hiddenDivs.forEach(div=>div.classList.remove('enemy-hidden'))
}
function generateDOMGrid(node, arr, type) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const element = document.createElement('div');
      element.classList.add('field-element');
      if (!arr[i][j].empty) {
        element.classList.add('ship-part');
        if (arr[i][j].hit) {
          element.classList.add('ship-hit');
        }
      }
      if (arr[i][j].hit && arr[i][j].empty) {
        element.classList.add('empty-hit');
      }

      if (type == 'enemy') {
        // element.classList.add('enemy-hidden');
        element.addEventListener('click', playRound);
        element.setAttribute('data-tag', i + '' + j);
        if(arr[i][j].empty==0){
          element.classList.add('enemy-hidden');
        }
        
       
      }
      else{
        element.setAttribute('data-player', i + '' + j);

      }

      node.append(element);
    }
  }

  
}

export { battleGround, render };
