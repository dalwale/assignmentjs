// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354


function calculateElectricityBill(units) {
    var totalBill = 0;
  
    if (units <= 50) {
      totalBill = units * 0.5;
    } else if (units <= 150) {
      totalBill = 50 * 0.5 + (units - 50) * 0.75;
    } else if (units <= 250) {
      totalBill = 50 * 0.5 + 100 * 0.75 + (units - 150) * 1.2;
    } else {
      totalBill = 50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (units - 250) * 1.5;
    }
  
    // Calculate surcharge
    var surcharge = totalBill * 0.2;
    totalBill += surcharge;
  
    return "Total Units: " + units + "\n" +
           "Total Bill: INR " + totalBill.toFixed(2);
  }
  
  // Example usage
  var units = 300;
  var bill = calculateElectricityBill(units);
  console.log(bill);