//1.
var num1 = 20;
var num2 = 40;
var result = num1 + num2;
document.writeln(
  "<h1>Sum of " + num1 + " and " + num2 + " is " + result + "</h1>",
);

//2.
var result = num1 - num2;
document.writeln(
  "<h1>Subtraction of " + num1 + " and " + num2 + " is " + result + "</h1>",
);
var result = num1 * num2;
document.writeln(
  "<h1>Multiplication of " + num1 + " and " + num2 + " is " + result + "</h1>",
);
var result = num1 / num2;
document.writeln(
  "<h1>Division of " + num1 + " and " + num2 + " is " + result + "</h1>",
);

//3.
var num1;
document.writeln("<h1>Value after variable declaration is: " + num1 + "</h1>");
var num1 = 20;
document.writeln("<h1>Initial value: " + num1 + "</h1>");
num1++;
document.writeln("<h1>Value after increment is: " + num1 + "</h1>");
num1 = num1 + 7;
document.writeln("<h1>Value after addition is: " + num1 + "</h1>");
num1--;
document.writeln("<h1>Value after decrement is: " + num1 + "</h1>");
var remainder = num1 % 3;
document.writeln("<h1>The remainder is: " + remainder + "</h1>");

//4.
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.writeln(
  "<h1>Total cost to buy 5 tickets to a movie is " + totalCost + " PKR</h1>",
);

//5.
var tableOf = 12;
document.writeln("<h1>Table of " + tableOf + "</h1>");
for (var i = 1; i <= 10; i++) {
  document.writeln(tableOf + "X" + i + "=" + tableOf * i + "<br>");
}

//6.
var celsiusValue = 25;
var fahrenheitValue = (celsiusValue * 9) / 5 + 32;
console.log(fahrenheitValue, celsiusValue);
document.writeln(
  "<h1>" + celsiusValue + "°C is " + fahrenheitValue + "°F</h1>",
);
var fahrenheitValue = 70;
var celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
document.writeln(
  "<h1>" + fahrenheitValue + "°F is " + celsiusValue + "°C</h1>",
);

//7.
var item1Price = 650;
var item2Price = 100;
var item1Quantity = 3;
var item2Quantity = 7;
var shippingCharges = 100;
var totalCost =
  item1Price * item1Quantity + item2Price * item2Quantity + shippingCharges;
document.writeln("<p>Price of item 1 is " + item1Price + " PKR</p>");
document.writeln("<p>Price of item 2 is " + item2Price + " PKR</p>");
document.writeln("<p>Quantity of item 1 is " + item1Quantity + "</p>");
document.writeln("<p>Quantity of item 2 is " + item2Quantity + "</p>");
document.writeln("<p>Shipping Charges " + shippingCharges + " PKR</p>");
document.writeln("<h1>Total cost of your order is " + totalCost + " PKR</h1>");

//8.

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.writeln("<h1>Total Marks: " + totalMarks + "</h1>");
document.writeln("<h1>Marks Obtained: " + marksObtained + "</h1>");
document.writeln("<h1>Percentage: " + percentage + "%</h1>");

//9.
var usDollars = 10;
var saudiRiyals = 25;
var pkrFromDollars = usDollars * 104.8;
var pkrFromRiyals = saudiRiyals * 28;
var totalPkr = pkrFromDollars + pkrFromRiyals;
document.writeln("<h1>Total Currency in PKR: " + totalPkr + "</h1>");

//10.
var num1 = 10;
var num1 = ((num1 + 5) * 10) / 2;

// 11;
var currentYear = 2026;
var birthYear = 2006;
var posibleAge = currentYear - birthYear;
document.writeln("<h1>Age Calculator</h1>");
document.writeln("<p>Current Year: " + currentYear + "</p>");
document.writeln("<p>BirthYear Year: " + birthYear + "</p>");
document.writeln("<p>Your Age: " + posibleAge + "</p>");

//12.
var radius = 20;
var circumference = 2 * 3.142 * 20;
var area = 3.142 * circumference;
document.writeln(`<h1>The Geometrizer </h1>`);
document.writeln(`<p>Radius of a circle: ${radius} </p>`);
document.writeln(`<p>The circumference ${circumference} </p>`);
document.writeln(`<p>The Area: ${area} </p>`);

//13.
var favoriteSnack = "apple";
var currentAge = 20;
var maximumAge = 65;
var estimatedAmount = 230;
var result = (currentAge - maximumAge) * estimatedAmount;
document.writeln(`<h1>The Lifetime Supply Calculator: </h1>`);
document.writeln(`<p>Favourite Snack: ${favoriteSnack}</p>`);
document.writeln(`<p>Current Age: ${currentAge}</p>`);
document.writeln(`<p>Estimates Maximum Age: ${maximumAge}</p>`);
document.writeln(`<pAmount f Snacks: ${estimatedAmount}</p>`);
document.writeln(
  `<p>You will need ${result} ${favoriteSnack} to last you until the ripe old age of ${maximumAge}”.</p>`,
);
