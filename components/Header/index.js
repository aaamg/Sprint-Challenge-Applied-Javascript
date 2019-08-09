// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the header-container component

document.querySelector(".header-container").appendChild(Header());

function Header() {

    //create elements
    //const headGen = (para1, para2, para3, para4) => {
        const topDiv = document.createElement('div');
        const span1 = document.createElement('span');
        const headTitle = document.createElement('h1');
        const span2 = document.createElement('span');

        //append elements
        head.appendChild(topDiv);
        head.appendChild(span1);
        head.appendChild(headTitle);
        head.appendChild(span2);

        //add content
        span1.textContent = "MARCH 28, 2019";
        headTitle.textContent = "Lambda Times";
        span2.textContent = "98";

        //add classes
        topDiv.classList.add('header');
        span1.classList.add('date');
        span2.classList.add('temp');

        return topDiv;
    };