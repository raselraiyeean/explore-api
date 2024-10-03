function postDisplay() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then( Data => PostData(Data))
}
/* 
1. get the container element where you want to add the new elements
2. create child element 
3. set innerText or innerHTML
4. appendChild
*/
function PostData(posts) {
    const section = document.getElementById('post-container');
    for(const post of posts) {
        const div = document.createElement('div');
        div.style.cssText = "border: 2px solid yellow; padding: 20px; background-color: #fd79a8; border-radius: 20px; margin: 20px; width: 400px;";
        // div.style.border = '2px solid #b2bec3';
        // div.style.padding = '20px';
        // div.style.backgroundColor = '#fd79a8';
        // div.style.width = '300px';
        // div.style.borderRadius = '20px';
        // div.style.margin = '20px';

        div.innerHTML = `
        <h2>UserId - ${post.userId} </h2>
        <h3>Id - ${post.id} </h3>
        <h4> ${post.title} </h4>
        <p>${post.body} </p>
        `;
        
        section.appendChild(div);
    }
}