import { Type } from "typescript";

function identifyOne (val: boolean | number) : boolean | number {
    return val;
}

function identifyTwo ( val: any) : any {
    return val;
}

// without using union --> generics

function identifyThree<Type> (val: Type) : Type {
    return val;
}

identifyOne(1);
identifyTwo("5");
identifyThree("amalya")