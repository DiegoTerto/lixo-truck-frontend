const btnCreateUser = document.getElementById('btn-create-user')
const emailInput = document.getElementById('email-input')
const nameInput = document.getElementById('name-input')
const passwordInput = document.getElementById('password-input')
const usernameInput = document.getElementById('username-input')

let fetchConfigPost = {
    headers: {
        "Content-Type": "application/json"
    },
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    body: {}
};

btnCreateUser.addEventListener('click', () => {
    fetchConfigPost.body = JSON.stringify({
        "email": emailInput.value,
        "password": passwordInput.value,
        "username": usernameInput.value,
        "name": nameInput.value,
    })
    fetch('https://agile-castle-27628.herokuapp.com/users', fetchConfigPost)
        .then((response) => {
            if (response.ok) {
                return;
            }
            window.alert('Erro ao realizar cadastro, tente novamente mais tarde')
            throw new Error('Erro ao realizar cadastro, tente novamente mais tarde')
            
        }).then(() => {
            localStorage.setItem('userEmail', emailInput.value);
            localStorage.setItem('userPassword', passwordInput.value);
            window.open('/lixo-truck-frontend/home.html', '_self');
        });
})