

function getRepositories() {
    var username = document.getElementById("username").value;
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

function getCommits(el) {
    const name = el.dataset.repo
    const req = new XMLHttpRequest()
    req.addEventListener("load", showCommits)
    req.open("GET", "https://api.github.com/repos/"+ username.value + "/" + name + "/commits")
    req.send()
}

function showCommits(){
    var commits = JSON.parse(this.responseText)
    console.log(commits)
    const commitsList = `<ul>${commits.map(
        commit =>
            "<li><strong>" +
            commit.commit.author.name +
            "</strong> - " +
            commit.commit.message +
            "</li>"
    ).join("")}</ul>`
    document.getElementById("details").innerHTML = commitsList
}

function getBranches(el) {
    console.log("Get branches function")
    const name = el.dataset.repo
    const req = new XMLHttpRequest()
    req.addEventListener("load", showBranches)
    req.open("GET", "https://api.github.com/repos/" + username.value + "/" + name + "/branches")
}

function showBranches() {

}
