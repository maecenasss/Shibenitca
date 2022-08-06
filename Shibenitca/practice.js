'use strict';

const number = 1;

//anonim function and sel-calling  
(function(){
    let number = 2;
    console.log (number);
    console.log (number + 3);
})();
console.log(number);
//
const user = (function(){
    const privat = function() {
        console.log('I am privat');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();

