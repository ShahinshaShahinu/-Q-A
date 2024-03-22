// The filter() method-
//  creates a new array with all elements that pass a specific/given condition 
//example :- elements with a value larger than 18:


// oru specific aaya condition pass cheyyunna ella elementsumayi oru puthiya array create cheyyunnu


// it is a higher-order function , it takes a callback function 

const ages = [12, 25, 8, 17, 30, 21];

// it is a higher-order function and callback 

const above18 = ages.filter(function(age){
    if(age>18){
        return age   // return age > 18 
    }
})

console.log(above18)