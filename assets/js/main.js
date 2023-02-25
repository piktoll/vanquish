//import * as game from './game';

/**
 * (C) 2023 SENRIMA TEAM / KARHUT GROUP BT.
 * DEVELOPER: VIKTOR SZRENKA
 * 
 * ALL RIGHTS RESERVED.
 */

window.onload = function () {
    class Sprite {
        constructor({ position, imageSrc }) {
            this.position = position;
            this.image = new Image();
            this.image.src = imageSrc;
        }

        draw() {
            if (!this.image) return
            gameContext.drawImage(this.image, this.position.x, this.position.y);
        }

        update() {
            this.draw();
        }
    }

    class Player {
        constructor(position) {
            this.position = position;
            this.velocity = {
                x: 0,
                y: 1,
            };
            this.height = 100;
            this.movementSpeed = 2;
            this.jumpingPower = 10;
        }

        draw() {
            gameContext.fillStyle = 'red';
            gameContext.fillRect(this.position.x, this.position.y, 100, this.height);
        }

        update() {
            this.draw();

            /*
                Apply velocity to the position
            */
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;

            /*
                Apply gravity unless if we are about to hit the bottom of the canvas
            */
            if (this.position.y + this.height + this.velocity.y < gameCanvas.height)
                this.velocity.y += game.gravity;
            else
                this.velocity.y = 0;

        }
    }

    const gameCanvas = document.querySelector("#canvas");
    const gameContext = gameCanvas.getContext("2d");

    gameCanvas.width = window.innerWidth;
    gameCanvas.height = window.innerHeight;

    const scaleRatio = {
        x: 1.25,
        y: 1.25,
    };

    const scaledCanvas = {
        width: gameCanvas.width / scaleRatio.x,
        height: gameCanvas.height / scaleRatio.y,
    };

    const game = {
        title: 'Vanquish',
        gravity: 0.5,
    };

    const keys = {
        d: {
            pressed: false,
        },
        a: {
            pressed: false,
        },
        w: {
            pressed: false,
        },
        s: {
            pressed: false,
        },
    };

    const player = new Player({ x: 0, y: 0, });
    const background = new Sprite({
        position: {
            x: 0,
            y: 0,
        },
        imageSrc: './assets/img/background.png',
    });

    function animate() {
        window.requestAnimationFrame(animate);

        gameContext.fillStyle = 'white';
        gameContext.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

        gameContext.save();
        gameContext.scale(scaleRatio.x, scaleRatio.y);
        gameContext.translate(0, -background.image.height + scaledCanvas.height);
        background.update();
        gameContext.restore();

        player.update();

        player.velocity.x = 0;
        if (keys.d.pressed)
            player.velocity.x = player.movementSpeed;
        if (keys.a.pressed)
            player.velocity.x = -player.movementSpeed;
        if (keys.w.pressed && player.velocity.y === 0)
            player.velocity.y = -player.jumpingPower;
    }

    animate();

    window.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'a':

                keys.a.pressed = true;
                break;

            case 'd':
                keys.d.pressed = true;
                break;

            case 'w':
                keys.w.pressed = true;
                break;
        }
    });

    window.addEventListener('keyup', function (event) {
        switch (event.key) {
            case 'a':
                keys.a.pressed = false;
                break;

            case 'd':
                keys.d.pressed = false;
                break;

            case 'w':
                keys.w.pressed = false;
                break;

            case 's':
                keys.w.pressed = false;
                break;
        }
    });
}