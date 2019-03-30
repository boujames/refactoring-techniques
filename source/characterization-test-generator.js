import { TaxUtils } from './tax-utils.js';
const rand = require('random-seed').create();
const fs = require('fs');


const expectedResultsAndInputs = [...new Array(3000)].map(() => {
    const input = rand.intBetween(-85650, 85660);
    const output = TaxUtils.calculateTax(input);
    return { input, output }
});

fs.writeFileSync('source/characterization-input-output.json', JSON.stringify(expectedResultsAndInputs));