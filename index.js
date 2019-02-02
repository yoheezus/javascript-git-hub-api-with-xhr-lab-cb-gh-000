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
    const repoList = `<ul>${repos.map(
        r =>
            "<li>" +
            r.name +
            ' - <a href="#" data-repo="' +
            r.name +
            '" onclick="getCommits(this)"> Get Commits </a>' +
            ' - <a href="#" data-repo = "' +
            r.name +
            '" onclick="getBranches(this)"> Get Branches </a></li>'
    ).join("")}</ul>`
    document.getElementById("repositories").innerHTML = repoList
}

function getCommits() {

}

function getBranches() {

}
