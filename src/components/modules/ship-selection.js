function shipSelection() {
  const grid = document.querySelector('#selection-grid');

  for (let i = 0; i < 81; i++) {
    const element = document.createElement('div');
    element.className = 'selection-element';
    grid.append(element);
  }
}

export default shipSelection;