// Global variables
let crust = document.getElementById("crust").value;
let sauce = document.getElementById("sauce").value;

// toppings array
let toppings = [];


// console.log(crust)
// console.log(sauce)

// event listener
let formButton = document.getElementById("btn")
btn.addEventListener("click", function (event) {
    event.preventDefault();
    let topping1 = document.getElementById("top1").value;
    let topping2 = document.getElementById("top2").value;
    let topping3 = document.getElementById("top3").value;

    toppings = [topping1, topping2, topping3]
    crust = document.getElementById("crust").value;
    sauce = document.getElementById("sauce").value;
    calculateTotal(toppings)
});



function calculateTotal(toppingArray) {

    let total = 0;
    let toppingCost = 2.50;
    let baseCost = 5.50; // cost of crust and sauce

    // order string concatenation
    let orderString = crust + " pizza with " + sauce;


    let toppingString = "Toppings: ";

    // For Loop
    for (let i = 0; i < toppingArray.length; i++) {
        if ("" != toppingArray[i]) {
            toppingString = toppingString + " "
            toppingString = toppingString + toppingArray[i];
            total = total + toppingCost
        }
    };
    // total = baseCost + cost of all toppings
    total = total + baseCost;

    // set DOM total += total   
    document.getElementById("total").innerHTML = "$" + total
    // using += breaks the line when used twice without refreashing
    // use DOM: = orderString   
    document.getElementById("pizzaOrder").innerHTML = orderString
    // use DOM: = toppingString 
    document.getElementById("toppings").innerHTML = toppingString

    // console.log(crust);
    // console.log(sauce);
    // console.log(toppings);
    // console.log(orderString);
    // console.log(toppingString);
    // console.log(total);
}