import './bootstrap';

document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let formData = new FormData(this);

    fetch('/api/users', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.errors) {
            // Handle validation errors
            console.log(data.errors);
        } else {
            // Append new user data to the table
            let table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
            let newRow = table.insertRow();
            newRow.innerHTML = `
                <td>${data.name}</td>
                <td>${data.email}</td>
                <td>${data.phone}</td>
                <td>${data.description}</td>
                <td>${data.role_id}</td>
                <td><img src="/storage/${data.profile_image}" width="50"></td>
            `;
        }
    })
    .catch(error => console.error('Error:', error));
});

// Fetch and display existing users on page load
fetch('/api/users')
    .then(response => response.json())
    .then(users => {
        let table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
        users.forEach(user => {
            let newRow = table.insertRow();
            newRow.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.description}</td>
                <td>${user.role_id}</td>
                <td><img src="/storage/${user.profile_image}" width="50"></td>
            `;
        });
    });
