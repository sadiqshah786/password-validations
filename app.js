const Password = document.querySelector('.inputfeild input');
let VisiblePassword = document.querySelector('.inputfeild i');
const requirementList = document.querySelectorAll(".requirement-list li");
const statusPara = document.getElementById("status")
const requirements = [
    { regex: /.{8,}/, index: 0 },
    { regex: /[0-9]/, index: 1 },
    { regex: /[a-z]/, index: 2 },
    { regex: /[A-Z]/, index: 3 },
    { regex: /[^A-Za-z0-9]/, index: 4 },
]


// Password Validations 
Password.addEventListener("keyup", (e) => {
    const list = []
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItems = requirementList[item.index];
        if (isValid) {
            requirementItems.classList.add("valid")
            requirementItems.firstElementChild.className = "fa-solid fa-check"
        }
        else {
            requirementItems.classList.remove("valid")
            requirementItems.firstElementChild.className = "fa-solid fa-circle"
        }
        if (requirementItems.className == "valid") {
            list.push(true)
            if (list.length > 2) {
                statusPara.innerHTML = "Strong Password";
                statusPara.classList.add("Strong")
            }
            else {
                statusPara.innerHTML = "Weak Password"
                statusPara.classList.remove("Strong")
            }
        }
        if (list.length === 0) {
            statusPara.innerHTML = " "
        }
    })


})

// Password visiblity 
VisiblePassword.addEventListener("click", () => {
    if (Password.value.trim() == "" && Password.value.length === 0) {
        Password.type = Password.type === "password" ? "password" : "password";
        VisiblePassword.className = `fa-solid fa-eye`;
        Password.value = "";
    }
    else {
        Password.type = Password.type === "password" ? "text" : "password";
        VisiblePassword.className = `fa-solid fa-eye${Password.type === "password" ? "" : "-slash"}`
    }

})


// Generate Password
const btnGenerate = document.getElementById("btnGenerate");
const copied = document.getElementById('copied');
const copiedIcon = document.querySelector('#copied i');
let PassWord = "";
const generatePassword = () => {
    PassWord = "";
    const textArray = ["a", "A", "b", "c", "C", "d", "D", "E", 'e', "F", 'f', "g",
        "G", 'H', 'h', 'i', 'I', 'J', 'j', "K", "k", "L", "l", "M",
        "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s",
        "T", "t", "U", 'u', "V", 'v', "W", 'w', "x", "X", 'y', "Y", "Z", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "|", "}", "{", "[", "]", ":", "?", ">", "<", ".", "/", "-", " = "]
    for (i = 0; i <= 8; i++) {
        let randomValues = textArray[Math.floor(Math.random() * textArray.length)]
        PassWord += randomValues;
    }

    Password.value = PassWord;
    statusPara.innerHTML = "Strong Password"
    statusPara.classList.add("Strong")
    Password.disabled = true;
    copyValues();
}


// CopyValues 
let modal = document.querySelector('.swal-modal');
const copyValues = () => {
    copiedIcon.addEventListener("click", () => {
        navigator.clipboard.writeText(PassWord);
        swal({
            text: "Copied",
            timer: 1000
        });
    });
}
btnGenerate.addEventListener("click", generatePassword);











