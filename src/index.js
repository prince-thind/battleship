import './style.css'
import './components/styles/ship-selection.css'
import './components/styles/start-menu.css'
import shipSelection from './components/modules/ship-selection';
import state from './components/modules/state';

const shipForm=document.querySelector('#ship-form');
const menuSection=document.querySelector('#start-menu');
const shipSelectionSection=document.querySelector('#ship-selection-menu');

shipForm.addEventListener('submit',storeShipInput);

function storeShipInput(e){
    e.preventDefault();
    const shipNumber=e.target.ships.value;
    state.ships=shipNumber;
    renderSelectionScreen();
}

function renderSelectionScreen() {
    menuSection.classList.toggle('hidden');
    shipSelectionSection.classList.toggle('hidden');
    shipSelection();
}