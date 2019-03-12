
class ChangeHandler {
    
    constructor(amountD, cashTendered) {
        this.amountD = amountD;
        this.cashTendered = cashTendered;
    }

    insertCoin(type) {
        if (type === `penny`) {
            return this.cashTendered + 1;
        } else if (type === `nickel`) {
            return this.cashTendered + 5;
        } else if (type === `dime`) {
            return this.cashTendered + 10;
        } else if (type === `quarter`) {
            return this.cashTendered + 25;
        }
          
    }

    
    isPaymentSufficient() {
        if (this.cashTendered < this.amountD ) {
            console.log(`${false}: cashTendered: ${this.cashTendered},  amountDue: ${this.amountD}`);
            return false;
        } else  {
            console.log(`${true}: cashTendered: ${this.cashTendered},  amountDue: ${this.amountD}`);
            return true;
        }
        
       
    }

    giveChange() {
        let numQuarters
        let numDimes;
        let numNickels;
        let numPennies;

        let change = {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        };

        let amountO = this.cashTendered - this.amountD;
       
        numQuarters = Math.floor(amountO / 25);  
        change.quarters = numQuarters; 
        amountO = amountO % 25;

        numDimes = Math.floor(amountO /10);
        
        change.dimes = numDimes; 
        amountO = amountO % 10;

        numNickels = Math.floor(amountO / 5);
        change.nickels = numNickels; 
        amountO = amountO% 5;

        numPennies = amountO;
        change.pennies = numPennies;
        console.log(change);
        
        return change;
       
    }
}