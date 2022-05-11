const expect = require('chai').expect;
const ShoppingCart = require('./shoppingCart');
let shoppingCart;
describe('add item to cart', () => {
    beforeEach(() => {
        shoppingCart = new ShoppingCart();
    });
    it('add items to cart', () => {
        shoppingCart.addItemAndPrice('Apple', 4.95, 2);
        shoppingCart.addItemAndPrice('Orange', 3.99);
        expect(shoppingCart.checkOut()).to.equal(13.89);
    });
    it('add and remove items to cart', () => {
        shoppingCart.addItemAndPrice('Apple', 4.95, 3);
        shoppingCart.removeItem('Apple',1);
        expect(shoppingCart.checkOut()).to.equal(9.9);
    });
    it('must add item and price before add item', () => {
        expect(()=>shoppingCart.addItem('Apple', 3)).to.throw('Price must be added before adding Apple');
    });
    it('add itemAndPrice with exist one', () => {
        shoppingCart.addItemAndPrice('Apple', 4.95, 3);
        expect(()=>shoppingCart.addItemAndPrice('Apple', 4.95, 3)).to.throw('Already added Apple');
    });
    it('add item', () => {
        shoppingCart.addItemAndPrice('Apple', 4.95, 3);
        shoppingCart.addItem('Apple', 3);
        expect(shoppingCart.checkOut()).to.equal(29.7);
    });
    it('remove an item without adding one', () => {
        expect(()=>shoppingCart.removeItem('Apple')).to.throw('NO such an item in your basket: Apple');
    });
    it('remove all apples', () => {
        shoppingCart.addItemAndPrice('Apple', 4.95, 3);
        shoppingCart.addItem('Apple', 3);
        shoppingCart.removeItem('Apple', 6);
        expect(shoppingCart.items).to.not.have.property('Apple');
    });
});