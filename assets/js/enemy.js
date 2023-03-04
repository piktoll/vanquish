export default class Enemy {
        constructor({ name, experience, dropItem, dropQty, dropChance }) {
            this.name = name;
            this.experience = experience;
            this.dropItem = dropItem;
            this.dropQty = dropQty;
            this.dropChance = dropChance;
        }
}
