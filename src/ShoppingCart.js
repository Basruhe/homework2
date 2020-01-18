// Assignment 1
// Creating the cart Class

class shopper {
  constructor () {
    this.items = [];
  }
  getItems() {
    // console.log (this.items)
    return this.items
  }
  addItem (itemName, quantity, price) {
    const content = {name: itemName, quantity: quantity, pricePerUnit: price}
    this.items.push(content)
  }
  clear () {
    // console.log ("Cart content before clearing", this.items);
    while (this.items.length > 0) {
      this.items.pop();
      // console.log("Cart content after clearing: ",this.items);
       return this.items
    }
  }
  total() {
    const full=this.items;
    // console.log ("These are the contents of your shopping cart: ", full);
    const checkout = full.reduce(function(acc, entry){
      return acc + entry.pricePerUnit * entry.quantity
    },0);
    // console.log ("This is your total price: ", checkout);
      return checkout
  } 
}

// exporting the shopper class
module.exports = shopper

// Testing to check whether an empty cart results in an empty array:
const cart = new shopper
cart.getItems()

// Testing a method to add items
cart.addItem("banana", 10, 0.80)
// console.log (cart.items);
cart.getItems()

// Testing a method to clear the item array
// const testShopper = [1, 2, 3, 4]
// console.log (testShopper)
//   while (testShopper.length > 0) {
//     testShopper.pop();
//     console.log ("Contents of the shopper after clearing:", testShopper)
//   }

// method call to clear the cart.
cart.clear()
// check whether getItems results in an empty array.
cart.getItems()


// testing map method
cart.addItem("banana", 10, 0.80);
cart.addItem("pear", 6, 1.10);
const fullcart = cart.items;
// console.log (fullcart);
// there are now 2 items in the cart
// desired output: the added value of each items' price*quantity

// const itemvalues = fullcart.map(function(itemvalue) {
//   console.log ("check", itemvalue.price);
//   return itemvalue.price * itemvalue.quantity
// })
// console.log (itemvalues)
// const checkout = itemvalues.reduce(function(acc, value) {
//   return acc + value
// },0)
// console.log (checkout)

// const checkout = fullcart.reduce(function(acc,fullcart){
//   return acc + fullcart.price * fullcart.quantity
// },0)
// console.log (checkout);

// method call to calculate total cart checkout value
cart.total()
