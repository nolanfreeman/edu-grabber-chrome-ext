
console.log("hellooooo");

let UDEMY = 'udemy.com';
let COURSERA = 'coursera.com';

let templateData = {
    title : "",
    desc : "",
    dur : "",
    authors : [],
    site : "",
    link : "",
    tags : ""
}

let author = {
    name : "",
    img : "",
    social : {
        "twitter" : "",
        "insta" : "",
        "linkedIn" : "",
        "website" : "",
        "github" : ""
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let site = window.location.href;
    let data = Object.create(templateData);
    
    if(site.includes(UDEMY)) {
        data.title = document.getElementsByClassName("clp-lead__title")[0].textContent;
        data.desc = document.getElementsByClassName("clp-lead__headline")[0].textContent;
        data.dur = document.getElementsByClassName("curriculum-header-length")[0].textContent;
        data.authors.push(Object.create(author));
        data.authors[0].name = document.getElementsByClassName("instructor-links__link")[0].textContent;
        data.authors[0].img = document.getElementsByClassName("styles--introduction-asset__img--9iitL")[0].getAttribute('src');
        // data.authors[0].social.twitter = ;
        // data.authors[0].social.insta = ;
        // data.authors[0].social.linkedIn = ;
        // data.authors[0].social.website = ;
        // data.authors[0].social.github = ;

        data.site = "Udemy";
        data.link = site;
        // data.tags = ;

    } else if(site.includes(COURSERA)) {

    }
    chrome.runtime.sendMessage(data);
    
});