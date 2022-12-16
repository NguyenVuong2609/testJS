let btn6 = document.getElementById('stage6');
btn6.addEventListener('click', ()=>{
    let year = parseInt(prompt("Enter a year"));
    let month = parseInt(prompt("Enter a month"));
    let day = parseInt(prompt("Enter a day"));
    let isLeapYear = false;
    let key;
    
    if (year % 4 == 0) {
      if (year % 100 == 0) {
        if (year % 400 == 0) {
          isLeapYear = true;
        }
      } else {
        isLeapYear = true;
      }
    }
    
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        if(day <=31 && day >=1){
            console.log("Ngày hợp lệ.");
            if (day == 31 && month == 12){
                console.log("Ngày tiếp theo là: 01" + "/1" + "/" + (year + 1));
                break;
            } else if (day == 31 && month != 12){
                console.log("Ngày tiếp theo là:" + (day + 1) + "/" + (month + 1) + "/" + year);
                break;
            } else {
                console.log("Ngày tiếp theo là:" + (day + 1) + "/" + month + "/" + year);
                break;
            }
        } else {
            console.log("Không hợp lệ");
            break;
        }
      case 2:
        if (isLeapYear && day <=29 && day >=1) {
            console.log("Ngày hợp lệ.");
            if(day == 29){
                console.log("Ngày tiếp theo là:01" + "/" + (month + 1) + "/" + year);
                break;
            } else {
                console.log("Ngày tiếp theo là:" + (day + 1) + "/" + month + "/" + year);
                break;
            }
        } else if (day <=28 && day >=1){
            console.log("Ngày hợp lệ.");
            if (day == 28){
                console.log("Ngày tiếp theo là:01" + "/" + (month + 1) + "/" + year);
                break;
            } else {
                console.log("Ngày tiếp theo là:" + (day + 1) + "/" + month + "/" + year);
                break;
            }
        } else {
            console.log("Không hợp lệ.");
            break;
        }
        default:
            if (month > 12 || month < 1) {
                console.log("Không hợp lệ.");
                break;
            } else if (day <=30 && day >=1){
                console.log("Ngày hợp lệ.");
                if (day == 30){
                    console.log("Ngày tiếp theo là:01" + "/" + (month + 1) + "/" + year);
                    break;
                } else {
                    console.log("Ngày tiếp theo là:" + (day + 1) + "/" + month + "/" + year);
                    break;
                }
            }
    }
})