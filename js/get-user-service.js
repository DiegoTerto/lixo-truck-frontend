let getUserResponse = {};

const emailInput = document.getElementById('email-input');
const nomeInput = document.getElementById('name-input');
const usernameInput = document.getElementById('username-input');

let userId = '';
let usernamePrevious = '';

let fetchConfigGet = {
    headers: {
        "Accept": "application/json",
    },
    method: 'GET',
    cache: 'default',
}

let data = {}

let fetchConfigGetUsers = {
    headers: {
        "Accept": "application/json",
    },
    method: 'GET',
    cache: 'default',
}

let usersBodyHTML = [];

window.onload = () => {
    const userEmail = localStorage.getItem('userEmail');
    fetch(`https://agile-castle-27628.herokuapp.com/users/${userEmail}`, fetchConfigGet)
        .then(response => response.json()).then((json) => {
            data = json
            emailInput.value = data.email
            nomeInput.value = data.name
            usernameInput.value = data.username
            usernamePrevious = data.username
            userId = data.id
        })

    fetch(`https://agile-castle-27628.herokuapp.com/users`, fetchConfigGetUsers)
        .then(response => response.json()).then((json) => {
            const { content } = json;
            content.forEach(user => {
                usersBodyHTML.push(`<tr><th scope="row">${user.name}</th><td>${user.email}</td><td>${user.username}</td><td>${user.active ? 'Ativo' : 'Inativo'}</td></tr>`)
            });
            bodyUsers.innerHTML = usersBodyHTML.join('');
        })
}

const btnSave = document.getElementById('btn-save');

let fetchConfigEditUser = {
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'PUT',
    cache: 'default',
    body: {}
}

btnSave.addEventListener('click', () => {
    const emailCache = localStorage.getItem('userEmail');
    fetchConfigEditUser.body = JSON.stringify({
        "email": emailInput.value === emailCache ? null : emailInput.value,
        "name": nomeInput.value,
        "username": usernameInput.value === usernamePrevious ? null : usernameInput.value
    })
    fetch(`https://agile-castle-27628.herokuapp.com/users/${userId}`, fetchConfigEditUser)
        .then(() => {
            localStorage.setItem('userEmail', emailInput.value);
            window.alert('Atualizado com sucesso!');
        })
})

const bodyUsers = document.getElementById('table-body-users');
