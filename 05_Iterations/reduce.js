const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc is ${acc} currentvalue is ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curval)=> (acc + curval), 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const cart = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(cart);