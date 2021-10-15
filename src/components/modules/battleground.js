import playRound from "./playRound";

const battleGround = {
  player: [],
  enemy: [],
  playerShips: 0,
  enemyShips: 0,
  winner: null,
};

function render() {
  const gameHeading = document.querySelector('#game-heading');
  const playerGrid = document.querySelector('#player-field');
  const enemyGrid = document.querySelector('#enemy-field');

  gameHeading.textContent = 'Player Turn';
  playerGrid.innerHTML='';
  enemyGrid.innerHTML='';
  generateDOMGrid(playerGrid, battleGround.player);
  generateDOMGrid(enemyGrid, battleGround.enemy,'enemy');
  console.log(battleGround);
}

function generateDOMGrid(node, arr,type) {
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const element = document.createElement('div');
      element.classList.add('field-element');
      if (!arr[i][j].empty) {
        element.classList.add('ship-part');
      }
      if (arr[i][j].hit) {
        element.classList.add('ship-hit');
      }
      if(type=='enemy'){
        element.addEventListener('click',playRound);
        element.setAttribute('data-tag',i+''+j);
      }
      
      node.append(element);
    }
  }
}

export { battleGround, render };
