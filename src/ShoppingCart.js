// Testing export
const test = function () {
  console.log ("Checking export")
}
module.exports = test


// creating the cart Class

class shopper {
  constructor () {
    this.items = [];
  }
  getItems() {
    console.log (this.items)
    return this.items
  }
  addItem (itemName, quantity, price) {
    const content = {itemName: itemName, quantity: quantity, price: price}
    this.items.push(content)
  }
}

// Testing to check whether an empty cart results in an empty array:
const cart = new shopper
cart.getItems()


// Testing a method to add items
cart.addItem("banana", 10, 3.20)
// console.log (cart.items);
cart.getItems()

//





// cart.getItems()
// module.exports = cart



// 1. You must create a module named `ShoppingCart`. The module must export a `class`! In other words your `module.exports` is not an object, a string, or anything else, but only a class.
// 1. Given a brand new instance of the class in a variable `cart`, calling `cart.getItems()` should return an empty array.
// 1. The class should have a method `cart.addItem(itemName, quantity, price)`, which adds a new item to an internal array.
// 1. After adding items, a call to `cart.getItems()` should return an array that includes the added items.
// 1. Items in the array should be in this format:
//    ```js
//    {
//      name: "Name of the item",
//      quantity: 1,
//      pricePerUnit: 99.99
//    }
//    ```