var MAINAPP = (function(nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    /*
        Change this code to use async await. Make sure to use promise.all so that we await all three pieces of data without awaiting each individually which would take much longer.
        Which pattern do you prefer for this application? promises or async await?
    */

    // fetch(url + 'posts/')
    // .then(data => data.json())
    // .then(obj => {
    //     console.log(obj);
    //     nsp.posts = obj;
    // })
    // .catch(err => console.log('Failed to retrive posts: ' + err));

    // fetch(url + 'comments/')
    // .then(data => data.json())
    // .then(obj => {
    //     console.log(obj);
    //     nsp.comments = obj;
    // })
    // .catch(err => console.log('Failed to retrive comments: ' + err));

    // fetch(url + 'todos/')
    // .then(data => data.json())
    // .then(obj => {
    //     console.log(obj);
    //     nsp.todos = obj;
    // })
    // .catch(err => console.log('Failed to retrive todos: ' + err));

    (async function() {
        try {
            let posts = fetch(url + 'posts/');
            let comments = fetch(url + 'comments/');
            let todos = fetch(url + 'todos/');
    
            let data = await Promise.all([posts, comments, todos]);
    
            nsp.posts = await data[0].json()
            nsp.comments = await data[1].json()
            nsp.todos = await data[2].json()
        } catch(err) {
            console.log('Failed to retrive data: ' + err)
        }
    })()

    return nsp;
})(MAINAPP || {});