const passwordInput = document.querySelector("#passwordForm1");
const confirmPasswordInput = document.querySelector("#passwordForm2");
const emailInput = document.querySelector("#emailForm");
const form = document.querySelector("#form");

const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const confirmPasswordError = document.querySelector("#confirmPasswordError");

const requirementList = document.querySelectorAll(".requirement-list li");

const requirements = [
    { regex: /.{8,}/, index: 0 },
    { regex: /[0-9]/, index: 1 },
    { regex: /[a-z]/, index: 2 },
    { regex: /[^A-Za-z0-9]/, index: 3 },
    { regex: /[A-Z]/, index: 4 },
];

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        if (isValid) {
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
    });
});

form.addEventListener("submit", function (e) {
    let isValid = true;

    // ایمیل
    if (!emailInput.value) {
        emailError.textContent = "لطفا این بخش را تکمیل کنید";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailError.textContent = "لطفا ایمیل خود را صحیح وارد کنید";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // کلمه عبور
    let passwordValid = requirements.every(item => item.regex.test(passwordInput.value));
    if (!passwordInput.value) {
        passwordError.textContent = "لطفا این بخش را تکمیل کنید";
        isValid = false;
    } else if (!passwordValid) {
        passwordError.textContent = "لطفا تمامی موارد گفته شده در کادر پایین را در پسورد خود ذکر کنید";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // تکرار کلمه عبور
    if (!confirmPasswordInput.value) {
        confirmPasswordError.textContent = "لطفا این بخش را تکمیل کنید";
        isValid = false;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = "پسورد و تکرار پسورد مطابقت ندارد";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    if (!isValid) {
        e.preventDefault();
    }
});
