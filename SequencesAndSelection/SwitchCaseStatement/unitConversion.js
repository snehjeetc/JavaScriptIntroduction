const FEET_TO_INCH = 12;
const FEET_TO_METRE = 0.3048;
const METRE_TO_INCH = 39.3701;

const FEET_TO_UNIT = [["inch", FEET_TO_INCH], ["m", FEET_TO_METRE]];
const INCH_TO_UNIT = [["ft", 1/FEET_TO_INCH], ["m", 1/METRE_TO_INCH]];
const M_TO_UNIT = [["ft", 1/FEET_TO_METRE], ["inch", METRE_TO_INCH]];

const conversionFactor = [  
                            FEET_TO_UNIT, 
                            INCH_TO_UNIT, 
                            M_TO_UNIT
                         ];

const input = require("readline-sync");

/*
//Not working 
function takeInput(question, val){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    readline.question(`${question}`, value => {
        val = value;
        readline.close();
    });
}
*/

function findConversionFactor(index, conversion_unit){
    switch(conversion_unit){
        case conversionFactor[index][0][0]: 
                return conversionFactor[index][0][1];
        case conversionFactor[index][1][0]:
                return conversionFactor[index][1][1];
        default:
            return null;
    }
}

function getConversionFactor(unit, conversion_unit){
    switch(unit){
        case "ft" : 
            return findConversionFactor(0, conversion_unit);
        case "inch":
            return findConversionFactor(1, conversion_unit);
        case "m":
            return findConversionFactor(2, conversion_unit);
        default:
            return null;
    }
}

function convert(magnitude, unit, conversion_unit){
    if(unit == conversion_unit)
        return magnitude;
    let conversion_factor = getConversionFactor(unit, conversion_unit);
    return (conversion_factor == null) ? null : 
                                         magnitude * conversion_factor;
}

let magnitude;
let unit;
let unit_for_conversion;

/*
takeInput("Enter the magnitude: ", magnitude);
takeInput("Enter the unit", unit);
unit_for_conversion = takeInput("will be converted to ? (ft, inch, m)");
*/

magnitude = input.question("Enter the magnitude: ");
unit = input.question("Enter the unit: ");
unit_for_conversion = input.question("will be converted to ? (ft, inch, m)");

let converted_value = convert(magnitude, unit, unit_for_conversion);

console.log("Entered : " + magnitude + " " + unit);
console.log("After conversion : " + converted_value + " " + unit_for_conversion);


