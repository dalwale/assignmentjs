// // Question 2:
// // var enteredAlphabet = 'd' or "D"
// // Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.



var enteredAlphabet = '98';

switch (enteredAlphabet.toLowerCase()) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log(enteredAlphabet + " is a vowel.");
    break;
  case 'b':
  case 'c':
  case 'd':
  case 'f':
  case 'g':
  case 'h':
  case 'j':
  case 'k':
  case 'l':
  case 'm':
  case 'n':
  case 'p':
  case 'q':
  case 'r':
  case 's':
  case 't':
  case 'v':
  case 'w':
  case 'x':
  case 'y':
  case 'z':
    console.log(enteredAlphabet + " is a consonant.");
    break;
  default:
    console.log(enteredAlphabet + " is not an alphabet.");
}
