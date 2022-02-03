var MAINAPP = (function(nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    /*
        This IIFE is the start of an application. The first thing we want to do is download all the posts, 
        comments and todos so that we can work with them. Add the code in order to do that. 
        Also, make sure that you add the posts, comments and todos to the MAINAPP variable so they 
        are accessible outside this function (e.g. nsp.posts = posts & return nsp). 
        Because the code is asynchronous, you will need to consider the best way to do that.
    */
    fetch(url + 'posts/')
    .then(data => data.json())
    .then(obj => {
        console.log(obj);
        nsp.posts = obj;
    })
    .catch(err => console.log('Failed to retrive posts: ' + err));

    fetch(url + 'comments/')
    .then(data => data.json())
    .then(obj => {
        console.log(obj);
        nsp.comments = obj;
    })
    .catch(err => console.log('Failed to retrive comments: ' + err));

    fetch(url + 'todos/')
    .then(data => data.json())
    .then(obj => {
        console.log(obj);
        nsp.todos = obj;
    })
    .catch(err => console.log('Failed to retrive todos: ' + err));

    //public
    // nsp.posts = posts;
    // nsp.comments = comments;
    // nsp.todos = todos
    return nsp;
})(MAINAPP || {});