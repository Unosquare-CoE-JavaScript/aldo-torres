var MAINAPP = (function (nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    /*
        Change this code so that it uses Promise.all to respond once all of the promises have returned. 
        Provide a notification to the console when the promises have completed.
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

    let posts = fetch(url + 'posts/')
        .then(data => data.json());
    let comments = fetch(url + 'comments/')
        .then(data => data.json());
    let todos = fetch(url + 'todos/')
        .then(data => data.json());

    Promise.all([posts, comments, todos])
        .then(data => {
            nsp.posts = data[0];
            nsp.comments = data[1];
            nsp.todos = data[2];
            console.log('All the data is available');
        })
        .catch(err => console.log('Failed to retrive data: ' + err));

    return nsp;
})(MAINAPP || {});