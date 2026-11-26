/*
Homework: Vending Machine Change

Write a program to calculate the change to be dispensed from a vending machine.
The machine accepts a single dollar bill. The items in the machine cost between
5 cents and 1 dollar, in 5-cent increments (5, 10, 15, 20, 25, ... 90, 95, or 100).

Example:
Price of item: 35 cents
Display:
You bought an item for 35 cents and gave me a dollar, so your change is:
2 quarter(s)
1 dime(s)
1 nickel(s)
*/

let price = 35; // price of the item in cents (change this to test other prices)

if (price < 5 || price > 100 || price % 5 !== 0) {
  console.log("Invalid price. It must be between 5 and 100 cents, in 5-cent steps.");
} else {
  // The customer pays with one dollar (100 cents)
  let change = 100 - price;

  // Give as many quarters as possible, then dimes, then nickels
  let quarters = Math.floor(change / 25);
  change = change % 25;

  let dimes = Math.floor(change / 10);
  change = change % 10;

  let nickels = Math.floor(change / 5);

  console.log("You bought an item for " + price + " cents and gave me a dollar, so your change is:");
  console.log(quarters + " quarter(s)");
  console.log(dimes + " dime(s)");
  console.log(nickels + " nickel(s)");
}
