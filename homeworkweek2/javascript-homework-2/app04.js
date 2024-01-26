let number = prompt("Please enter the number");
for (number; number > 0; number = (number - (number % 10)) / 10) {
  let result = 0;
  result += number % 10;
}
alert(result);
