function getRepositories() {
    var username = document.getElementById("username").value
    console.log(usernameInput)
    const  req = new XMLHttpRequest();
    req.addEventListener("load", showRepositories)
    req.open("GET", "https://api.github.com/users/" + username + "/repos")
}
