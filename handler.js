'use strict';

module.exports.hello = (event, context, callback) => {

    var numbers = [4, 75, 16, 25, 55,28,14,15,26];
    var x = 5;

    //75 55 17 -> 66
    var getNumMayor = function (numArray) {

        var mayorArray = [];
        var mayorArray2 = [];
        var menorArray = [];
        numArray.forEach(function (item, index) {

            var mayorArray2 = [];
            var menorArray = [];

            mayorArray.forEach(function (item2, index2) {
                if (item2 >= item) {
                    mayorArray2.push(item2);
                } else {
                    menorArray.push(item2);
                }
            });
            mayorArray2.push(item);
            mayorArray = mayorArray2.concat(menorArray);

        });
        //mayorArray.reverse();


        return mayorArray;
    };

    Array.prototype.diff = function (a) {
        return this.filter(function (i) {
            return a.indexOf(i) < 0;
        });
    };

    //console.log([1,2,3,4,5,6].diff( [3,4,5] ));
    var result = null;
    var conditional = true;

    while (conditional) {
        var numberMayor = getNumMayor(numbers);
        console.log(numberMayor, 'hola');
        if (numberMayor[x - 1] != undefined) {
            result = numberMayor[x - 1];
            conditional = false;
        } else {
            numbers = numbers.diff(numberMayor);
            x = x - numberMayor.length;
        }
    }

    console.log(result);


    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!',
            input: event,
        }),
    };

    callback(null, response);

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
