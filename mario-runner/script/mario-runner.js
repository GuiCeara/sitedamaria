// botão-start

const mariobtn = document.querySelector('.mario');
const pipebtn = document.querySelector('.pipe');


const start = () => {


    document.getElementById("btnstart").style.display = 'none';

    setTimeout(() => {

        mariobtn.classList.remove('mario');
        pipebtn.classList.remove('pipe');

        mariobtn.classList.add('marioStart');
        pipebtn.classList.add('pipeStart');

    }, 0);

    // Animações

    let mario = document.getElementById('marioStart');
    let pipe = document.getElementById('pipeStart');
    let clouds = document.getElementById('clouds');
    
    const jump = () => {
        mario.classList.add('jump');

        setTimeout(() => {

            mario.classList.remove('jump');

        }, 500);
    }

    // Restart Game

    function addButon() {

        document.getElementById("btnstart").style.display = 'block';

        document.getElementById("btnstart").onclick = function () {
            location.reload();
        }

    }

    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloudsPosition = clouds.offsetLeft;

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 83) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = 'IMGmario/game-over.png';
            mario.style.width = '75px'
            mario.style.marginLeft = '50px'
            addButon();

            clouds.style.animation = 'none';
            clouds.style.left = `${cloudsPosition}px`;


            clearInterval(loop)

        }

    }, 10);

    window.addEventListener('keydown', jump);

}


function comecar() {
    start();
    start();
}

function addEventos() {

    document.getElementById("btnstart").addEventListener("click", comecar);

}


if (start) {
    document.getElementById("btnstart").addEventListener("click", comecar);
}

window.addEventListener("load", addEventos);