const arr=[1,3,5,7,9,0,2,4,6,8];
function Bubble(data){
    let swap;
    for(let i=0;i<data.length;i++){
        for(let j=0;j<data.length;j++){
            if(data[j]>data[j+1]){
                swap=data[j];
                data[j]=data[j+1];
                data[j+1]=swap;
            }
        }
    }
    return data;
}
console.log(Bubble(arr));