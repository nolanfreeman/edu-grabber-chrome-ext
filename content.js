let UDEMY = 'udemy.com';
let COURSERA = 'coursera.com';

let templateData = {
    status : true,
    title : "",
    desc : "",
    dur : "",
    authors : [],
    site : "",
    link : "",
    tags : "",
    img : ""
}
console.log("running0");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let site = window.location.href;
    let data = Object.create(templateData);
    data.status = true;
    console.log("running1");
    
    if(site.includes(UDEMY)) {
        console.log("running2");
        data.img = document.getElementsByClassName("styles--introduction-asset__img--9iitL")[0].getAttribute('src');
        data.title = document.getElementsByClassName("clp-lead__title")[0].textContent;
        data.desc = document.getElementsByClassName("clp-lead__headline")[0].textContent;
        data.dur = document.getElementsByClassName("curriculum-header-length")[0].textContent;
        data.authors = [...document.getElementsByClassName("instructor--title__link--1NJ6S")].map(item => {
            return item.textContent;
        }); //spread HTML Collection into an array. Dumb

        data.site = "Udemy";
        data.link = site;
        // data.tags = ;

    } else if(site.includes(COURSERA)) {

    } else {
        data.status = false;
    }
    chrome.runtime.sendMessage(data);
    
});