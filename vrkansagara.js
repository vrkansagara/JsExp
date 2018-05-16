var url = 'https://vrkansagara.in'
documentLinks = document.links
  var isHostIsUp = false;
function doesConnectionExist() {
  var xhr = new XMLHttpRequest();
  var host = url;
  xhr.open('HEAD', host, true);
  xhr.send();
  xhr.addEventListener('readystatechange', processRequest, false);

  function processRequest(e) {
        console.log("processRequest=>" + e);
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 304) {
        isHostIsUp = true;
      } else {
        isHostIsUp = false
      }
          alert('==>' + isHostIsUp);
    }
    return isHostIsUp;
  }
  alert('asfasfa=>' + isHostIsUp);
}
if (doesConnectionExist()) {
  alert('connection exists!');
} else {
  alert('connection doesn\'t exist!');
}
alert('am at the end.');