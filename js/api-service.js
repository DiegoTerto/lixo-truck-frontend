const btn = document.getElementById('btn-login')
const emailInput = document.getElementById("email-input")
const passwordInput = document.getElementById("inputPassword6")

let fetchConfig = {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    body: {}
};

btn.addEventListener('click', () => {
    fetchConfig.body = JSON.stringify({ "email": emailInput.value, "password": passwordInput.value })
    fetch('https://agile-castle-27628.herokuapp.com/users/authenticate', fetchConfig)
        .then((response) => {
            if(response.ok) {
                return;
            }
            window.alert('Erro ao realizar login, tente novamente mais tarde')
            throw new Error('Erro ao realizar login, tente novamente mais tarde')
        }).then(() => {
            localStorage.setItem('userEmail', emailInput.value);
            localStorage.setItem('userPassword', passwordInput.value);
            window.open('/lixo-truck-frontend/home.html', '_self');
        })
});
