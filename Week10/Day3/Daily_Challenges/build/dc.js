"use strict";
function handleData(array) {
    const messages = [];
    array.forEach(element => {
        if (element.type === 'user') {
            messages.push(`Hello ${element.name}, you are ${element.age} years old.`);
        }
        else if (element.type === 'product') {
            messages.push(`Item ID: ${element.id} - costs ${element.price} shekels.`);
        }
        else if (element.type === 'order') {
            messages.push(`Order ID: ${element.orderId} has ${element.amount} products in the order.`);
        }
        else {
            messages.push(`Unknown data type.`);
        }
    });
    return messages.join('\n');
}
const users = [{ type: 'user', name: 'Alice', age: 30 }];
const products = [{ type: 'product', id: 101, price: 25 }];
const orders = [{ type: 'order', orderId: 'ORD123', amount: 3 }];
console.log(handleData(users));
console.log(handleData(products));
console.log(handleData(orders));
