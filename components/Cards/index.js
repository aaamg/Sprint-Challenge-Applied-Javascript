// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then (cardFunc)
  .catch( (err) => {
    console.log(err)
  })
// .then (response => {
//     console.log(response)
// })

function cardFunc (axiosData){
    const container = document.querySelector(".cards-container");
    //forEch
    console.log(axiosData)
    const data = axiosData.data.articles;
    data.bootstrap.forEach(forFunc);
    data.javascript.forEach(forFunc);
    data.jquery.forEach(forFunc);
    data.node.forEach(forFunc);
    data.technology.forEach(forFunc);
    
    function forFunc(param1){
        const name = param1.authorName;
        const photo = param1.authorPhoto;
        const headline = param1.headline;
        const theImage = document.createElement('img');
        const topDiv = document.createElement('div');
        topDiv.classList.add('card');
        const headlineDiv = document.createElement('div'); 
        headlineDiv.classList.add('headline');
        headlineDiv.textContent = headline;
        topDiv.appendChild(headlineDiv);
        container.appendChild(topDiv);
        const div3 = document.createElement('div');
        topDiv.appendChild(div3);
        div3.classList.add('author');
        const div4 = document.createElement('div');
        div3.appendChild(div4);
        div4.classList.add('img-container');
        theImage.src = photo;
        div4.appendChild(theImage);
        const span1 = document.createElement('span');  
        div3.appendChild(span1);
        span1.textContent = name;
        
    }
};


