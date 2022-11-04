document.querySelector('#register').addEventListener('click', function () {
    fetch('https://weatherapp-backend-ruby.vercel.app/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: document.querySelector('#registerName').value,
            email: document.querySelector('#registerEmail').value,
            password: document.querySelector('#registerPassword').value,
        })
    })
        .then(response => response.json())
        .then(results => {
            if (results.result) {
                console.log('Successfully registed');
                window.location.assign('index.html');
            }
        });
});

document.querySelector('#connection').addEventListener('click', function () {
    fetch('https://weatherapp-backend-ruby.vercel.app/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: document.querySelector('#connectionEmail').value,
            password: document.querySelector('#connectionPassword').value,
        })
    })
        .then(response => response.json())
        .then(results => {
            if (results.result) {
                console.log('Successfully sign-in');
                window.location.assign('index.html');
            }
        })
})