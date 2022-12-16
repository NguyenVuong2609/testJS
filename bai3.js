let btn3 = document.getElementById('stage3')
btn3.addEventListener("click", ()=>{
    let count = parseInt(prompt("Xin mời nhập số lượng phần tử mảng muốn nhập:"));
    let arr = [];
    for (let i = 0; i < count; i++){
        let member = prompt("Xin mời nhập phần tử " + (i+1) + ":");
        arr.push(member);
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length; i < j; j--) {
            if (arr[i] === arr[j]) {
                arr.splice(j,1);
            }
        }
    }
    console.log(arr);
})