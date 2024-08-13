 // This is about callbacks, promises and async - await functions

 //! Asynchronous programming
 let pizza;
 console.log("I am hungry");
 console.log("Order pizza");

 function makePizza(){
    setTimeout(() => {
        pizza ="cheese pizza";
        console.log("pizza is ready");
        console.log(`eat ${pizza}`);
    }, 5000);
 }


 makePizza();
 console.log(`eat ${pizza}`);


 //! Callback functions
 function orderPizza(Callback){
    setTimeout(() => {
        pizza = "onion";
        console.log("Pizza is ready");
        Callback(pizza);
    }, 5000);
 }

 function eatPizza(pizza){
    console.log(`eat ${pizza}`);
 }
 orderPizza(eatPizza);

 //! Promise function
const promise1 = new Promise((resolved, reject) => {
    setTimeout(() => {
        console.log("I'm hungry");
        resolved({secretId: "Pizza"});
        reject(new Error("not working"));
    }, 3000)
});
// call the promise

promise1.then(
    result => console.log(result)
).catch(
    error => console.log(error)
);

//! Async - await

const apiURL = 'https://api.lyrics.ovh';



async function searchSongs(term){
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();

    console.log(res);
    console.log(data);
}

searchSongs("never")
  