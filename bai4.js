let btn4 = document.getElementById('stage4');
btn4.addEventListener('click', function(){
    let count = parseInt(prompt("Xin mời nhập số lượng phần tử mảng muốn nhập:"));
    let arr = [];
    for (let i = 0; i < count; i++){
        let member = prompt("Xin mời nhập phần tử " + (i+1) + ":");
        arr.push(member);
    }

    for (let j = 0; j < arr.length; j++) {
        for (let k = arr.length-1; j < k; k--) {
            if (arr[j] < arr[k]) {
                let temp = arr[j];
                arr[j] = arr[k];
                arr[k] = temp;
            }
        }
    }
    console.log(arr);
})