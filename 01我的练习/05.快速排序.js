const arr=[1,3,5,7,9,0,8,6,4,2];
function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let first = arr.shift();
    let left=[];
    let right=[];
    arr.forEach((item,index)=>{
        if(item<first){
            left.push(item);
        }else{
            right.push(item);
        }
    })
    return quickSort(left).concat(first,quickSort(right));
}
console.log(quickSort(arr));