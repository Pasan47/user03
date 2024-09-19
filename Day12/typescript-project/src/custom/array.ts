let myarray: (String | number)[] = [1, 2, "3", "4"]

//?      To check the types for the manipulations

//(e:any) --> can be any type
myarray.map((e: String | number ) => { 
    if ( typeof e === "number"){
        e.toString();
    }
})