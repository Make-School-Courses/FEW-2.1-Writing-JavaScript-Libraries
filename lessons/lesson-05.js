
class Money {
  constructor(value = 0) {
    this.value = value
  }

  addCents(amount) {
    return new Money(this.value + amount)
  }

  addDollars(amount) {
    return this.addCents(Math.round(amount * 100))
  }

  getTax(percent) {
    return new Money(Math.round(this.value * percent / 100))
  }

  format() {
    return `$${(this.value / 100).toFixed(2)}`
  }
}

const m1 = new Money(7500) // $75
console.log('$75', m1.format())
const m2 = m1.addCents(99)
console.log('$75.99', m2.format())
const m3 = m2.addDollars(25.01)
console.log('$101.00', m3.format())
const t1 = m3.getTax(8.5)
console.log('8.5%', t1.format())

// https://www.npmjs.com/package/dinero.js
// https://www.npmjs.com/package/money-math
// https://www.npmjs.com/package/currency.js
// 


// Chaining Methods
class Thing {
  constructor(value = 0) {
    this.value = value
  }

  multiply(n) {
    this.value *= n
    return this
  }

  add(n) {
    this.value += n
    return this
  }

  divide(n) {
    this.value /= n
    return this
  }

  subtract(n) {
    this.value -= n
    return this
  }
}

const thing = new Thing(10)
thing.add(1).multiply(2).subtract(3).divide(4)
console.log((((10 + 1) * 2) - 3) / 4, thing.value)


class Widget {
  constructor(value = 0) {
    this.value = value
  }

  multiply(n) {
    return new Widget(this.value *= n)
  }

  add(n) {
    
    return new Widget(this.value += n)
  }

  divide(n) {
    return new Widget(this.value /= n)
  }

  subtract(n) {
    return new Widget(this.value -= n)
  }
}

const widget = new Widget(10)
console.log((((10 + 1) * 2) - 3) / 4, widget.add(1).multiply(2).subtract(3).divide(4).value)