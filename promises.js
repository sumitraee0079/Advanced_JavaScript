const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
]

function getPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output
    }, 1000);
}


function createPost(post)    {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve()
            }   else{
                reject('Error: something went wrong')
            }
    })
    
    }, 1000)
}

function deletePost()    {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length > 0){
                resolve(posts.pop())
            }   else{
                reject('Array is empty now')
            }
        }, 1000)
    })
}

createPost( { title: 'Post Three', body: 'This is post three' })
.then(() => {
    getPosts()
    deletePost().then((deletedElement) =>   {
        console.log(deletedElement)
        getPosts()
        deletePost().then(() => {
            getPosts()
            deletePost().then(() => {
                getPosts()
                deletePost().then(() => {})
                .catch((err) => {
                    console.log('Inside catch block', err)
                })
            })
        })
    })
}).catch(err => console.log(err))


const user = {
    username: 'sumi',
    updateLastUserActivityTime: '13th of Jan'
}
//createPost({ title: 'Post Three', body: 'This is post three' })
//.then(getPosts)
// .catch(err => console.log(err));

// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye')

})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())



Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));


function updateLastUserActivityTime(post)    {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Promise.resolve().then(() => console.log(new Date().getTime()))
    })
    
    }, 1000)
}


function userUpdatesPost()  {
Promise.all([getPosts, updateLastUserActivityTime])
    .then(([getPostsresolves, updateLastUserActivityTimeresolves]) => {
        console.log(updateLastUserActivityTime)
    })
    .catch(err => console.log(err))
}
