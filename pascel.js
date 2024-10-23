const prompt = require('prompt-sync')({sigint: true});
const numberOfRows = parseInt(prompt("Enter the number of rows for Pascal's Triangle:"), 10);

if (isNaN(numberOfRows) || numberOfRows < 1) {
    console.error("Please enter a valid number of rows greater than 0.");
} else {
    const triangle = [];
    for (let i = 0; i < numberOfRows; i++) {
        const row = Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle.push(row);
    }
    console.log("Pascal's Triangle:");
    for (const row of triangle) {
        console.log(row.join(' ').padStart(numberOfRows * 2));
    }
}
