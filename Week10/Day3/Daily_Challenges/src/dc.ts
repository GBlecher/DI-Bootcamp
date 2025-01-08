

type User = {
 type: 'user';
 name: string;
 age: number;
};

type Product = {
 type: 'product';
 id: number;
 price: number;
};

type Order = {
 type: 'order';
 orderId: string;
 amount: number;
};




function handleData(array:User[] | Product[] | Order[]): string{
    const messages: string[] = [];


    
    array.forEach(element => {
        if (element.type === 'user') {
            messages.push(`Hello ${element.name}, you are ${element.age} years old.`);
        } else if (element.type === 'product') {
            messages.push(`Item ID: ${element.id} - costs ${element.price} shekels.`);
        } else if (element.type === 'order') {
            messages.push(`Order ID: ${element.orderId} has ${element.amount} products in the order.`);
        } else {
            messages.push(`Unknown data type.`);
        }
    });
    return messages.join('\n')

}
const users: User[] = [{ type: 'user', name: 'Alice', age: 30 }];
const products: Product[] = [{ type: 'product', id: 101, price: 25 }];
const orders: Order[] = [{ type: 'order', orderId: 'ORD123', amount: 3 }];

console.log(handleData(users));
console.log(handleData(products));
console.log(handleData(orders));