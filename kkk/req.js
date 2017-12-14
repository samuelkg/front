$.ajax({
    url: "https://jsonplaceholder.typicode.com/comments",
    method: "GET",
    success: function(data) {
       console.log(data[0].email);
       console.log(data[data.length - 1].email);
   }
});

