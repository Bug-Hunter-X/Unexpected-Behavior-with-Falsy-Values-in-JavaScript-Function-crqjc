# Unexpected Behavior with Falsy Values in JavaScript Function

This repository demonstrates a common JavaScript bug related to the handling of null and other falsy values. The original code handles null values correctly but may not behave as expected when encountering other falsy values such as 0, empty strings, or false.

## Bug Description

The `foo` function adds two numbers.  It explicitly checks for null values. However, it doesn't handle other falsy values correctly.  This can lead to unexpected results when the function is called with these values.

## Solution

The solution enhances the function to explicitly check for and handle other falsy values more appropriately, using a more robust check or offering alternative behaviors for such scenarios.

## How to reproduce

1. Clone the repo
2. Run `node bug.js` and `node bugSolution.js`