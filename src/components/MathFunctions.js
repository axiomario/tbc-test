import React, { Component } from 'react';

export default class MathFunctions extends Component {
    one = (operation) => { return this.numberOperation(1)(operation) };
    two = (operation) => { return this.numberOperation(2)(operation) };
    three = (operation) => { return this.numberOperation(3)(operation) };
    four = (operation) => { return this.numberOperation(4)(operation) };
    five = (operation) => { return this.numberOperation(5)(operation) };
    six = (operation) => { return this.numberOperation(6)(operation) };
    seven = (operation) => { return this.numberOperation(7)(operation) };
    eight = (operation) => { return this.numberOperation(8)(operation) };
    nine = (operation) => { return this.numberOperation(9)(operation) };
    ten = (operation) => { return this.numberOperation(10)(operation) };
    
    render() {
        return (
            <div className="container">
                <br/><h5>seven(times(five())) => { this.seven(this.times(this.five())) }</h5>
                <br/><h5>four(plus(nine())) => { this.four(this.plus(this.nine())) }</h5>
                <br/><h5>eight(minus(three())) => { this.eight(this.minus(this.three())) }</h5>
                <br/><h5>six(dividedBy(two())) => { this.six(this.divideBy(this.two())) }</h5>
            </div>
        );
    }

    plus(x) {
        return (y) => {
            return y + x;
        }
    }

    minus(x) {
        return (y) => {
            return y - x;
        }
    }

    times(x) {
        return (y) => {
            return y * x;
        }
    }

    divideBy(x) {
        return (y) => {
            return y / x;
        }
    }

    numberOperation(value) {
        return (operation) => {
            return operation ? operation(value) : value;
        }
    }
}