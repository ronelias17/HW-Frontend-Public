document.addEventListener('DOMContentLoaded', () => {
    let users
    let url = "https://proj.ruppin.ac.il/cgroup5/test2/tar1/api/Users/GetAllUsers"
    ajaxCall("GET",url,null, function(res) {
        if(res)
            users = res;
        renderUsers()
    },function(){ 

    });


    const userTableBody = document.getElementById('userTableBody');

 function renderUsers() {
        userTableBody.innerHTML = ''; // Clear existing rows

        users.forEach(user => {
            const row = userTableBody.insertRow();
            row.setAttribute('data-user-id', user.id);

            const idCell = row.insertCell();
            idCell.textContent = user.id;

            const emailCell = row.insertCell();
            emailCell.textContent = user.email;

            const nameCell = row.insertCell();
            nameCell.textContent = user.name;

            const activeCell = row.insertCell();
            const activeSpan = document.createElement('span');
            activeSpan.textContent = user.active ? 'Active' : 'Inactive';
            activeSpan.classList.add('status', user.active ? 'status-active' : 'status-inactive');
            activeCell.appendChild(activeSpan);

            const actionCell = row.insertCell();
            const toggleButton = document.createElement('button');
            toggleButton.classList.add('toggle-button');
            
            if (user.active) {
                toggleButton.textContent = 'Deactivate';
                toggleButton.classList.add('toggle-button-deactivate'); 
            } else {
                toggleButton.textContent = 'Activate';
                toggleButton.classList.add('toggle-button-activate');
            }
            toggleButton.addEventListener('click', () => toggleActiveStatus(user.id));
            actionCell.appendChild(toggleButton);
        });
    }

    function toggleActiveStatus(userId) {
        const user = users.find(u => u.id === userId);
        if (user) {
            user.active = !user.active;
            let reqURL = `https://proj.ruppin.ac.il/cgroup5/test2/tar1/api/Users/SetUserStatus/${user.id}/${user.active}`
            ajaxCall("PUT",reqURL,null,function(res) {
                if(res === 1)
                {
                    renderUsers(); 
                }
            },function() {
                user.active = !user.active;
            })
        }
    }
});