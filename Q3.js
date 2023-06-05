// Question 3:
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.




function calculator() {
    var operation = true;
  
    while (operation) {
      var num1 = parseFloat(prompt("Enter the first number:"));
      var num2 = parseFloat(prompt("Enter the second number:"));
      var operator = prompt("Enter the operator (+, -, *, /) or 'q' to quit:");
  
      if (operator === 'q') {
        operation = false;
        console.log("Calculator program terminated.");
        break;
      }
  
      var result;
  
      switch (operator) {
        case '+':
          result = num1 + num2;
          console.log("Result: " + result);
          break;
        case '-':
          result = num1 - num2;
          console.log("Result: " + result);
          break;
        case '*':
          result = num1 * num2;
          console.log("Result: " + result);
          break;
        case '/':
          if (num2 !== 0) {
            result = num1 / num2;
            console.log("Result: " + result);
          } else {
            console.log("Error: Division by zero is not allowed.");
          }
          break;
        default:
          console.log("Error: Invalid operator.");
      }
    }
  }
  
  calculator();


