export default class ItemTier {
    constructor({ name, color }) {
        this.name = name;
        this.color = color;
    }
}

export const itemTiers = [
    new ItemTier({ name: "Common", color: "#eeede7" }),
    new ItemTier({ name: "Uncommon", color: "#f8d210" }),
    new ItemTier({ name: "Special", color: "#8ff517" }),
    new ItemTier({ name: "Rare", color: "#f57d17" }),
    new ItemTier({ name: "Heroic", color: "#f51720" }),
    new ItemTier({ name: "Extraordinary", color: "#1720f5" }),
    new ItemTier({ name: "Phenomenal", color: "#7d17f5" }),
    new ItemTier({ name: "Unique", color: "#dbc39a" })
];