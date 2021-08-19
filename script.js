const signUp = (e) => {
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.fname.toLowerCase() ==
          document.getElementById("fname").value.toLowerCase() &&
        data.lname.toLowerCase() ==
          document.getElementById("lname").value.toLowerCase()
    );
  if (!exist) {
    formData.push({
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      email: document.getElementById("email").value,
      pwd: document.getElementById("pwd").value,
    });
    localStorage.setItem("formData", JSON.stringify(formData));
    // console.log(localStorage.getItem('formData'));
    dispData();
    document.querySelector("form").reset();
    document.getElementById("fname").focus();
  } else {
    alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
  }
  e.preventDefault();
};
function dispData() {
  console.log(localStorage.getItem("formData"));
  if (localStorage.getItem("formData")) {
    var output = document.querySelector("tbody");
    output.innerHTML = "";
    JSON.parse(localStorage.getItem("formData")).forEach((data) => {
      output.innerHTML += `
                            <tr>
                                <td>${data.fname}</td>
                                <td>${data.lname}</td>
                                <td>${data.email}</td>
                                <td>${data.pwd}</td>
                            </tr>
                    `;
    });
  }
}
dispData();
