function requestCommitDate(pagename){
  const xhrequest = new XMLHttpRequest();
  const url = 'https://api.github.com/repos/TheGiraffe/Mauipedia/commits?path=contribute/'+pagename+'&page=1&per_page=1';
  xhrequest.open('GET',url,true);
  xhrequest.onload = function(){
    const getcommitDate = JSON.parse(this.response);
    var commitDate = getcommitDate[0].commit.committer.date;
    console.log(commitDate);
    var cleanupDate = new Date(commitDate).toDateString();
    $("#lastUpdated").html(cleanupDate);
  }
  xhrequest.send();
  /*curl -s "https://api.github.com/repos/TheGiraffe/Mauipedia/commits?path=contribute/defaultpagetemplate.html&page=1&per_page=1"|\jq -r '.[0].commit.committer.date' */
}
