//* generics as an array

function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3;
    return products[myIndex];
}

const getMoreSearchProduct = <T> (products: T[]): T => {
    const myIndex = 4;
    return products[myIndex];
}

getSearchProducts(["Amalya", "Damz"]);
getSearchProducts([1,  2, 3]);