/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function getCategoryList(transactions) {
  var listOfCategories = [];
  for (var i = 0; i < transactions.length; i++) {
    listOfCategories[i] = transactions[i].category;
  }

  return listOfCategories;
}

function getUniqueCategory(transactions) {

  var listOfCategories = getCategoryList(transactions);

  var uniqueCategory = [];
  let i = 0;
  if (listOfCategories.length > 1) {

    uniqueCategory = listOfCategories.filter((item,
      index) => listOfCategories.indexOf(item) === index);

  } else {

    uniqueCategory = listOfCategories;
  }

  return uniqueCategory;
}


function calculateTotalSpentByCategory(transactions) {
  let categoryList = getUniqueCategory(transactions);
  if (categoryList.length === 0) {
    return [];
  }

  let expenseList = [];
  let i = 0;

  while (i < categoryList.length) {
    var total = 0;
    var categoryItem = categoryList[i];
    for (var j = 0; j < transactions.length; j++) {

      if(categoryItem === transactions[j].category) {
        total = total + transactions[j].price;
      }
    }

    expenseList[i] = {
      category : categoryItem,
      totalSpent : total,
    };

    i++;
  }



  return expenseList;
}

module.exports = calculateTotalSpentByCategory;
