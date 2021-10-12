import state from './state';
import battleGround from './battleground';
function main() {
  geneRateBattleGround(state);
  console.log(battleGround);
}

function geneRateBattleGround(state) {
  battleGround.player = getPlayerGrid(state.grid);
  battleGround.enemy = getEnemyGrid(9);
  battleGround.playerShips = state.ships;
  battleGround.enemyShips = state.ships;
}
function getPlayerGrid(arr) {
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
function getEnemyGrid(num) {
  const grid = getEmptygrid(num);
  addEnemyShips(grid);
  return grid;
}
function addEnemyShips(grid) {
  return grid;
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
