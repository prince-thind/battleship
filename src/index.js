import './style.css'
import './components/styles/ship-selection.css'
import './components/styles/start-menu.css'
import './components/styles/main-game.css'
import state from './components/modules/state';
import shipSelection from './components/modules/ship-selection';
import main from './components/modules/main';

const shipForm=document.querySelector('#ship-form');
const menuSection=document.querySelector('#start-menu');
const shipSelectionSection=document.querySelector('#ship-selection-menu');
const mainGameScreen=document.querySelector('#main-game');

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

function renderMainScreen() {
    shipSelectionSection.classList.toggle('hidden');
    mainGameScreen.classList.toggle('hidden');
    main();
}

export {renderMainScreen}