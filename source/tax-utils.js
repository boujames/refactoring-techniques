export class TaxUtils {
    
        static calculateTax = (amount) => {
            var calculate = 0, tax = 0;
            if (amount > 85650) {
                tax = (amount - 85650) * .28 + 870.0 + (35350 - 8700) * .15 + (85650 - 35350) * .25;
            }
            else if (amount > 35350) {
                tax = (amount - 35350) * .25 + 870.0 + (35350 - 8700) * .15;
            }
            else if (amount > 8700) {
                tax = (amount - 8700) * .15 + 870.0;
            }
            else if(amount > 0){
                tax = (amount - 0) * .10;
            }
            else tax = 0;
            return tax;
            /*
                28% on taxable income over $85,650 plus
                15% on taxable income over $8,700 to $35,350, plus
                25% on taxable income over $35,350 to $85,650, plus 
                10% on taxable income from $0 to $8,700
            */
        }
        
    }