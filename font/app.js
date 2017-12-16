(function(window, document) {
    
    const URI_POSTS = "https://jsonplaceholder.typicode.com/posts";

    getPosts(URI_POSTS);


})(window, document);

function getPosts(URI) {
    $.getJSON(URI, (data) => {
        console.log(data.length);
    });

}