const FEET_TO_INCH = 12;
const INCH_TO_FEET = 1/FEET_TO_INCH;
const FEET_TO_METRE = 0.3048;
const ACRE_TO_METRESQUARE = 4046.86;

let fortyTwoInch = 42 * INCH_TO_FEET;
let plotArea = 60 * 40 * Math.pow(FEET_TO_METRE, 2);
let ploatAreaInAcre = plotArea / ACRE_TO_METRESQUARE;