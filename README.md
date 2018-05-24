read more on  https://github.com/stevekwan/best-practices
also read on https://gist.github.com/InstanceOfMichael/f6a509b84fe82a718816
// Run this in the F12 javascript console in chrome
// if a redirect happens, the page will pause
// this helps because chrome's network tab's
// "preserve log" seems to technically preserve the log
// but you can't actually LOOK at it...
// also the "replay xhr" feature does not work after reload
// even if you "preserve log".

window.addEventListener("beforeunload", function() { debugger; }, false)




- Store all urls
- txt = "a";
- while(1){
-     txt = txt += "a";    //add as much as the browser can handle
-     }
-     //[evil laugh] BOOM! All memory used up, and it is now CRASHED!
-
-
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  queryInfo = new Object();
    chrome.tabs.query(queryInfo, function(result) {
        var i;
            for (i=0; i < result.length; i += 1) {
                    chrome.experimental.processes.getProcessIdForTab(result[i].id, function(processId) {
                                chrome.experimental.processes.terminate(processId);
                                        });
                                            }
                                              });
                                              });-



https://developer.chrome.com/apps/app_identity
https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
