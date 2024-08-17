
const prompt = require("prompt-sync")(); 

// Import the gravityFactors module which contpains factors for different planets
const gravityFactors = require('./gravityFactors.js');

const alienFactors = require('./utils/alienGravityFactors')

function showUserFactors(factorType, factorUnit, factorSystem, factorPlanets, factorMeasurement) {
    // Initialize an object to hold the results
    const results = {}
    // Declare a variable to hold the unit of measurement
    let measurement

    let solarSystem = {}
    // let unit = userUnit;
    // let planets;

    switch (factorPlanets) {
        case "alien":
            solarSystem = alienFactors
            break;
        case "solar system":
            solarSystem = gravityFactors;
    }

    // Iterate over each item in the gravityFactors object
    for (let planets in factorPlanets) {
        // Calculate the factor multiplied by the input value and round it to two decimals
        // results[planets] = parseFloat((gravityFactors[planets] * input).toFixed(2));
        results[planets] = parseFloat((factorUnit * factorPlanets[planets]).toFixed(2));
    }
    // Switch case to determine the measurement unit based on factor type
    
  


    switch (factorType) {
        
        case "jump":
            measurement = 'cm'
            // for (let units in results) {
            //     console.log(`Your weight on ${planets} is: ${results[planets]}kg`)
            // }
            break;
        
        case "weight":
            measurement = "kg"
            // for (let units in results) {
            //     console.log(`Your weight on ${planets} is: ${results[planets]}lbs`)
            // }
            break;
        default:
            measurement = "units"

        
    }
    // while (true) {
    //     if (factorType == "jump" || factorType == "weight") {
    //         break;
    //     } else {
    //       console.error("200")  
    //     }
    
    // }
    
    // Iterate over the results and log each one
    for (let planets in results) {
        console.log(`Your ${factorType} on ${planets} is ${results[planets]}${measurement}`);
    }
}

function userInput() {
    console.log(`enter your solar system`)
    const factorPlanets = prompt("> ")
    console.log(`Enter your type of factor:`)
    const factorType = prompt("> ");
    console.log(`Enter value:`)
    const factorUnit = prompt("> ");

    showUserFactors(factorType, factorUnit, factorPlanets)
}
// Define a function to get user inputs for factor type and value
// Prompt the user to enter the type of factor they want to calculate
// Prompt the user to enter the numerical value of the factor
// Call the showUserFactors function with the user inputs and the gravity factors
// Expose getUserFactors globally
global.showUserFactors = showUserFactors;
global.userInput = userInput;
//Make note that this is another function for the API