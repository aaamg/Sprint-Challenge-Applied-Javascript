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

const cardsContainer = document.querySelector('.cards-container');

// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//      .then(res => {
//          console.log('response data: ', res.data.articles);
//          res.data.articles.forEach( (head, img, name) => {
//              const newCard = cardCreator(head, img, name);
//              cardsContainer.appendChild(newCard);
//          })
//      })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((res) => {
        console.log('data:', res.data)

        res.data.articles.bootstrap.forEach(item => {
            let newCard = cardCreator(item.authorName, item.authorPhoto, item.headline);
            cardsContainer.appendChild(newCard);
        })
        res.data.articles.javascript.forEach( item => {
            let newCard = cardCreator(item.authorName, item.authorPhoto, item.headline);
            cardsContainer.appendChild(newCard)
        })
        res.data.articles.jquery.forEach( item => {
            let newCard = cardCreator(item.authorName, item.authorPhoto, item.headline);
            cardsContainer.appendChild(newCard)
        })
        res.data.articles.node.forEach( item => {
            let newCard = cardCreator(item.authorName, item.authorPhoto, item.headline);
            cardsContainer.appendChild(newCard)
        })
        res.data.articles.technology.forEach( item => {
            let newCard = cardCreator(item.authorName, item.authorPhoto, item.headline);
            cardsContainer.appendChild(newCard)
        })
    })

function cardCreator(paraHead, paraIMG, paraName){
    const card = document.createElement('div'),
          headline = document.createElement('div'),
          author = document.createElement('div'),
          imgContainer = document.createElement('div'),
          theImg = document.createElement('img'),
          span = document.createElement('span');
    
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(theImg);
    author.appendChild(span);
    
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = paraHead;
    theImg.src = paraIMG;
    span.textContent = paraName;

    return card

};
