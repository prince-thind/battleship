import {battleGround} from './battleground';

function renderInfo(){
    const playerChunksDiv=document.querySelector('#player-chunks');
    const enemyChunksDiv=document.querySelector('#enemy-chunks');

    const playerChunks=findChunks('player');
    const enemyChunks=findChunks('enemy');
    playerChunksDiv.textContent=playerChunks;
    enemyChunksDiv.textContent=enemyChunks;
}

function findChunks(target){
    const grid=target=='player'?battleGround.player:battleGround.enemy;
    let chunks=0;
    for(const arr of grid){
        for(const element of arr){
            if(!element.hit && !element.empty){
                chunks++;
            }
        } 
    }
    return chunks;
}

export default renderInfo;