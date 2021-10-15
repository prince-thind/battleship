import { battleGround, render } from "./battleground";

function playRound(e) {
    const target=e.target;
    const [i,j]=target.getAttribute('data-tag').split('');
    battleGround.enemy[i][j].hit=true;
    render();

}

export default playRound;