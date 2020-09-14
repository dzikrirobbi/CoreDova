/*!
 * Author : dzkrrbb (https://dzkrrbb.com)
 * Organization : RDPL (https://rdpl.co.id)
 * Date : 2020-09-14
 */

$(function(){
    layouts();
    routers();
    //var pageURL = window.location.href;
    //var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
    //console.log(lastURLSegment);
});

// Load Function for Header & Footer
function layouts() {
    // Load Main App
    document.querySelector("coredova-app").innerHTML ='<coredova-overlay onclick="closeSide()"></coredova-overlay><coredova-header></coredova-header><coredova-main class="container"></coredova-main><coredova-footer></coredova-footer>';

    // Load Header
    fetch("./pages/layouts/header.html")
        .then(response => {
            return response.text()
        })
            .then(data => {
                document.querySelector("coredova-header").innerHTML = data;
            });

    // Load Footer
    fetch("./pages/layouts/footer.html")
        .then(response => {
            return response.text()
        })
            .then(data => {
                document.querySelector("coredova-footer").innerHTML = data;
            });
}

// Load Function Router
function routers() {
    // Get Main Page
    var mainPage = "main";
    // Get Variable of Page
    var page = getvar('page');
    // Load Main Content
    if(!page) {
        // Load Main Page
        fetch("./pages/main/"+mainPage+".html")
            .then(response => {
                return response.text()
            })
                .then(data => {
                    document.querySelector("coredova-main").innerHTML = data;
                });
        // Get Custom CSS from Main Page
        $.ajax({
            url: "./pages/main/"+mainPage+".css",
            success: function(data){
                // Load CSS
                fetch("./pages/main/"+mainPage+".css")
                    .then(response => {
                        return response.text()
                    })
                        .then(data => {
                            document.querySelector("coredova-main").insertAdjacentHTML("beforebegin", "<style>"+data+"</style>");
                        });
            },
            error: function(data){
                // Nothing to do
            },
        })
        // Get Custom JS from Page
        $.ajax({
            url: "./pages/main/"+mainPage+".js",
            success: function(data){
                // Load JS
                fetch("./pages/main/"+mainPage+".js")
                    .then(response => {
                        return response.text()
                    })
                        .then(data => {
                            document.querySelector("coredova-main").insertAdjacentHTML("afterend", "<script>"+data+"</script>");
                        });
            },
            error: function(data){
                // Nothing to do
            },
        })
    } else {
        // Get Content
        $.ajax({
            url: "./pages/"+page+"/"+page+".html",
            success: function(data){
                // Load Page
                fetch("./pages/"+page+"/"+page+".html")
                    .then(response => {
                        return response.text()
                    })
                        .then(data => {
                            document.querySelector("coredova-main").innerHTML = data;
                        });
            },
            error: function(data){
                // Load 404 Page
                fetch("./pages/404/404.html")
                    .then(response => {
                        return response.text()
                    })
                        .then(data => {
                            document.querySelector("coredova-main").innerHTML = data;
                        });
            },
        })
        // Get Custom CSS from Page
        $.ajax({
            url: "./pages/"+page+"/"+page+".css",
            success: function(data){
                // Load CSS
                fetch("./pages/"+page+"/"+page+".css")
                    .then(response => {
                        return response.text()
                    })
                        .then(data => {
                            document.querySelector("coredova-main").insertAdjacentHTML("beforebegin", "<style>"+data+"</style>");
                        });
            },
            error: function(data){
                // Nothing to do
            },
        })
        // Get Custom JS from Page
        $.ajax({
            url: "./pages/"+page+"/"+page+".js",
            success: function(data){
                // Load JS
                fetch("./pages/"+page+"/"+page+".js")
                    .then(response => {
                        return response.text()
                    })
                        .then(data => {
                            document.querySelector("coredova-main").insertAdjacentHTML("afterend", "<script>"+data+"</script>");
                        });
            },
            error: function(data){
                // Nothing to do
            },
        })
    }
}

// Get Variable Value 
function getvar(name,url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Open Sidebar
function openSideLeft() {
    document.querySelector("coredova-sidebar-left").style.display = "block";
    document.querySelector("coredova-overlay").style.display = "block";
}
function openSideRight() {
    document.querySelector("coredova-sidebar-right").style.display = "block";
    document.querySelector("coredova-overlay").style.display = "block";
}
function openSideBottom() {
    document.querySelector("coredova-sidebar-bottom").style.display = "block";
    document.querySelector("coredova-overlay").style.display = "block";
}
  
// Close Sidebar
function closeSide() {
    document.querySelector("coredova-sidebar-left").style.display = "none";
    document.querySelector("coredova-sidebar-right").style.display = "none";
    document.querySelector("coredova-sidebar-bottom").style.display = "none";
    document.querySelector("coredova-overlay").style.display = "none";
}