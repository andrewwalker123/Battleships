const Ship = require("./main");
const Board = require("./main");
const Square = require("./main");
const Player = require("./main");

describe("Player", () => {
    it("has a name", () => {
        const player = new Player("bob");
        expect(player.name).toEqual("bob");
    });
})