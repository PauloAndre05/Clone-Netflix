
let articleContainer=document.querySelector(".container_articles6");
const articleClone=document.cloneNode(true);

let articles=[{title:"What is Netflix?",
text1:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
text2:"You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"},{title:"What is Netflix?",
text1:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
text2:"You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"}];

articles.map(({title,text1,text2},index)=>{
    articleContainer.innerHTML+=`
    <article class="a1" onClick="setArticle(${index})">
        <div class="texts">
            <p>${title}</p>
            <div class="bi-plus-lg"></div>
        </div>
        <div class="text2" id="see${index}">
            <p>${text1}</p>
            <p>${text2}</p>
        </div>
        </article>
        `
    });
    const setArticle=(index)=>{
        let see=document.querySelector(`#see${index}`);
        see.style.display == 'block'?see.style.display='none':see.style.display='block'; 
    }
    