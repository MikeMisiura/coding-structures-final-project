// Global variables
let crust;
let sauce;
let deliveryMethod;
let state;
let tip;
let paymentMethod;
let deliveryFee;
let processingFee;


// toppings array
let toppings = [];
let toppingString;

//sales tax rates
const CATax = 7.25;
const IDTax = 6;
const MTTax = 0;
const NVTax = 6.85;
const ORTax = 0;
const UTTax = 5.95;
const WATax = 6.5;
const WYTax = 4;

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
    deliveryMethod = document.getElementById("deliveryMethod").value;
    state = document.getElementById("state").value;
    tip = document.getElementById("tip").value;
    paymentMethod = document.getElementById("paymentMethod").value;

    tip = Number(tip)

    calculateTotal()
});

function calculateTotal() {
console.log(paymentMethod)
    let total = 0;

    let subtotal =
        calculateSubtotal();

    if (deliveryMethod = "Delivery") {
        deliveryFee = 6;
    } else {
        deliveryFee = 0;
    };

    tax = calculateTax(subtotal);

    let sub2 = subtotal + deliveryFee + tax + tip;

    processingFee = calculateProcessingFee(sub2);

    total = sub2 + processingFee;

    subtotal = subtotal.toFixed(2);
    deliveryFee = deliveryFee.toFixed(2);
    tax = tax.toFixed(2);
    tip = tip.toFixed(2);
    processingFee = processingFee.toFixed(2);
    total = total.toFixed(2);

    print(subtotal, total)
}

function calculateSubtotal(toppingArray) { //return subtotal and set toppingString

    let subtotal = 0;

    let toppingCost = 2.50;
    let baseCost = 5.50; // cost of crust and sauce

    toppingString = "Toppings: ";

    // For Loop Toppings
    for (let i = 0; i < toppings.length; i++) {
        if ("None" != toppings[i]) {
            toppingString = toppingString + " " + toppings[i];
            subtotal = subtotal + toppingCost
        }
    };

    subtotal = subtotal + baseCost;
    return (subtotal)
};

function calculateTax(subtotal) {

    let taxrate;

    if (state == "CA") { taxrate = CATax }
    if (state == "ID") { taxrate = IDTax }
    if (state == "MT") { taxrate = MTTax }
    if (state == "NV") { taxrate = NVTax }
    if (state == "OR") { taxrate = ORTax }
    if (state == "UT") { taxrate = UTTax }
    if (state == "WA") { taxrate = WATax }
    if (state == "WY") { taxrate = WYTax }

    let salesTax = subtotal * taxrate * .01;

    return salesTax
}

function calculateProcessingFee(sub2) {
    if (paymentMethod == "credit") {
        processingFee = sub2 * .03

        return processingFee
    }
    return 0
}

function print(subtotal, total) {
    // order string concatenation
    let orderString = crust + " pizza with " + sauce + ".";
    // use DOM: = orderString   
    document.getElementById("pizzaOrder").innerHTML = orderString
    // use DOM: = toppingString 
    document.getElementById("toppings").innerHTML = toppingString

    // set DOM total += total   
    document.getElementById("total").innerHTML = "$" + total
    document.getElementById("subtotal").innerHTML = "Subtotal: $" + subtotal
    document.getElementById("salesTax").innerHTML = "Sales Tax: $" + tax
    document.getElementById("deliveryFee").innerHTML = "Delivery Fee: $" + deliveryFee
    document.getElementById("tipThankYou").innerHTML = "Tip (Thank You!): $" + tip
    document.getElementById("processingFee").innerHTML = "Credit Card Processing Fee: $" + processingFee
    // using += breaks the line when used twice without refreashing

}