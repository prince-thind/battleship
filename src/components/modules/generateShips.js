function generateShips(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    const arr = createRandomShip();
    res.push(arr);
  }
  return res;
}

function createRandomShip() {
  const random = Math.trunc(Math.random() * 3 + 2);
  const arr = Array(16).fill(0);
  if (Math.random() * 2 > 1) {
    for (let i = 0; i < random; i++) {
      arr[i] = 1;
    }
  }
  else{
    for (let i = 0,j=0; i < random; i++,j+=4) {
      arr[j] = 1;
    }
  }

  return arr;
}
export default generateShips;
