window.cheat=function(){
    const enemyGrid=document.querySelector('#enemy-field');
    const hiddenDivs=[...enemyGrid.querySelectorAll('.enemy-hidden')];
    hiddenDivs.forEach(div=>div.classList.add('enemy-cheat'))
}
