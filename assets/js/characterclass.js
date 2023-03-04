export default class CharacterClass {
    constructor({ name, maxVit, maxInt, maxStr, maxDex }) {
        this.name = name;
        this.maxVit = maxVit;
        this.maxInt = maxInt;
        this.maxStr = maxStr;
        this.maxDex = maxDex;
        this.minVit = maxVit / 10;
        this.minInt = maxInt / 10;
        this.minStr = maxStr / 10;
        this.minDex = maxDex / 10;
    }
}

export const characterClasses = [
    new CharacterClass({ name: "Warrior", maxVit: 100, maxInt: 40, maxStr: 90, maxDex: 70 }),
    new CharacterClass({ name: "Mage", maxVit: 100, maxInt: 130, maxStr: 0, maxDex: 70 }),
    new CharacterClass({ name: "Pagan", maxVit: 90, maxInt: 0, maxStr: 130, maxDex: 80 })
];