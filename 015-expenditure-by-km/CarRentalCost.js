class CarRentalCost {
    constructor(amountOfDays, mileage) {
        this.amountOfDays = amountOfDays;
        this.mileage = mileage;
    }

    calculate() {
        return 60*this.amountOfDays + 0.15*this.mileage;
    }
}

const rentalCost = new CarRentalCost(4, 300);
console.log(`The cost for renting a car for ${rentalCost.amountOfDays} days and driving ${rentalCost.mileage} miles is US$ ${rentalCost.calculate()}`)