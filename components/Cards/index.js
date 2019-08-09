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

// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//   .then (response => {
//     //console.log(response);
// });

// document.querySelector(".cards-container").appendChild(cardFunc());

// function cardFunc (axiosData){

//     //create elements
//     const topDiv = document.createElement('div');
//     const div2 = document.createElement('div');  
//     const div3 = document.createElement('div');
//     const div4 = document.createElement('div');
//     const img1 = document.createElement('img');
//     const span1 = document.createElement('span');    
    
//     //append elements
//     topDiv.appendChild(div2);
//     topDiv.appendChild(div3);
//     div3.appendChild(div4);
//     div4.appendChild(img1);
//     div3.appendChild(span1);

//     //add content
//     div2.textContent = "card";
//     img1.textContent = axiosData;
//     span1.textContent = `By ${axiosData}`;

//     //add classes
//     topDiv.classList.add('card');
//     div2.classList.add('headline');
//     div3.classList.add('author');
//     div4.classList.add('img-container');



//     return topDiv

// };



