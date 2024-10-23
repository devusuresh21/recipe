let side1 = 5;
let side2 = 5;
let side3 = 5;

if (side1 === side2 && side2 === side3) {
    console.log("The triangle is equilateral.");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("The triangle is isosceles.");
} else {
    console.log("The triangle is scalene.");
}
