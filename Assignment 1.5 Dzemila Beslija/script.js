let vip = false;
let age = 17;

function EnterClub() {
    const vipCheckboxElement = document.getElementById("checkBoxInput")
    vip = vipCheckboxElement.checked
    const ageInputElement = document.getElementById("ageElementId")
    age = ageInputElement.value

    if (vip == true) {
        alert("Welcome in my best customer")
    } else if (age >= 18) {
        alert("Access granted")
    } else {
        alert("Access denied")
    }
}
