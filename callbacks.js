const posts = [
    { title: 'Post One', body: 'This is post one', createdAt: new Date().getTime() },
    { title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime() }
]

let intervalId = 0

function getPosts() {
    clearInterval(intervalId)
    intervalId = setInterval( () => {
        let output = ''
        posts.forEach((post, index) => {
            output += `<li>${post.title} - last updated ${ (new Date().getTime() - posts[index].createdAt) / 1000 } seconds ago</li>`
        });
        document.body.innerHTML = output
    }, 1000);
}


function createPost(post, callback)    {
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime()});
        callback();
    }, 2000)
}

function create4thPost(post, callback)    {
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime()});
        callback();
    }, 3000)
}

getPosts()

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
create4thPost({ title: 'Post Four', body: 'This is post four' }, getPosts);

