const obj={
    name:"lili",
    age:23,
    sex:"woman"
}
function shallowClone(data){
    let newObj={};
    for(var key in data){
        newObj[key]=data[key];
    }
    return newObj;
}
console.log(shallowClone(obj));