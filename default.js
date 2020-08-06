function add(num1 = 0, num2 = 0 ){  // es-6 er niyom, number provide na korle 0 dhore nibe. 
    // if(num2 == undefined){  // pracin niyom
    //     num2 = 0; 
    // }
    // num2 = num2 || 0; // notun niyom
    return num1 + num2;
}
const total1 = add(15,17);
console.log(total1);
const total2 = add(15);
console.log(total2);

// ei process ta ke bole backup e rakha. jodi parameter e man na dei, tokhon function ei man ta diye kaj calabe.. 