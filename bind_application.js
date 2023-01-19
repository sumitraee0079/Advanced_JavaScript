var student = {age : 20}

var printAge = function(){
    return this.age
}

var bound = printAge.bind(student)
console.log(bound())

// output = 20
