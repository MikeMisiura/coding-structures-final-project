// Global variables
var crust = document.getElementById("crust");
var sauce = document.getElementById("sauce");

// toppings array
var toppings = [

];

// event listener
var formButton = document.getElementById("btn")
btn.addEventListener("click", function(event){
    event.preventDefault();
    var topping1 = document.getElementById("top1").value
    var topping2 = document.getElementById("top2").value
    var topping3 = document.getElementById("top3").value

    toppings = [topping1, topping2, topping3]

    calculateTotal(toppings)
});



function calculateTotal(toppingArray) {
    let total = 0;
    let toppingCost = 2.50;
    let baseCost = 5.50; // cost of crust and sauce

    // order string concatenation


    let toppingString = "Toppings: ";

    // For Loop

    // total = baseCost + cost of all toppings

    // set DOM total += total   
    // use DOM: = orderString   
    // use DOM: = toppingString 
}