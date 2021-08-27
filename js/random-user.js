const getUser = () => {
    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => displayUser(data))
}
getUser()
const displayUser = users => {
    // container.textContent = ''
    console.log(users.results);
    const user = users.results;
    const container = document.getElementById('container');
    user.forEach(person => {
        const div = document.createElement('div');
        div.innerHTML = `
        <img class="mx-auto text-center w-3/8 rounded-full mb-5 " src="${person.picture.large}   ">
        <p>Name : ${person.name.title}</p>
        <p>Location : city: ${person.location.city},
        coordinates: ${person.location.coordinates.longitude},</p>
        coordinates: ${person.location.coordinates.longitude},street:${person.location.street.number} ${person.location.street.name}</p>
        <p>timezone: ${person.location.timezone.description}</p>
            `;
        container.appendChild(div)

    })



    // users.forEach(user => {
    //     console.log(user.results);
    // })
}