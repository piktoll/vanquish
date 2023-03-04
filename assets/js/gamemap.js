export default class GameMap {
    constructor({ name, enemies, background, adjacentMaps }) {
        this.name = name;
        this.enemies = enemies; /* Array of enemies that can be encountered in said map. */
        this.background = background;
        this.adjacentMaps = adjacentMaps;
    }
}

export const gameMaps = [
    new GameMap({ name: "Town 1", enemies: [], background: "linear-gradient(green, chocolate)", adjacentMaps: [] }),
    new GameMap({ name: "Town 2", enemies: [], background: "linear-gradient(green, chocolate)", adjacentMaps: [] }),
    new GameMap({ name: "Green Valley", enemies: [], background: "linear-gradient(green, chocolate)", adjacentMaps: [] }),
    new GameMap({ name: "Snowy Mountain", enemies: [], background: "linear-gradient(green, chocolate)", adjacentMaps: [] }),
    new GameMap({ name: "Wasteland", enemies: [], background: "linear-gradient(green, chocolate)", adjacentMaps: [] }),
    new GameMap({ name: "Inferno", enemies: [], background: "linear-gradient(green, chocolate)", adjacentMaps: [] }),
    new GameMap({ name: "Dungeon 1", enemies: [], background: "linear-gradient(green, chocolate)", adjacentMaps: [] }),
    new GameMap({ name: "Dungeon 2", enemies: [], background: "linear-gradient(green, chocolate)", adjacentMaps: [] })
];