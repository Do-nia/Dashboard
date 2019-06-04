(function () {
    var getData = new XMLHttpRequest();
    getData.open('GET', 'https://jsonplaceholder.typicode.com/posts')
    getData.send();
    getData.addEventListener("load", function () {
        var getdata = JSON.parse(this.response);
        displayName(getdata);
        displayContent(getdata);
        displayAction(getdata);
    })
    /* get title */
    function displayName(dname) {
        var remove = 0;
        dname.map(function (element, index) {
            var namePara = document.createElement("p");
            namePara.setAttribute("class", remove++)
            namePara.innerHTML = element.title;
            $("#name").append(namePara);
        })
    }
    /* get content */
    function displayContent(dcont) {
        var remove = 0;
        dcont.map(function (element, index) {
            var contentPara = document.createElement("p");
            contentPara.setAttribute("class", remove++)
            contentPara.innerHTML = element.body;
            $("#content").append(contentPara);
        })
    }
    /* add actions */
    function displayAction(daction) {
        var remove = 0;
        daction.map(function (element, index) {
            var div = document.createElement("div");
            div.setAttribute("class", remove++ + " row")
            var btn1 = document.createElement("button")
            btn1.append("edit");
            var btn2 = document.createElement("button")
            btn2.append("delete");
            div.appendChild(btn1);
            btn1.setAttribute("class", "editbtn")
            div.appendChild(btn2);
            btn2.setAttribute("class", "deletebtn")
            $("#edit").append(div);
        })
    }
    /* delete button */
    $(document).on("click", ".deletebtn", function (e) {
        var btnD = e.target;
        var btnDNumber = btnD.parentElement.classList[0];
        if (confirm("are you sure you want to delete this")) {
            $(`p.${btnDNumber}`).remove();
            $(`div.${btnDNumber}`).remove();
        }
    })
    /* edit button */
    $(document).on("click", ".editbtn", function (e) {
        var btnE = e.target;
        var btnENumber = btnE.parentElement.classList[0];
        localStorage.setItem("postName", $(`p.${btnENumber}`)[0].innerHTML)
        localStorage.setItem("postContent", $(`p.${btnENumber}`)[1].innerHTML)
        window.location.href = "edit.html";
    })
})();
