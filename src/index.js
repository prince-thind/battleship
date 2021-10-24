import './components/styles/style';
import initState from './components/modules/state/initState';
import deploy from './components/modules/ship-selection/deploy';
import mainGame from './components/modules/main/mainGame';
import '../src/components/modules/misc/cheat'

const shipForm=document.querySelector('#ship-form');
const menuSection=document.querySelector('#start-menu');
const deploySection=document.querySelector('#deploy-menu');
const mainGameGameScreen=document.querySelector('#main-game');

shipForm.addEventListener('submit',storeShipInput);

function storeShipInput(e){
    e.preventDefault();
    const shipNumber=e.target.ships.value;
    initState.ships=shipNumber;
    renderDeployScreen();
}

function renderDeployScreen() {
    menuSection.classList.toggle('hidden');
    deploySection.classList.toggle('hidden');
    deploy();
}

function rendermainGameScreen() {
    deploySection.classList.toggle('hidden');
    mainGameGameScreen.classList.toggle('hidden');
    mainGame();
}

export {rendermainGameScreen}