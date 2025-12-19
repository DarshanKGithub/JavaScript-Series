const obj = {
    name: "Darshan",
    age: 24,
    address:{
        city: "Mumbai",
        pincode: 411036
    }
}

console.log(obj)
//Shallow Copy
const shallowCopy = Object.assign({}, obj);

// shallowCopy.address.city = 'Pune';
// console.log(obj.address.city);
// console.log(shallowCopy.address.city);

// shallowCopy.obj.name = 'Priya';
// console.log(name);
// console.log(shallowCopy.name);


//Callback Function

function fn(callbacks){
    callbacks();
}

    function callbacks(){
        console.log("I'm a callback");
        
    }


fn(callbacks);