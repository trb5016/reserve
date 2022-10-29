// Usage: 
//
// 1. Install the Custom Javascript for Websites Chrome extension.
// 2. Login using your account.
// 3. Search for your site, date and stay length.
// 4. Navigate to the campsite Details page; there should be a 
//    "Book these Dates" button with a yellow dot.
// 5. Open the Custom Javascript extension and paste this code.
// 6. Edit the click date/time and other parameters below.
// 7. Open the Chrome console and check Preserve log.
// 

var y = 2022;
var M = 10;     // january=1
var d = 29;     // 1st=1
var h = 00;     // 24h time
var m = 2;
var s = 00;

// How long after the target to stop clicking, in milliseconds.
var duration = 30000;

// How long prior to the start time to click, in milliseconds, to
// account for network latency.
var networkLatency = 5;

// =====================================
// End configuration section
// =====================================

function getMillisecondsLeft() {
    var nowDate = new Date();
    var targetDate = new Date(y,M-1,d,h,m,s);
    window.console.log('Target Date/Time: '+targetDate)
    return targetDate - nowDate;
}
function click() {
    var button = document.getElementsByClassName('btn btn-primary')[2];
    if ( button ) {
        window.console.log('clicked at '+getMillisecondsLeft());
        button.click();
    } else {
        window.console.log('nothing to click at '+getMillisecondsLeft());
    }
}

function find() {
  
  var buttons = document.getElementsByClassName('btn btn-primary');
  
  window.console.log('button 1 status: '+buttons[0].disabled)
  window.console.log('button 1 status: '+buttons[1].disabled)
  window.console.log('button 1 status: '+buttons[2].disabled)
    
}

if (getMillisecondsLeft() > 0) {
    window.console.log('queueing at '+getMillisecondsLeft());
    setTimeout(click, getMillisecondsLeft() - networkLatency);
} else if (-getMillisecondsLeft() <= duration) {
    click();
} else {
    window.console.log('all done at '+getMillisecondsLeft());
}    
