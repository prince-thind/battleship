import state from './state';
import {battleGround, render} from './battleground';

function main() {
  geneRateBattleGround(state);
  render();
}

function geneRateBattleGround(state) {
  battleGround.player = getGrid(state.grid);
  battleGround.enemy = getGrid(state.enemyGrid);
  battleGround.playerShips = state.ships;
  battleGround.enemyShips = state.ships;
}
function getGrid(arr) {
  const res = getEmptygrid(9);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if(arr[i][j]==1){
            res[i][j].empty=false;
        }
    }
  }
  return res;
}

function getEmptygrid(num) {
  const res = [];
  for (let i = 0; i < num; i++) {
    const temp = [];
    for (let j = 0; j < num; j++) {
      const obj = {};
      obj.hit = false;
      obj.empty = true;
      temp.push(obj);
    }
    res.push(temp);
  }
  return res;
}
export default main;
