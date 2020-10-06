function requestCommitDate(pagename){
  const githubxhrequest = new XMLHttpRequest();
  const url = 'https://api.github.com/repos/TheGiraffe/Mauipedia/commits?path=contribute/'+pagename+'&page=1&per_page=1';
  githubxhrequest.open('GET',url,true);
  githubxhrequest.onload = function(){
    const getcommitDate = JSON.parse(this.response);
    var commitDate = getcommitDate[0].commit.committer.date;
    console.log(commitDate);
    var cleanupDate = new Date(commitDate).toDateString();
    $("#lastUpdated").html(cleanupDate);
  }
  githubxhrequest.send();
  /*curl -s "https://api.github.com/repos/TheGiraffe/Mauipedia/commits?path=contribute/defaultpagetemplate.html&page=1&per_page=1"|\jq -r '.[0].commit.committer.date' */
}
function sideBarnavBar(){
  $("#navBar").load("../siteassets/nav.html");
  $("#navBar").html('<button class = "navbutton" id = "sidebar_button">sidebar</button>"');
  $("#sidebar").html("this is the sidebar");
}
