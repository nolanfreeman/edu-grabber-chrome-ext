

'use strict';

// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };
let url = "http://udemy.com/"

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
   console.log(sender);
});


chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    console.log(tabs[0].id);
  chrome.tabs.sendMessage(tabs[0].id, {message : "this is the message"});
});

