import * as chrome from 'chrome';

function on_click(tab) {
  chrome.tabs.execute_script(tab.id, {
    "code": "console.log(\"Clicked!\");"
  });
}

chrome.browserAction.onClicked.addListener(on_click);