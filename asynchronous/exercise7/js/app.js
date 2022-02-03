var MAINAPP = (function(nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    /*
        The following promise code is inside a module pattern. Change the promise code so that it uses async await instead. You will want to use an IIFE for this. Make sure to catch any errors.
    */

    (async function(){
        try {
            let posts = await fetch(url + 'posts/').then(data => data.json());
            console.log(posts);
            nsp.posts = posts;
        } catch(err) {
            console.error('Failed to retrive posts: ' + err)
        }
    })()
    
    // fetch(url + 'posts/')
    // .then(data => data.json())
    // .then(obj => {
    //     console.log(obj);
    //     nsp.posts = obj;
    // })
    // .catch(err => console.log('Failed to retrive posts: ' + err));

    return nsp;
})(MAINAPP || {});