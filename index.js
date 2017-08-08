const inquirer = require('inquirer');
const columnify = require('columnify');
const config = require('./config');
const mysql = require('mysql');


const connection = mysql.createConnection(config);

const products = require('./app/bamazonCustomer')(connection);

var questions = [
  {
    type: 'input',
    name: 'productId',
    message: 'What\'s the id of the product you want to buy?',
  },
  {
    type: 'input',
    name: 'quantityToBuy',
    message: 'How much of it do you want to buy?',
  },
];

connection.connect(function(err){
  if(err) throw err;
  console.log(`Connection successful on thread ${connection.threadId}`);
});

products.getAllProducts().then(function(results) {
  var itemsListingString = columnify(results);
  console.log(itemsListingString);
  inquirer.prompt(questions).then(function (answers) {
    console.log(answers);
    products.checkQty(answers.productId, answers.quantityToBuy);
    // Do stuff with the id and quantity
  });
});
