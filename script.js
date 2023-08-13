 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
           // Calculate the area of the circle
const area = Math.PI * Math.pow(radius, 2);

// Round off the result to two decimal places
const roundedArea = area.toFixed(2);

// Display the result
console.log(`The area of the circle with radius ${radius} is ${roundedArea}`);
}
calculateArea();
