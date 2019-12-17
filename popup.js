

'use strict';

console.log("running0");
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
let header = document.getElementById("header");
let imgText = document.getElementById("resource-img-text");
let img = document.getElementById("resource-img");
let name = document.getElementById("resource-name");
let desc = document.getElementById("resource-desc");
let dur = document.getElementById("resource-dur");
let site = document.getElementById("resource-site-name");
let link = document.getElementById("resource-link");
let authors = document.getElementById("resource-authors");
// let tags = document.getElementById("resource-tags");


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("running1");
  if(request.status) {
    console.log("running2");
    header.textContent = "Resource Found. Verify and press send to confim";
    imgText.src = request.img;
    img.value = request.img;
    name.value = request.title;
    desc.value = request.desc;
    dur.value = request.dur;
    site.value = request.site;
    link.value = request.link;
    authors.value = request.authors.reduce((value, current) => {
      return value += " & " + current;
    })

    console.log(request.authors);
  } else {
    header.textContent = "No Resourse Found... Find the main info page or enter manually";
  }

});


chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  console.log("running3");
    console.log(tabs[0].id);
  chrome.tabs.sendMessage(tabs[0].id, {message : "this is the message"});
});

// let templateData = {
//   title : "",
//   desc : "",
//   dur : "",
//   authors : [],
//   site : "",
//   link : "",
//   tags : ""
// }