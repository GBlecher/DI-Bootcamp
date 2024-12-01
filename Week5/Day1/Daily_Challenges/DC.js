//  Using this object :

let client = "john";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => groceries.fruits.forEach(fruit => {
    console.log(fruit)
});
displayGroceries()

const cloneGroceries = () => {
    user = client
    client = "betty"
    console.log(user)
    let shopping = groceries
    groceries.totalPrice = "35$"
    console.log(shopping)
    groceries.other.paid = false
    console.log(shopping)

};
cloneGroceries()
