export default class ItemType {
    constructor({ name, ifStackable }) {
        this.name = name;
        this.ifStackable = ifStackable;
    }
}

export const itemTypes = [
    new ItemType({ name: "Consumable", ifStackable: true }),
    new ItemType({ name: "Sword", ifStackable: false }),
    new ItemType({ name: "Sabre", ifStackable: false }),
    new ItemType({ name: "Wand", ifStackable: false }),
    new ItemType({ name: "Rod", ifStackable: false }),
    new ItemType({ name: "Glaive", ifStackable: false }),
    new ItemType({ name: "Blade", ifStackable: false }),
    new ItemType({ name: "Ring", ifStackable: false }),
    new ItemType({ name: "Armor", ifStackable: false }),
    new ItemType({ name: "Helmet", ifStackable: false }),
    new ItemType({ name: "Accessory", ifStackable: false }),
    new ItemType({ name: "Misc", ifStackable: true })
];