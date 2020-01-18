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

// Exporting the shopper class
module.exports = shopper

// Testing to check whether an empty cart results in an empty array:
const cart = new shopper
cart.getItems()

// Testing a method to add items
cart.addItem("banana", 10, 0.80)
// console.log (cart.items);
cart.getItems()

// method call to clear the cart.
cart.clear()
// check whether getItems results in an empty array.
cart.getItems()

// method call to calculate total cart checkout value
cart.total()
