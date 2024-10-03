function commentDisplay() { 
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(comments => commentData(comments))
}

function commentData(comments) {
    const div = document.getElementById('comment-container');
    for(const comment of comments) {
        const p = document.createElement('p');
        p.classList.add('comment');
        p.innerHTML = `
        <h2>Post-ID: ${comment.postID} </h2>
        <h3>ID: ${comment.id} </h3>
        <h4>Name: ${comment.name} </h4>
        <h5>E-mail: ${comment.email} </h5>
        <p>${comment.body} </p>
        
        `
        div.appendChild(p);
    }
}