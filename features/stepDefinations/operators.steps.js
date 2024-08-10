const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let answer = 0;

Given('I start with {int}', function (input) {
    answer = input;
});

When('I add {int}', function (input) {
    answer += input;
});

When('I multiply by {int}', function (input) {
    answer *= input;
});

When('I subtract {int}', function (input) {
    answer -= input;
});

When('I divide by {int}', function (input) {
    answer /= input;
});

When('I take modulo by {int}', function (input) {
    answer %= input;
});

When('I raise to the power of {int}', function (input) {
    answer = Math.pow(answer, input);
});

When('I compare greater than {int}', function (input) {
    answer = answer > input;
});

When('I compare less than {int}', function (input) {
    answer = answer < input;
});

When('I take the square root', function () {
    answer = Math.sqrt(answer);
});

When('I negate the value', function () {
    answer = -answer;
});

Then('I end up with {int}', function (input) {
    assert.equal(answer, input);
});

Then('I end up with true', function () {
    assert.equal(answer, true);
});

Then('I end up with false', function () {
    assert.equal(answer, false);
});
