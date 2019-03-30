const segments = Object.freeze({
    ZERO: 0,    
    FIRST: 1,
    SECOND: 2,
    THIRD: 3,
    FOURTH: 4
});

const segmentBoundaries = [
    { max: 0, min: Number.NEGATIVE_INFINITY, rate: 0, segment: segments.ZERO },
    { max: 8700, min: 0, rate: .10, segment: segments.FIRST },
    { max: 35350, min: 8700, rate: .15, segment: segments.SECOND },
    { max: 85650, min: 35350, rate: .25, segment: segments.THIRD },
    { max: Number.POSITIVE_INFINITY, min: 85650, rate: .28, segment: segments.FOURTH }
];


export class TaxUtils {

    static calculateTax = (amount) => {
        const segment = TaxUtils._getSegment(amount);
        const result = TaxUtils._formulas(amount, segment);
        return result;
    }

    static _getSegment = (amount) => segmentBoundaries.find(
            (boundary) => amount <= boundary.max && amount > boundary.min).segment;


    static _formulas= (amount, segment) => {
        let tax = 0;
        
        if (segment > segments.FIRST) {
            const array = [...Array(segment - 1)].map((_, key) => key + 1);
            tax = array.reduce((acc, item) => {
                const segementType = segmentBoundaries[item];
                return acc + (segementType.max - segementType.min) * segementType.rate;
            }, 0);

            tax += (amount - segmentBoundaries[segment].min) * segmentBoundaries[segment].rate;
        }

        else tax = amount * segmentBoundaries[segment].rate;

        return tax;
    }
}

/* 
            28% on taxable income over $85,650 plus
            15% on taxable income over $8,700 to $35,350, plus
            25% on taxable income over $35,350 to $85,650, plus 
            10% on taxable income from $0 to $8,700
           
*/