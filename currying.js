let multiply = function(x, y){
    console.log(x * y)
}

let multiply_closures = function(x){
    return function(y){
        console.log(x * y)
    }
}

let multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 2, 3)
multiplyByThree(5);

let multiply_closures_Two = multiply_closures(2)
multiply_closures_Two(3);


/*Output
10
6
6*/
