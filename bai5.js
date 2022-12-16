let btn5 = document.getElementById("stage5");
btn5.addEventListener("click", function () {
  showtable();
});
let addbtn = document.getElementById("addMember");
addbtn.addEventListener("click", function () {
  let arr = JSON.parse(localStorage.getItem("MemberRA"));
  let input = document.getElementById("inputName");
  if (arr == null) {
    arr = [];
    if (input.value != "") {
      arr.push({
        name: input.value,
        id: arr.length,
      });
      console.log(arr);
      document.getElementById("inputName").value = "";
    }
  } else {
    if (input.value != "") {
      arr.push({
        name: input.value,
        id: arr.length,
      });
      console.log(arr);
      document.getElementById("inputName").value = "";
    }
  }
  localStorage.setItem("MemberRA", JSON.stringify(arr));
});

function showtable() {
  let arr = JSON.parse(localStorage.getItem("MemberRA"));
  data = `
    <tr>
                <th>No.</th>
                <th>Name</th>
                <th colspan="2">Actions</th>
            </tr>`;
  for (let i = 0; i < arr.length; i++) {
    data += `<tr>
        <td>${i + 1}</td>
        <td>${arr[i].name}</td>
        <td><input type="button" id="edit" value="Edit" onclick="edit(${
          arr[i].id
        })"></td>
                <td><input type="button" id="delete" value="Delete" onclick="deleteMem(${
                  arr[i].id
                })"></td>
    </tr>
        `;
  }
  document.getElementById("tableName").innerHTML = data;
}

function deleteMem(id) {
  let arr = JSON.parse(localStorage.getItem("MemberRA"));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      arr.splice(i, 1);
    }
  }
  for (let j = 0; j < arr.length; j++) {
    arr[j].id = j;
  }
  localStorage.setItem("MemberRA", JSON.stringify(arr));
  showtable();
}
var key;
function edit(id) {
  let arr = JSON.parse(localStorage.getItem("MemberRA"));
  let input = document.getElementById("editName");
  input.value = arr[id].name;
  key = id;
}
let editbtn = document.getElementById("editMember");
editbtn.addEventListener("click", () => {
  let arr = JSON.parse(localStorage.getItem("MemberRA"));
  console.log("123");
  let input = document.getElementById("editName");
  arr[key].name = input.value;
  key = "";
  document.getElementById("editName").value = "";
  localStorage.setItem("MemberRA", JSON.stringify(arr));
  showtable();
});
