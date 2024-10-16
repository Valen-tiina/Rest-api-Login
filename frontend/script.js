document.getElementById('registerBtn').addEventListener('click', () => {
    const nombre = document.getElementById('registerNombre').value;
    const password = document.getElementById('registerPassword').value;

    fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.id) {
            showMessage('Registro exitoso: ' + data.nombre);
        } else {
            showMessage('Error: ' + data);
        }
    })
    .catch(error => showMessage('Error en la petición: ' + error));
});

document.getElementById('loginBtn').addEventListener('click', () => {
    const nombre = document.getElementById('loginNombre').value;
    const password = document.getElementById('loginPassword').value;

    fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            showMessage('Inicio de sesión exitoso. Token: ' + data.token);
        } else {
            showMessage('Error: ' + data);
        }
    })
    .catch(error => showMessage('Error en la petición: ' + error));
});

function showMessage(message) {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.textContent = message;
}