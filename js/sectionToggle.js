const titleCollection = document.querySelectorAll(".js-title");
const bodyCollection = document.querySelectorAll(".js-body");


const allTitle = document.querySelector(".js-all-title");
const emailTitle = document.querySelector(".js-email-title");
const webTitle = document.querySelector(".js-web-title");

const allBody = document.querySelector(".js-all-body");
const emailBody = document.querySelector(".js-email-body");
const webBody = document.querySelector(".js-web-body");


// Click event added to the "all category title"
allTitle.addEventListener('click', ()=>{
    // Looping through all the category titles 
    titleCollection.forEach(title => {
        // If any of the category titles contain the "is-focused" class, the class is removed
        if(title.classList.contains("is-focused")){
            title.classList.remove("is-focused")
        }
    } );
    //the "is-focused" class is then added to the "all category title"
    allTitle.classList.add("is-focused");

    // Looping through all the category body contents 
    bodyCollection.forEach(body => {
        // If any of the category body contents contain the "show" class, the class is removed
        if(body.classList.contains("show")){
            body.classList.remove("show")
        }
    } );
    // the "show" class is then added to the "all category body" content
    allBody.classList.add("show");
})


// Click event added to the "email category title"
emailTitle.addEventListener('click', ()=>{
    // Looping through all the category titles 
    titleCollection.forEach(title => {
        // If any of the category titles contain the "is-focused" class, the class is removed 
        if(title.classList.contains("is-focused")){
            title.classList.remove("is-focused")
        }
    } );
    // the "is-focused" class is then added to the "email category title"
    emailTitle.classList.add("is-focused");

    // Looping through all the category body contents
    bodyCollection.forEach(body => {
        // If any of the category body contents contain the "show" class, the class is removed
        if(body.classList.contains("show")){
            body.classList.remove("show");
        }
    } );
    // the "show" class is then added to the "email category body" content
    emailBody.classList.add("show");
})

// Click event added to the "web category title"
webTitle.addEventListener('click', ()=>{
    // Looping through all the category titles 
    titleCollection.forEach(title => {
        // If any of the category titles contain the "is-focused" class, the class is removed
        if(title.classList.contains("is-focused")){
            title.classList.remove("is-focused")
        }
    } );
    // the "is-focused" class is then added to the "web category title"
    webTitle.classList.add("is-focused");

    // Looping through all the category body contents
    bodyCollection.forEach(body => {
        // If any of the category body contents contain the "show" class, the class is removed
        if(body.classList.contains("show")){
            body.classList.remove("show")
        }
    } );
    // the "show" class is then added to the "web category body" content
    webBody.classList.add("show");
})




