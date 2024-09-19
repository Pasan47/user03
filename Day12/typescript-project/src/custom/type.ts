type user = {
    email: String;
    userId: number;
}

const amalya : user = { email: "amalya@gmail.com", userId:1}

//! const amalya : user = { email: "amalya@gmail.com", userId:1, option : 1}
// Cannot add another apotion without defining

type user2 = {
    readonly age: number;
    email: String;
    userId: number;
    marriageStatus ?: boolean; // optional
}

 const amalya2 : user2 = { age: 14, email: "amalya@gmail.com", userId:1}
 amalya2.userId = 3;
 //! amalya2.age = 15;
// Cannot change the age bcs its readonly

