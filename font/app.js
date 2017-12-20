(function(window, document) {
    
    const URI_POSTS = "https://jsonplaceholder.typicode.com/posts";
    const URI_USERS ="https://jsonplaceholder.typicode.com/users"

    getPosts(URI_POSTS);
    getAuthors(URI_USERS);


})(window, document);

function getPosts(URI) {
    $.getJSON(URI, (data) => {
        let items = [];
    
    $.each(data, function(key, val) {
        items.push(postDom(key,val));
    });

    console.log(items);

    $( "<ul/>", {
        "class": "artigos",
        html: items.join( "" )
    }).appendTo( ".post_list");

    });

    
}

function postDom(key, value) {
    let now = Date();
    let post =
    '<li class="artigoslista">'+
        '<h4>'+ value.title +'</h4>'+
        '<p>'+ value.body +'</p>'+
        '<span>'+ now +'</span>'+
    '</li>';

    return post    
}


function getAuthors(URI) {

    $.getJSON(URI, (data) => {
        let items = [];
        let el = document.querySelector('.autores');

        for(let i in data) {
            items.push(authorDom(data[i]));
        }

        el.innerHTML = items.join("");
    });



}

function authorDom(item) {
    let author =
    '<li>'+
        '<div class="bola"></div>'+
        '<div class="info">'+
            '<span>' +item.username +'</span>'+ '<br>'+
            '<span>' +item.email +'</span>'+
        '</div>'+
    '</li>';

    return author;     
}