// content.js

// Get the text of the current webpage
var text = document.body.innerText;

// Send the text back to the background script
chrome.runtime.sendMessage({text: text});
