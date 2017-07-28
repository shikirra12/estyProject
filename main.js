// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
let sum = 0

function question1 () {
  // Answer:
  for ( i = 0; i < data.length; i++) {
    sum += data[i].price;
  }
  let avg = sum/data.length;
  console.log("The average price is $" + avg);
}


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD

function question2 () {
  // Answer:
  let range = [];
  for (i = 0; i < data.length; i++) {
    if (data[i].price >= 14 && data[i].price <= 18 ){
      range.push(data[i].title);
    }
  }
console.log(range);
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  for (i = 0; i < data.length; i++){
    if (data[i].currency_code == "GBP"){
      console.log(data[i].title + " costs " + data[i].price + " pounds.");
    }
  }
}


// 4: Display a list of all items who are made of wood.
let hey = [];
function question4 () {
  // Answer:
  for (i = 0; i < data.length; i++){
    for (j = 0; j < data[i].materials.length; j++){
      if (data[i].materials[j] === "wood"){
        hey.push(data[i].title);
    }
  }
}
  console.log(hey);
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
let kitty = [];
function question5 () {
  // Answer:
  for (i = 0; i < data.length; i++){
      if (data[i].materials <= 8){
        kitty.push(data[i].title, data[i].quantity, data[i].materials)
      }
  }
  console.log(kitty);
}


// 6: How many items were made by their sellers?
// Answer:
let item = 0;
function question6 () {
  // Answer:
  for (i = 0; i < data.length; i++){
    if (data[i].who_made == "i_did"){
      item = item + 1;
    }
  }
  console.log(item + " items were made by their sellers.");
}
