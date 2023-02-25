//import * as game from './game';

window.onload = function () {
    const game = {
        title: 'Vanquish',
        startup: function () {
            const gameCanvas = document.querySelector("#canvas");
            const gameContext = gameCanvas.getContext("2d");

            gameCanvas.width = window.innerWidth;
            gameCanvas.height = window.innerHeight;

            gameContext.beginPath();
            gameContext.rect(0, 0, gameCanvas.width, gameCanvas.height);
            gameContext.fillStyle = "red";
            gameContext.fill();
        },
    };

    game.startup();
}