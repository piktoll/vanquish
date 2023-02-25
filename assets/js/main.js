//import * as game from './game';

window.onload = function () {

    class Player {
        constructor(position) {
            this.position = position;
        }

        draw() {
            gameContext.fillStyle = 'red';
            gameContext.fillRect(this.position.x, this.position.y, 100, 100);
        }

        update() {
            this.draw();
            this.position.y++;
        }
    }

    const gameCanvas = document.querySelector("#canvas");
    const gameContext = gameCanvas.getContext("2d");
    gameCanvas.width = window.innerWidth;
    gameCanvas.height = window.innerHeight;

    const game = {
        title: 'Vanquish',

    };

    const player = new Player({ x: 0, y: 0, });

    function animate() {
        window.requestAnimationFrame(animate);
        gameContext.fillStyle = 'darkslategrey';
        gameContext.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        player.update();
    }

    animate();
}