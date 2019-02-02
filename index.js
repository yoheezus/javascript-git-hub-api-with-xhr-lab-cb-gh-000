function getRepositories() {
    var username = document.getElementById("username").value
    console.log(username)
    const  req = new XMLHttpRequest();
    req.addEventListener("load", showRepositories)
    req.open("GET", "https://api.github.com/users/" + username + "/repos")
}

function showRepositories() {
    console.log(this.responseText)
}
