var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
let cards = document.querySelector(".cards");

main.addEventListener("mousemove", (t) => {
  gsap.to(cursor, {
    x: t.x,
    y: t.y,
    duration: 1,
    ease: "back.out",
  });
});

cards.addEventListener("mouseenter", function(){
  gsap.to(cursor,{
    scale: 2,
    
    duration: 1,
    ease: "back.out",
  })
})
cards.addEventListener("mouseleave", function(){
  gsap.to(cursor,{
    scale: 0.7,
    duration: 1,
    ease: "back.out",
  })
})






let cat = document.getElementById('category')
let cont = document.getElementById('country')

cat.addEventListener("change",(e)=>{
let newcat = e.target.value;
cards.innerHTML = "";
let selectedCountry = cont.value;
data(newcat, selectedCountry);
})
cont.addEventListener("change",(f)=>{
let newcont = f.target.value;
cards.innerHTML = "";
let selectedCategory = cat.value;
    data(selectedCategory, newcont);
})







function data(newcat,newcont) {
  let country = newcont;
  let category = newcat;
  let apiKey = `8f99ebeff8e946bfadcf6952fe73651f`;
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

  fetch(url).then((response) => {
    response.json().then((result) => {
      console.log(result);
      result.articles.forEach((e) => {
        if (e.urlToImage != null) {
          cards.innerHTML += `<div class="card" style="width: 18rem;">
           <img src=${e.urlToImage} class="card-img-top" alt="...">
           <div class="card-body">
    <h5 class="card-title">${e.title}</h5>
    <p class="card-text">${e.description}</p>
    <a href="#" class="btn btn-primary">Explore More</a>
</div>
</div>`;
        }
      });
    });
  });
}

data("business","in");
