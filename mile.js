function milesToKilometers(milesArray) {
    const conversionFactor = 1.60934; 
    const kilometersArray = milesArray.map(miles => miles * conversionFactor);
    const totalDistanceInKilometers = kilometersArray.reduce((acc, km) => acc + km, 0);

    return totalDistanceInKilometers;
}


const distancesInMiles = [10, 20, 5, 15]; 
const totalDistance = milesToKilometers(distancesInMiles);

console.log("Total distance in kilometers:", totalDistance);
