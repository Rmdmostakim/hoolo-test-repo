const  _ = require('lodash');

export const shipping = (products,city,division) =>{
    if(city === null || division === null){
        return 0;
    }
    let shippingCost = 0;
    const grouped = _.groupBy(products, product => product.product.store_id);
    Object.keys(grouped).forEach(function(key) {
        const products = grouped[key];
        const weight = products.reduce(function(sum, cart) {
            return sum + cart.product.weight*cart.qty;              
           }, 0);
        const storeDiv = products[0].product.store.division;
        const storeCity = products[0].product.store.city;      
        if(storeDiv === division && storeCity === city){
            if(weight <=1){
                shippingCost += 80;
            }else{
                shippingCost += 80+(Math.ceil(weight-1))*30;
            }
        }else if(storeDiv === division && storeCity !== city){
            if(weight <=1){
                shippingCost += 110;
            }else{
                shippingCost += 110+(Math.ceil(weight-1))*30;
            }
        }else{
            if(weight <=1){
                shippingCost += 160;
            }else{
                shippingCost += 160+(Math.ceil(weight-1))*60;
            } 
        }
    });
    return shippingCost;
}

export const buyshipping = (products,city,division) =>{
    const {qty,product} = products;
    const weight = qty*product.weight;
    const storeCity = product.store.city;
    const storeDiv = product.store.division;
    if(city === null || division === null){
        return 0;
    }
    let shippingCost = 0;
    if(storeDiv === division && storeCity === city){
        if(weight <=1){
            shippingCost += 80;
        }else{
            shippingCost += 80+(weight-1)*30;
        }
    }else if(storeDiv === division && storeCity !== city){
        if(weight <=1){
            shippingCost += 110;
        }else{
            shippingCost += 110+(weight-1)*30;
        }
    }else{
        if(weight <=1){
            shippingCost += 160;
        }else{
            shippingCost += 160+(weight-1)*60;
        } 
    }
    return shippingCost;
}
