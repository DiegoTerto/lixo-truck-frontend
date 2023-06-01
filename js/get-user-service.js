let getUserResponse = {};

const emailLabel = document.getElementById('email-label');
const nomeLabel = document.getElementById('nome-label');
const usernameLabel = document.getElementById('username-label');

let fetchConfigGet = {
    headers: {
        "Accept": "application/json",
    },
    method: 'GET',
    cache: 'default',
}

let data = {}

window.onload = () => {
    const userEmail = localStorage.getItem('userEmail');
    fetch(`https://agile-castle-27628.herokuapp.com/users/${userEmail}`, fetchConfigGet)
        .then(response => response.json()).then((json) => {
            data = json
            emailLabel.innerHTML = data.email
            nomeLabel.innerHTML = data.name
            usernameLabel.innerHTML = data.username
        })
}
