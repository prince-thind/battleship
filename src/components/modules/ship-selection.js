import state from './state';
import generateShips from './generateShips';
import { renderMainScreen } from '../..';

function shipSelection() {
  const grid = document.querySelector('#selection-grid');
  generateShips(state.ships);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const element = document.createElement('div');
      element.className = 'selection-element';
      element.id = 'E' + i + j;
      element.addEventListener('mouseenter', highlight);
      element.addEventListener('click', highlight);
      element.addEventListener('mouseleave', unhighlight);
      grid.append(element);
    }
  }

  function highlight(e) {
    const target = e.target;
    const start = target.id.split('E')[1];
    const divs = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const element = grid.querySelector(
          '#E' + (+start[0] + i) + (+start[1] + j)
        );
        divs.push(element);
      }
    }
    if (state.structures.length != 0) {
      divs.forEach((div, i) => {
        if (state.structures[0][i] == 1) {
          if (div) div.style.backgroundColor = 'white';
          if (e.type == 'click') {
            div.setAttribute('data-permanent', 'true');
            state.grid[div.id[1]][div.id[2]] = 1;
          }
        }
      });
      if (e.type == 'click') {
        state.structures.shift();
      }
    } else {
      renderMainScreen();
    }
  }
  function unhighlight() {
    const divs = [...grid.children];
    divs.forEach((div) => {
      if (!div.getAttribute('data-permanent'))
        div.style.backgroundColor = 'rgb(97, 97, 197)';
    });
  }
}

export default shipSelection;
