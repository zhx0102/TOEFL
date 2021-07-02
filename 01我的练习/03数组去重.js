var arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

function arrDeWeight(data) {
    for (var i = 0; i < data.length; i++) {
        for (var j = i+1; j < data.length; j++) {
            if (data[j] == data[i]) {
                data.splice(j,1);
                j--;
            }

        }
       
    }
    return data;
}
console.log(arrDeWeight(arr));