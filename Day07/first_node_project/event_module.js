const EventEmitter = require("events");
const myEmmiter = new EventEmitter();

myEmmiter.on("message", (data) => {
    console.log("Recieved message: ", data);
});

myEmmiter.emit("message", "Hello World!");