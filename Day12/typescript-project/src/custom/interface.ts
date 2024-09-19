interface userNew {
    firstName: String;
    lastName: String;
    marriedState?:boolean;
    readonly card: String|number; // card canbe a String or a number (Union)
}

interface userNew{
    dob?: Date;
}

interface adminUser extends userNew{
    role: "admin"|"superAdmin"
}

// create instances from the interface
const sanuri: userNew = {
    firstName: "Mati",
    lastName: "Sanuri",
    card: "Mati Sanuri"
    
}

const sanuri2:adminUser = {
    role: "admin",
    firstName: "Mati",
    lastName: "Sanuri",
    card: 5
}

// sanuri2.role = "user" --> no role as user