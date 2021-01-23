

//  1. Convert kilometer to meter.
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var convertValue = kilometerToMeter(10);
console.log(convertValue);


//  2.This is budget of three electronic devices: 
function budgetCalculator (watch, mobile, laptop){
    var electronics = watch * 50 + mobile * 100 + laptop * 500;
    return electronics;
}

var result = budgetCalculator(1, 1, 1);
console.log(result);
    

// 3. This is a calculation of hotel cost.
function hotelCost(totalDay){
    var totalDay = 10;
    var hotelCost = 0;
    if(totalDay <= 10){
        hotelCost = totalDay * 100;
    }
    else if(totalDay <= 20){
        var firstPart = 10 * 100;
        var remaining = totalDay - 10;
        var secondPart = remaining * 80;
        hotelCost = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = totalDay - 20;
        var thirdPart = remaining * 50;
        hotelCost = firstPart + secondPart + thirdPart;
    }
    return hotelCost;
}

console.log(hotelCost); 

//  4. Find the largest name from the array.
function megaFriend(max){
    var maxAmount = max[0].length;
    var element = max[0];
    for (var i = 1; i < max.length; i++){
        var maximum = max[i].length;
        if (maximum > maxAmount){
            element = max[i];
            maxAmount = maximum;
        }
    }
    return element;
}

console.log(megaFriend(["Nafis", "Muaj", "Nasrin", "Mobasser", "Arnob", "Joy"]));
console.log(megaFriend(["Adib", "Abid", "Abir", "Naim", "Mahi"]));
