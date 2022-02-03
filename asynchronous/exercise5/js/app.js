/*
    Create a function that will retrieve the posts from the jsonplaceholder site (https://jsonplaceholder.typicode.com/posts). 
    Set up the function so you can pass in the userID and the function will assign only the posts for that user to a variable. The data should be stored in an array.
*/

var userData;

const getPosts = async function(id) {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    let posts = [];

    posts = await fetch(url).then(data => data.json());

    return posts.filter(obj => obj.userId === id);
};

getPosts(9).then(posts => {
    userData = posts;
    console.log(userData);
});
