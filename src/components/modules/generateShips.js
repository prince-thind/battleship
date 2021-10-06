import state from "./state";
function generateShips(n) {
    state.structures = [];
    for (let i = 0; i < n; i++) {
      const arr = createRandomShip();
      state.structures.push(arr);
    }
  
    function createRandomShip() {
      const random = Math.trunc(Math.random() * 5);
      switch (random) {
        case 0:
          return [
            '1',
            '1',
            '1',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
          ];
        case 1:
          return [
            '1',
            '1',
            '1',
            '1',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
          ];
        case 2:
          return [
            '1',
            '0',
            '0',
            '0',
            '1',
            '0',
            '0',
            '0',
            '1',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
          ];
        case 3:
          return [
            '1',
            '0',
            '1',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
          ];
      }
    }
  }

  export default generateShips;