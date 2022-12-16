let str = "program";
let str1 = "data";
let btn = document.getElementById('stage1');
btn.addEventListener("click",function(){
    let string = prompt("Nhập vào 1 chuỗi:")
    let arr = string.split("");
    for(let i=0; i<(arr.length/2); i++) {
        let x = arr[i];
        arr[i]= arr[arr.length-(i+1)];
        arr[arr.length-(i+1)] = x;
    }
    console.log(arr);
})

