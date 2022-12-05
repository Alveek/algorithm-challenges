import products from "./data.js";

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

// переписал решение, потому что выход должен быть без type. Для этого и используется map(). В прошлом решении его не было.

function getSaleItems(data) {
  return data.filter(item => item.type === "sweet").map(candy => ({ item: candy.item, price: candy.price }));
};

const shoppingCart = getSaleItems(products);

console.log(shoppingCart);
