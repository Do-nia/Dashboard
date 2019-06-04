var postname = localStorage.getItem("postName");
$(".postName").val(postname);
var postcontent = localStorage.getItem("postContent");
$(".postContent").val(postcontent);
$("form").on("submit", function (e) {
    e.preventDefault();
    if ($(".postName").val() === "" || $(".postContent").val() === "") {
        alert("you must enter content");
    }
    else {
        window.location.href = "index.html";
    }
})