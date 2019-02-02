

function getRepositories() {
    var username = document.getElementById("username").value;
    const  req = new XMLHttpRequest();
    req.addEventListener("load", displayRepositories)
    req.open("GET", "https://api.github.com/users/" + username + "/repos")
    req.send()
}

function displayRepositories() {
    var repos = JSON.parse(this.responseText)
    console.log(repos)
    const repoList = "<ul>" + repos.map(repo => {
        const dataUsername = 'data-username="' + repo.owner.login + '"'
        const dataRepoName = 'data-repository="' + repo.name + '"'
        return (`
                <li>
                    <h2>${repo.name}</h2>
                    <a href="${repo.html_url}">${repo.html_url}</a><br>
                    <a href="#" ${dataRepoName} ${dataUsername} onclick="getCommits(this)">Get Commits</a><br>
                    <a href="#" ${dataRepoName} ${dataUsername} onclick="getBranches(this)">Get Branches</a>
                </li>`
            )

    }).join("") + "</ul>"
    // const repoList = `<ul>${repos.map(
    //     r =>
    //         "<li>" +
    //         r.name +
    //         ' - <a href="#" data-repo="' +
    //         r.name +
    //         '" onclick="getCommits(this)"> Get Commits </a>' +
    //         ' - <a href="#" data-repo = "' +
    //         r.name +
    //         '" onclick="getBranches(this)"> Get Branches </a></li>'
    // ).join("")}</ul>`
    document.getElementById("repositories").innerHTML = repoList
}

function getCommits(el) {
    const name = el.dataset.repo
    const req = new XMLHttpRequest()
    req.addEventListener("load", displayCommits)
    req.open("GET", "https://api.github.com/repos/"+ username.value + "/" + name + "/commits")
    req.send()
}

function displayCommits(){
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
    const name = el.dataset.repo
    console.log(name)
    const req = new XMLHttpRequest()
    req.addEventListener("load", displayBranches)
    req.open("GET", "https://api.github.com/repos/" + username.value + "/" + name + "/branches")
    req.send()
}

function displayBranches() {
    var branches = JSON.parse(this.responseText)
    console.log(branches)
    const branchesList = `<ul>${branches.map(
        branch =>
            "<li>" +
            branch.name +
            "</li>"
    ).join("")}</ul>`
    document.getElementById("details").innerHTML = branchesList
}
