//App screen dimensions:
var screenWidth  = 1000;
var screenHeight = 700;

//Create app window on launch
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('main.html', {
    'bounds':{
      width: screenWidth,
      height: screenHeight,
      //state: "fullscreen" // to run as fullscreen
    }
  });
});
