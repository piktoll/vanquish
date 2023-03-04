import CharacterClass from './characterclass.js';
import { characterClasses } from './characterclass.js';
import Character, { dummy } from './character.js';
import GameMap, { gameMaps } from './gamemap.js';
import Enemy, { enemies } from './enemy.js';
import ItemType, { itemTypes } from './itemtype.js';
import ItemTier, { itemTiers } from './itemtier.js';
import Item, { items } from './item.js';

window.onload = function () {
    const game = {
        title: 'RPG',
        desc: 'A Sample Game!',
        year: 2023,
        publisher: 'Senrima Team',
        developer: 'Viktor Szrenka',
        debug: true,
        maxLevel: 99,
        expNeeded: [1, 100, 200, 400, 800, 1500, 2600, 4200, 6400, 9300, 13000, 17600, 23200, 29900, 37800, 47000, 57600, 69700, 83400, 98800, 116000, 135100, 156200, 179400, 204800, 232500, 262600, 295200, 330400, 368300, 409000, 452600, 499200, 548900, 601800, 658000, 717600, 780700, 847400, 917800, 992000, 1070100, 1152200, 1238400, 1328800, 1423500, 1522600, 1626200, 1734400, 1847300, 1965000, 2087600, 2215200, 2347900, 2485800, 2629000, 2777600, 2931700, 3091400, 3256800, 3428000, 3605100, 3788200, 3977400, 4172800, 4374500, 4582600, 4797200, 5018400, 5246300, 5481000, 5722600, 5971200, 6226900, 6489800, 6760000, 7037600, 7322700, 7615400, 7915800, 8224000, 8540100, 8864200, 9196400, 9536800, 9885500, 10242600, 10608200, 10982400, 11365300, 11757000, 12157600, 12567200, 12985900, 13413800, 13851000, 14297600, 14753700, 15219400, 15694800],
        returnTitle: function () {
            return `${this.title} &ndash; ${this.desc}`;
        },
        startGame: function () {
            console.log("Starting game.");
        },
    }

    /* DOM */
    const leftPanelEl = document.querySelector("#options");
    const statusEl = document.querySelector("#status-container");
    const statsEl = document.querySelector("#stats-container");
    const itemEl = document.querySelector("#item-infobox");
    const mapNavEl = document.querySelector("#map-nav");

    function renderMapNav() {
        for (let i = 0; i < gameMaps.length; i++) {
            const mapButton = document.createElement('button');
            mapButton.addEventListener('click', function () {
                warpToMap(dummy, x);
            });
            mapButton.innerHTML = `Warp to ${gameMaps[x].name}`;
            leftPanelEl.appendChild(mapButton);
        }
    }

    function displayUi() {
        console.log('UI displayed.');
    }

    function refreshStats() {
        statusEl.innerHTML = `Health: ${dummy.hp}/${dummy.maxHp}<br>
            Mana: ${dummy.mp}/${dummy.maxMp}<br>
            Experience: ${dummy.exp}/${dummy.maxExp}<br>
            Current Map: ${gameMaps[dummy.currentMap].name}`;

        statsEl.innerHTML = `<b>${dummy.name}</b><br>
            Level ${dummy.level} ${dummy.characterClass.name}<br>
            <br>
            Vitality: ${dummy.vit}<br>
            Intelligence: ${dummy.int}<br>
            Strength: ${dummy.str}<br>
            Dexterity: ${dummy.dex}<br>`;
    }

    function showItemDetails(item) {
        itemEl.style.display = "flex";
        itemEl.innerHTML = `<span style="color: ${item.tier.color};">${item.name}</span><br>
            ${item.tier.name} ${item.type.name}<br>`;
    }

    function hideItemInfoBox() {
        itemEl.style.display = "none";
    }

    function inflictDmg(character, dmg) {
        if (character.hp <= 0) {
            /* decease(character); */
        } else {
            character.hp -= dmg;
        }
        refreshStats();
    }

    function renderTestPanel() {
        if (game.debug) {
            const testOptions = [
                { onClick: function () { inflictDmg(dummy, 10); }, text: 'Inflict Damage' },
                { onClick: function () { levelUp(dummy); }, text: 'Level Up' },
                { onClick: function () { obtainExperience(dummy, 0.1); }, text: 'Get 10% Exp' },
                { onClick: function () { restoreHealth(dummy); }, text: 'Restore HP' },
                { onClick: function () { restoreSanity(dummy); }, text: 'Restore HP/MP' },
                { onClick: function () { kill(dummy); }, text: 'Die' },
                { onClick: function () { showItemDetails(items[2]); }, text: 'Item 3' },
                { onClick: function () { showItemDetails(items[3]); }, text: 'Item 4' },
                { onClick: function () { showItemDetails(items[4]); }, text: 'Item 5' }/*,
                    { onClick: function () {}, text: '' },
                    { onClick: function () {}, text: '' },*/
            ];

            for (testOption of testOptions) {
                const testButton = document.createElement('button');
                testButton.addEventListener('click', testOption.onClick);
                testButton.innerHTML = testOption.text;
                leftPanelEl.appendChild(testButton);
            }
        }
    }

    function obtainExperience(character, amount) {
        if (character.level < game.maxLevel) {
            /*
                ha 1 vagy annál kisebb, százalékként értelmezzük,
                0.1 esetén 10%-nyi tapasztalatot kapunk.
                ha nem, mennyiségként.
            */
            (amount <= 1)
                ? character.exp += game.expNeeded[character.level] * amount
                : character.exp += amount;

            if (character.exp >= character.maxExp) {
                character.level++;
                character.exp = 0;
            }

            character.maxExp = game.expNeeded[character.level];
            refreshStats();
        }
    }

    function attack(attacker, defender) {
        attacker.hp -= (attacker.physicalAtkMin + Math.floor(Math.random() * (attacker.physicalAtkMax - attacker.physicalAtkMin) + 1) - defender.physicalDef) +
            (attacker.fireAtkMin + Math.floor(Math.random() * (attacker.fireAtkMax - attacker.fireAtkMin) + 1) - defender.fireDef);
    }

    function levelUp(character) {
        if (character.level < game.maxLevel) {
            character.level++;
            refreshStats();
        }
    }

    function warpToMap(character, map) {
        character.currentMap = map;
        leftPanelEl.style.background = map.background;
        refreshStats();
    }

    function restoreHealth(character, amount = 1) {
        (amount <= 1)
            ? character.hp += character.maxHp * amount
            : character.hp += amount;
        if (character.hp > character.maxHp)
            character.hp = character.maxHp;
        refreshStats();
    }

    function restoreMana(character, amount = 1) {
        (amount <= 1)
            ? character.mp += character.maxMp * amount
            : character.mp += amount;
        if (character.mp > character.maxMp)
            character.mp = character.maxMp;
        refreshStats();
    }

    function restoreSanity(character, amount = 1) {
        this.restoreHealth(character, amount);
        this.restoreMana(character, amount);
        console.log('Health and Mana recovered.');
    }

    function kill(character) {
        console.log(`${character.name} died.`);
        refreshStats();
    }

    warpToMap(dummy, 0);
    itemEl.style.display = "none";

    refreshStats();
    // renderMapNav();
    renderTestPanel();

    itemEl.innerHTML = 'test';
}