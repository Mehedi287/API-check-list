const getComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}
const displayComments = commments => {
    console.log(commments);
    const container = document.getElementById('container');
    commments.forEach(comment => {
        console.log(comment);
        const p = document.createElement('p');

        p.innerText = `Name  : ${comment.name} id: ${comment.id}
        `;
        container.appendChild(p)
    })
}