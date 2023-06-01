const btn = document.getElementById('btn-login')
const emailInput = document.getElementById("email-input")
const passwordInput = document.getElementById("inputPassword6")

let fetchConfigPost = {
    headers: {
        "Content-Type": "application/json"
    },
    method: 'PUT',
    mode: 'cors',
    cache: 'default',
    body: {}
};

btn.addEventListener('click', () => {
    fetchConfigPost.body = JSON.stringify({ "email": emailInput.value, "password": passwordInput.value })
    fetch('https://agile-castle-27628.herokuapp.com/users/authenticate', fetchConfigPost)
        .then(() => {
            localStorage.setItem('userEmail', emailInput.value);
            localStorage.setItem('userPassword', passwordInput.value);
            window.open('/lixo-truck-frontend/index3.html', '_self');
        }).catch(() => {})
});
