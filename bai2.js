let btn2 = document.getElementById('stage2')
btn2.addEventListener('click', function(){
    let string = prompt("Xin mời nhập 1 chuỗi:")
    let arr = string.split(" ");
    console.log(arr);
    let newArr = [];
    let upperArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr = arr[i].split("");
        newArr[0] = newArr[0].toUpperCase();
        upperArr.push(newArr.join(""));
    }
    console.log(upperArr.join(" "));
})