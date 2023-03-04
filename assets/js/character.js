import CharacterClass, { characterClasses } from './characterclass.js';

export default class Character {
    constructor({ name, characterClass }) {
        this.name = name;
        this.characterClass = characterClasses[characterClass];

        this.vit = characterClasses[characterClass].minVit;
        this.int = characterClasses[characterClass].minInt;
        this.str = characterClasses[characterClass].minStr;
        this.dex = characterClasses[characterClass].minDex;

        this.level = 1;
        this.exp = 0;
        this.maxExp = 1;
        this.maxHp = this.vit * 20;
        this.hp = this.maxHp;
        this.maxMp = this.int * 5;
        this.mp = this.maxMp;
        this.currentMap = 0;
    }
}

export const dummy = new Character({ name: "Fred", characterClass: 0 });