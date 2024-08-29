const path = require("path");

//*  joining paths
const joinedPath = path.join("directory", "file.txt");
console.log(joinedPath);    // Output: directory\file.txt

//* Get the directory of the file in the path
const dirname = path.dirname("directory/file.txt");
console.log(dirname);   // Output: directory

//* Get the file basename
const basename = path.basename("directory/file.txt");
console.log(basename);  //Output: file.txt

//* Get the file extension
const extname = path.extname("directory/file.txt");
console.log(extname);   //Output: .txt

//* Normalized paths
const normalizedPath = path.normalize("directory/file.txt");
console.log(normalizedPath);    //Output:directory\file.txt

//* Resolving absolute paths
const absolutePath = path.resolve("/directory/file.txt", "file.txt");
console.log(absolutePath);    //Output:C:\directory\file.txt\file.txt

//* Checking if the path is absolute
const isAbsolute = path.isAbsolute("/directory/file.txt");
console.log(isAbsolute);    //Output: true

//* Checking if the path is relative
// const isRelative = path.isRelative("directory/file.txt");
// console.log(isRelative);    //Output: err

//! npm i tmp

//* Creating temporary files
const tmp = require("tmp"); //? Call the tmp module and create a file as tmp

tmp.file((err, path, fd, cleanupCallback) => {
    if (err) throw err;

    // Use temperary file path
    console.log(path);  // Output:C:\Users\STUDEN~1\AppData\Local\Temp\tmp-12852-OC7r9z3qOI5U

    // Clean up the temporary file when done
    cleanupCallback();
});