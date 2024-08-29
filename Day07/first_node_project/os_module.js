//* Retrieving system information:

const os = require("os");

console.log("Operating System: ", os.platform()); //? Operating System:  win32
console.log("Architecture: ", os.arch()); //? Architecture:  x64
console.log("Release: ", os.release()); //? Release:  10.0.19045
console.log("Hostname: ", os.hostname()); //? Hostname:  DESKTOP-QJ9K9DN

//* Getting CPU information:

console.log("Number of CPUs: ", os.cpus().length); //? Number of CPUs:  4
console.log("CPU Model: ", os.cpus()[0].model); //? CPU Model:  Intel(R) Core(TM) i3-4160 CPU @ 3.60GHz
console.log("CPU Speed: ", os.cpus()[0].speed); //? CPU Speed:  3592

//* Checking memory usage:

console.log("Total Memory: ", os.totalmem()); //? Total Memory:  8455245824
console.log("Free Memory: ", os.freemem()); //? Free Memory:  4095643648
console.log(
    "Memory Usage: ",
    (os.totalmem() - os.freemem()) / 1024 / 1024 + "MB" 
); //? Memory Usage:  4065.515625MB

//* Obtaining network interfaces:

console.log("Network Interfaces: ", os.networkInterfaces()); //? object given

//* Finding uptime:

console.log("Uptime: ", os.uptime() + "seconds"); //? Uptime:  9407seconds

//* Getting temprary dictionary path:

console.log("Home Directory: ", os.homedir()); //? Home Directory:  C:\Users\Student_04

//* Checking environment variable:

//console.log("Environment variable: ", os.environ());

//* Creating a temperary file:

const fs = require("fs");
const { log } = require("console");

const tmpFile = os.tmpdir() + "/temp.txt";
fs.writeFileSync(tmpFile, "This is a temporary file.");
console.log("Tempaorary File Created:", tmpFile); //? Tempaorary File Created: C:\Users\STUDEN~1\AppData\Local\Temp/temp.txt

//* Getting currenct user information:

console.log("Current user: ", os.userInfo().username); //? Current user:  Student_04

