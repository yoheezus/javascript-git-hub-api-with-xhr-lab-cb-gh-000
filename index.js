function getRepositories() {
    var username = document.getElementById("username").value
    console.log(username)
    const  req = new XMLHttpRequest();
    req.addEventListener("load", displayRepositories)
    req.open("GET", "https://api.github.com/users/" + username + "/repos")
    req.send()
}

function displayRepositories() {
    var repos = JSON.parse(this.responseText)
    console.log(repos)
}
