const state = {
  ships: 0,
  structures: [],
  grid: generateGrid(),
};

function generateGrid() {
  const arr = [];
  for (let i = 0; i < 9; i++) {
    const tempArr = [];
    for (let j = 0; j < 9; j++) {
      tempArr.push(0);
    }
    arr.push(tempArr);
  }
  return arr;
}
export default state;
