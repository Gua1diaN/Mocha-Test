module.exports = class shoppingCart{
    constructor() {
        this.totalPrice = 0;
        this.totalQty = 0;
        this.items = {};
    }
    addItemAndPrice = (name, price, num=1) => {
        if ( this.items.hasOwnProperty(name)) {
            throw('Already added ' + name);
        } else {
            this.items[name] = {};
            this.items[name].qty = num;
            this.items[name].price = price;
            this.items[name].subPrice = parseFloat((price*num).toFixed(2));
        }
    }
    addItem = (name, num=1) => {
        if (this.items.hasOwnProperty([name])) { 
            this.items[name].qty += num;
            this.items[name].subPrice += parseFloat((this.items[name].price*num).toFixed(2));
        } else {
            throw('Price must be added before adding ' + name);
        }
    }
    removeItem = (name, num=1) => {
        if (this.items.hasOwnProperty([name])) {
            this.items[name].qty > num ? (this.items[name].qty -= num) : (this.items[name].qty = 0);
            (this.items[name].subPrice > parseFloat((this.items[name].price*num).toFixed(2))) ? parseFloat(this.items[name].subPrice -= parseFloat((this.items[name].price*num).toFixed(2))) : (this.items[name].subPrice = 0);
        } else {
            throw('NO such an item in your basket: ' + name);
        }

        if (this.items[name].qty === 0) {
            delete this.items[name];
        }
    }
    checkOut = () => {
        let totalPrice = 0;
        for (const item in this.items) {
            totalPrice += this.items[item].subPrice;
        }
        return parseFloat(totalPrice.toFixed(2));
    }
};