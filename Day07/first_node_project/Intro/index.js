const message = "august";

//console.log(document); //? Giving as  document is not defined, Bcs it belogs to browser

//console.log(global);  //?Giving and global object

//console.log(global.message); //? Giving as undifind because message is belongs to the index file, not for global object

//console.log(module);  //? Giving a module object with empty export{}

//module.exports = message;
//console.log(module); // ? The message is exports in the exports object



//* sending multiple values to the object
const course = "fullstack";

module.exports.message = message;
module.exports.course = course;
console.log(module); //? Giving the output as this -> exports: { message: 'august', course: 'fullstack' }, 

//console.log(module.exports.course); //? Giving as fullstack
