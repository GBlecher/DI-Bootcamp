const products = require('./products.js')
const pruductList =  require('./products.js')

function productSearch(product_name)
{
    const foundProduct = products.find(product =>product.name === product_name)
    if(foundProduct){
        console.log(foundProduct);
    }else{
        console.log(`${product_name} not found`);
    }
}


productSearch("Apple")
productSearch("Yogurt")
productSearch("Beef")