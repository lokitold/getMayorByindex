'use strict';

module.exports.hello = (event, context, callback) => {

    var numbers = [4, -75, 16, 25,58,-65,12,48,59,-65];
    var x = 2;

    console.log('Array Numbers',numbers);
    console.log('Position',x);


    var getMayorByindex = function (number,x){

        var i  = 0;
        var result;

        var getNumMayor = function (numArray) {
            var mayor = 0;
            var indexMayor = 0;
            numArray.forEach(function (item, index) {
                if (item > mayor) {
                    mayor = item;
                    indexMayor = index;
                }
            });

            return [indexMayor,mayor];
        };

        for (i = 1; i <= x; i++) {
            var numberMayor = getNumMayor(numbers);
            if(x == i){
                result = numberMayor[1];
            }else{
                numbers.splice(numberMayor[0],1);
            }
        }

        return result;

    }

    var input = getMayorByindex(numbers,x);

    console.log(input);

    callback(null, { message: 'this result is ' + input });
};
