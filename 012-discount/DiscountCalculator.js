class DiscountCalculator {
    constructor(basePrice) {
        this.basePrice = basePrice;
    }

    applyDiscount() {
        return this.basePrice*0.95
    }
}

const discountCalculator = new DiscountCalculator(100);
console.log(`A R$ ${discountCalculator.basePrice}.00 item now costs R$ ${discountCalculator.applyDiscount()}.00 after the discount.`)