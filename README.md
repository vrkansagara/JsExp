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
