const EventEmitter = require("events");

class GameRoom extends EventEmitter {
    constructor(roomId) {
        super();
        this.roomId = roomId;
        this.players = [];
    }

    join(player){
        this.players.push(player);
        this.emit("PlayerJoined ", player);
    }

    leave(player){
        const index = this.players.indexOf(player);
        if(index !== -1) {
            this.players.splice(index, 1);
            this.emit("PlayerLeft ", player)
        }
    }
}

//* Create a game room

const room = new GameRoom("room1");

//* Event Listeners
room.on("PlayerJoined ", (player) => {
    console.log(`${player} joined the room `);
});

room.on("PlayerLeft ", (player) => {
    console.log(`${player} left the room `);
});

//* Players join and leave the room
room.join("Player 1");
room.join("Player 2");
room.leave("Player 1");
