import { count } from "console";

//* generics as a single attribute variable 

class human {
    private _bloodCount: number = 1;

    constructor(
        public email: String,
        name: String,
        private userId: String
    ) {}

    get getAppleEmail(): String {
        return "amalya@gmail.com";
    }
    get getBloodCount(): number {
        return 100;
    }

    set setBloodCount (count: number) {
        this._bloodCount = count;
    }
    
}