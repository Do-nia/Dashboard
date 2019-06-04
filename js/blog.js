$(document).ready(function () {
    $.ajax({
        type: "Get",
        url: "https://jsonplaceholder.typicode.com/posts",
        success: function (response) {
            response.map(function (element) {
                var div = document.createElement("div");
                var title = document.createElement("h3");
                var content = document.createElement("p");
                $(title).append(element.title)
                $(content).append(element.body)
                div.setAttribute("class", "content");
                $(div).append(title)
                $(div).append(content);

                $(".all").append(div);
            })
        },
        error: function (err) {
            alert("error")
        }
    });
});