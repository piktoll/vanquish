export default class Enemy {
    constructor({ name, experience, dropItem, dropQty, dropChance }) {
        this.name = name;
        this.experience = experience;
        this.dropItem = dropItem;
        this.dropQty = dropQty;
        this.dropChance = dropChance;
    }
}

export const enemies = [
    new Enemy({ name: 'Dummy Orc', experience: 50, dropItem: [], dropQty: 1, dropChance: 0.5 })
];