function dataTypeCheck(value){

    if (typeof value === 'string' || value instanceof String) { // Returns if a value is a string

        console.log('Type : String');
        console.log('value: ' + value);
    }

    else if (typeof value === 'number' && isFinite(value)) {  // Returns if a value is a number
        console.log('Type : Number');
        console.log('value: ' + value);
    }

    else if (value === null) { // Returns if a value is null

        console.log('Type : NULL')
        console.log('value: ' + value)
    }

    else if (typeof value === 'undefined') {  // Returns if a value is undefined
        console.log('Type : Undefined');
    }

    else if (typeof value === 'boolean') {  // Returns if a value is a boolean
        console.log('Type : Boolean');
    }

    else if (value && typeof value === 'object' && value.constructor === Object) { // Returns if a value is an object
        console.log('Type : Object')
        console.log('value: ')
        console.log(value);
}

    else if (typeof (value) === 'object' && typeof (value[0]) === 'object') { // Returns if a value is an array of object
    console.log("Array of object");
        value.map((x,i)=>{
        console.log(x);
})

}

    else if (typeof (value) === 'object' && typeof (value[0]) !== 'object') { // Returns if a value is an array
    console.log("Type : Array");
    value.map((x, i) => {
        console.log(x);
    })
}

    else if(Number.isNaN(value)){

        console.log('type:NaN');

    }
    
}

dataTypeCheck("HERE");
dataTypeCheck(700);
dataTypeCheck(null)
var arr = [119, 227, 336]
dataTypeCheck(arr)
var arr_of_obj = [{ 'a': 80 }, { 'b' : 90 }]
dataTypeCheck(arr_of_obj)
dataTypeCheck({ 'c' : 9 })