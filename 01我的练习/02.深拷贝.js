const obj={
    name:'lili',
    age:22,
    sex:'woman'
}
function cheackType(data){
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}
function deepClone(data){
    if(cheackType(data)==='array'){
        var newObj=[];
    }else if(cheackType(data)==='object'){
        var newObj={};
    }else{
        return data;
    }
    for(let key in data){
        newObj[key]=deepClone(data[key]);
    }
    return newObj;
}
const arr=[1,2,3,4,[1,2,3,4]];
console.log(deepClone(obj));
console.log(deepClone(arr));