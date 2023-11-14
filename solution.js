/*
* Given an Integer num, repeatedly add all its digits until,
* the result has only one digit, and return it

* Example 1 :-
* num = 38
* output = 2
*
* Explanation :-
* 38 --> 3 + 8 --> 11 --> 1 + 1 --> 2
* Since 2 has only one digit, return it.

* Example 2 :-
* num = 0
* output = 0
* 
* Explanation :-
* 0 --> 0
* Since 0 has only one digit, return it.
*/

let input1 = 38; // output should be 2
let input2 = 548; // output should be 8
let input3 = 0; // output should be 0

//solution
const digitsToSingle = (input) => {

    let num = String(input);

    while (num.length > 1) {

        let sum = 0;

        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i]);
        }

        num = String(sum);
    }

    return num;
}

console.log(digitsToSingle(input1));
console.log(digitsToSingle(input2));
console.log(digitsToSingle(input3));


