import './style.css'
import './components/styles/start-menu.css'
import {state,setState} from './components/modules/state';

const shipForm=document.querySelector('#ship-form');
const menuSection=document.querySelector('#start-menu');
const shipSelectionSection=document.querySelector('#ship-selection-menu');

shipForm.addEventListener('submit',storeShipInput);

function storeShipInput(e){
    e.preventDefault();
    const shipNumber=e.target.ships.value;
    setState('ships',shipNumber);
    renderSelectionScreen();
}

function renderSelectionScreen() {
    menuSection.classList.toggle('hidden');
    shipSelectionSection.classList.toggle('hidden');
}