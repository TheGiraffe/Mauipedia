function requestCommitDate(pagename){
  const githubxhrequest = new XMLHttpRequest();
  const url = 'https://api.github.com/repos/TheGiraffe/Mauipedia/commits?path=contribute/'+pagename+'&page=1&per_page=1';
  githubxhrequest.open('GET',url,true);
  githubxhrequest.onload = function(){
    const getcommitDate = JSON.parse(this.response);
    var commitDate = getcommitDate[0].commit.committer.date;
    console.log(commitDate);
    var cleanupDate = new Date(commitDate).toDateString();
    var cleanupTime = new Date(commitDate).toTimeString();
    $("#lastUpdated").html(cleanupDate + " " + cleanupTime);
  }
  githubxhrequest.send();
  /*curl -s "https://api.github.com/repos/TheGiraffe/Mauipedia/commits?path=contribute/defaultpagetemplate.html&page=1&per_page=1"|\jq -r '.[0].commit.committer.date' */
}
function sideBarnavBar(){
  $("#navBar").load("../siteassets/nav.html");
  $("#sidebar").load("../siteassets/sidebar.html");
}
