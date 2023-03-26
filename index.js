// Write your solution in this file!
// 1) Declare customerName to be bob in global scope
var customerName = 'bob';

// Write a function that accesses customerName and uppercases it
function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
}

// Write a function that declares a global variable called bestCustomer and assigns it to 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Write a function that overwrites the value of the global variable bestCustomer
function overwriteBestCustomer() {
  // Initialize the variable before overwriting it
  bestCustomer = 'maybe bob';
  bestCustomer = 'maybe bob';
}

// 3) Declare a constant called leastFavoriteCustomer in global scope and assign it an initial value
const leastFavoriteCustomer = 'someone';

// Write a function that attempts to change the value of the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  // This line will throw an error since leastFavoriteCustomer is a constant and cannot be reassigned
  leastFavoriteCustomer = 'someone else';
}

// export variables and functions for testing purposes
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer
};


