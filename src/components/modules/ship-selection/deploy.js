import initState from '../state/initState';
import generateShips from './generateShips';
import { createGrid, createEnemyGrid } from './createGrid';

function deploy() {
  const grid = document.querySelector('#selection-grid');
  initState.structures = generateShips(initState.ships);
  initState.enemyStrucutures = generateShips(initState.ships);
  createGrid(grid);
  createEnemyGrid();
}

export default deploy;
