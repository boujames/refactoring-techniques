import { TaxUtils } from './tax-utils-refactored.js';
const fs = require('fs');


const buffer = fs.readFileSync('source/characterization-input-output.json'),
data = JSON.parse(buffer);

const verify = data.map(({ input, output }) => {
    console.log({ input, output });
    const result = TaxUtils.calculateTax(input); 
    return  result === output;
});


const verifyTests = () => {
    const koTest = verify.filter((element) => element === false);
    if(koTest.length > 0) return "KO";
    return "All OK";
}

console.log(verifyTests());