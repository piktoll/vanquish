import ItemType, { itemTypes } from './itemtype.js';
import ItemTier, { itemTiers } from './itemtier.js';

export default class Item {
    constructor({ name, type, quantity, tier }) {
        this.name = name;
        this.type = itemTypes[type];
        this.quantity = quantity;
        this.tier = itemTiers[tier];
    }
}

export const items = [
    new Item({ name: "Dummy Sword", type: 1, quantity: 1, tier: 1 }),
    new Item({ name: "Dumb Dummy Saber", type: 2, quantity: 1, tier: 2 }),
    new Item({ name: "Dummy Wand", type: 3, quantity: 1, tier: 3 }),
    new Item({ name: "Dummy Bear Blade", type: 5, quantity: 1, tier: 4 }),
    new Item({ name: "Dummy Ring", type: 7, quantity: 1, tier: 5 }),
    new Item({ name: "Dummy Helmet", type: 9, quantity: 1, tier: 6 }),
    new Item({ name: "Dummy Accessory", type: 1, quantity: 1, tier: 7 })
];

export const dummyWeapon = new Item({ name: "Dummy Sword", type: 1, quantity: 1, tier: 5 });