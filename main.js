function start() {
    const player1Name = window.prompt("Welcome to battleships, what player 1's name?");
    const player2Name = window.prompt("what player 2's name?");

    const playerOne = new Player(player1Name);
    const playerTwo = new Player(player2Name);

    console.log(`player 1's name is ${playerOne.name}`);
    console.log(`player 2's name is ${playerTwo.name}`);

    playerOne.createBoard();
    playerTwo.createBoard();

    playerOne.placeShips();
    playerTwo.placeShips();
    console.log(playerOne);
}

class Ship {
    constructor(type, location) {
        this.type = type;
        this.location = location;

        switch(type) {
            case "Carrier":
                this.health = 5;
                break;
            case "Battleship":
                this.health = 4;
                break;
            case "Cruiser":
                this.health = 3;
                break;
            case "Submarine":
                this.health = 3;
                break;
            case "Destroyer":
                this.health = 2;
                break;
            default:
                Error("unknown ship");
        }
    }
}

class Player {
    constructor(name) {
        this.name = name;
    }
    createBoard() {
        this.board = new Board()
    }
    placeShips() {
        this.board.placeShips(this.name);
    }
}

class Square {

}

class Board {
    shipTypes = ["Carrier", "Battleship", "Cruiser", "Submarine", "Destroyer"];
    ships = [];
    
    placeShips(name) {
        for (let i = 0; i < this.shipTypes.length; i++) {
            let condition = true;
            while(condition) {
                let shipLocation = window.prompt(`${name} Where would you like to place your ${this.shipTypes[i]}?, example: C5`)

                let re = new RegExp("^([A-Z][0-9])$");
                if (re.test(shipLocation)) {
                    condition = false;
                }
            this.ships.push(new Ship(this.shipTypes[i], shipLocation))
            }
        }
    }
}