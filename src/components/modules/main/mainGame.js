import initState from '../state/initState';
import {battleGround, render} from '../state/battleground';

function mainGame() {
  geneRateBattleGround(initState);
  render();
}

function geneRateBattleGround(initState) {
  battleGround.player = getGrid(initState.grid);
  battleGround.enemy = getGrid(initState.enemyGrid);
  battleGround.playerShips = initState.ships;
  battleGround.enemyShips = initState.ships;
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
export default mainGame;
