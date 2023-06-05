// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.


var side1 = parseFloat(prompt("Enter the value of side1 :"));
var side2 = parseFloat(prompt("Enter the value of side2 :"));
var side3 = parseFloat(prompt("Enter the value of side3 :"));

if((side1==60 & side2==60 & side3==60) & (side1+side2+side3) ==180 ){
    console.log("The traingle which made by Above side values is said to be  Equilateral Triangle ");
}
else if((side1 == side2 || side2==side3 || side1==side3) & (side1+side2+side3) ==180 ){
    console.log("The traingle which made by Above side values is said to be  Isosceles Triangle ");
    
}
else if ((side1!=side2!=side3) & (side1+side2+side3) ==180 ){
    console.log("The traingle which made by Above side values is said to be  said Scalene Triangle ");
}
else{
    console.log("The above value of sides can not make traingle bcoz the sum of all side value is not between 0 to 180");
}