
let number = prompt("Enter a number between 1 and 1 million:");


// Initialize sum variable
let sum = 0;
if(number>=100000)
{
    alert("INVALID DATA!! PLEASE ENTER THE NUMBER BELOW 1 MILLION");
}
else if(number<=0)
{
    alert("INVALID DATA!! PLEASE ENTER THE NUMBER ABOVE 0");
}
// Calculate the sum from 1 to the entered number
for (let i = 1; i <= number; i++) {
    sum += i;
}

// Show the sum in an alert box
alert("The sum of numbers from 1 to " + number + " is: " + sum);
