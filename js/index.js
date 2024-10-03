function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( data => displayUsers2(data))
}

// function displayUsers2(data) {
//     for(const user of data) {
//         console.log(data);
//     }
// }

// function displayUsers2(users) {
//     for(const user of users) {
//         console.log(user.name);
//         console.log(user.email);
//         console.log(user.username);
//     }
// }

function displayUsers2(users) {
    const ul = document.getElementById('users-list');
    for(const user of users) {
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li);

    }
}