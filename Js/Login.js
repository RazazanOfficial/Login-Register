document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    const email = document.getElementById('emailForm').value.trim();
    const password = document.getElementById('passwordForm').value.trim();

    let valid = true;

    if (!email) {
        document.getElementById('emailError').innerText = 'فیلد موردنظر را پر کنید.';
        valid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = 'ایمیل وارد شده صحیح نیست.';
        valid = false;
    }

    if (!password) {
        document.getElementById('passwordError').innerText = 'فیلد موردنظر را پر کنید.';
        valid = false;
    }

    if (valid) {
        // Perform the login action here
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
