import initState from '../state/initState';
import generateShips from '../ship-selection/generateShips';
import { rendermainGameScreen } from '../../../index';

function deploy() {
  const grid = document.querySelector('#selection-grid');
  initState.structures = generateShips(initState.ships);
  initState.enemyStrucutures = generateShips(initState.ships);
  createGrid();
  createEnemyGrid();

  
  function createEnemyGrid() {
    for (let k = 0; k < initState.enemyStrucutures.length; k++) {
      const random =
        '' + Math.trunc(Math.random() * 5) + Math.trunc(Math.random() * 5);
      const divs = [];
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          const element = {};
          element.id = '' + (+random[0] + i) + (+random[1] + j);
          divs.push(element);
        }
      }
      divs.forEach((div, i) => {
        if (initState.enemyStrucutures[0][i] == 1) {
          initState.enemyGrid[div.id[0]][div.id[1]] = 1;
        }
      });
    }
  }

  function createGrid() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const element = document.createElement('div');
        element.className = 'selection-element';
        element.id = 'E' + i + j;
        element.addEventListener('mouseenter', handleMove);
        element.addEventListener('click', handleMove);
        element.addEventListener('mouseleave', unhighlight);
        grid.append(element);
      }
    }
  }

  function handleMove(e) {
    const target = e.target;
    const start = target.id.slice(1);
    const divs = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const element = grid.querySelector(
          '#E' + (+start[0] + i) + (+start[1] + j)
        );
        divs.push(element);
      }
    }
    if (initState.structures.length != 0) {
      if (e.type == 'click') {
        storeShip(divs);
      } else {
        highLight(divs);
      }
    } else {
      rendermainGameScreen();
    }
  }

  function storeShip(divs) {
    const move = isLegalMove(divs);
    if (!move) return;

    divs.forEach((div, i) => {
      if (initState.structures[0][i] == 1) {
        div.setAttribute('data-permanent', 'true');
        initState.grid[div.id[1]][div.id[2]] = 1;
      }
    });
    initState.structures.shift();

    function isLegalMove(divs) {
      let result = true;
      divs.forEach((div, i) => {
        if (initState.structures[0][i] == 1) {
          if (initState.grid[div.id[1]][div.id[2]] == 1) {
            result = false;
          }
        }
      });
      return result;
    }
  }

  function highLight(divs) {
    divs.forEach((div, i) => {
      if (initState.structures[0][i] == 1) {
        if (div) div.style.backgroundColor = 'white';
      }
    });
  }
  function unhighlight() {
    const divs = [...grid.children];
    divs.forEach((div) => {
      if (!div.getAttribute('data-permanent'))
        div.style.backgroundColor = 'rgb(97, 97, 197)';
    });
  }
}

export default deploy;
