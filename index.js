function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener('load', showRepositories)
  req.open('GET', 'https://api.github.com/users/octocat/repos')
  req.send()
}

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText)
  const source = document.getElementById('repository-template').innerHTML
  const template = Handlebars.compile(source)
  const repoList = template(repos)
  document.getElementById('repositories').innerHTML = repoList
}
