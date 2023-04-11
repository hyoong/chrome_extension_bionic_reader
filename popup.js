var chrome = require('chrome');

function on_load() {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, {'code': 'console.log("Popup loaded!");'});
    });
}
chrome.tabs.onUpdated.addListener(on_load);

// HTML for the popup
html = /*
<!DOCTYPE html>
<html>
<head>
    <title>My Extension</title>
    <script src="popup.js"></script>
</head>
<body>
    <h1>My Extension</h1>
    <p>Click the button to log a message to the console</p>
    <button id="my-button">Click me</button>
</body>
</html>
 */

// Write the HTML to a file
with open('popup.html', 'w') as f) {
    f.write(html);
}