const getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => display(data))
}
// getTodos()
const display = users => {
    console.log(users);
    const container = document.getElementById('user');


    users.forEach(user => {

        const div = document.createElement('div');
        div.innerHTML = `
            <h2> Name: ${user.name} </h2>
        <p>compant Name : ${user.company.name}</p>
    
    
             `;
        container.appendChild(div);

    })
    // for (const user of users) {
    //     console.log(user.name);
    //     const div = document.createElement('div');
    //     div.innerHTML = `
    //     <h2> Name: ${user.name} </h2>
    //     <p>compant Name : ${user.company.name}</p>


    //     `;
    //     container.appendChild(div);
    // }

}