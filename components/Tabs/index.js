// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// const var1 = {
//   config : null,
//   data : {
//     topics : [
//       "javascript",
//       {"b": "bootstrap"},
//       {"c": "technology"},
//       {"d": "jquery"},
//       {"e": "node.js"},
//     ]
//   }
// }
// console.log(var1.data.topics[4].e);
//-------------

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then (response => {
    //console.log(response);
    funcName(response.data.topics);

})
.catch( (err) => {
  console.log(err.stack)
})
//document.querySelector(".tabs").appendChild(funcName());
function funcName (axiosData){
   //create elements
   
   const tabContainer = document.querySelector(".topics");
   axiosData.forEach( e => {
    const div1 = document.createElement('div');
    //add content
   div1.textContent = e;
   //add classes
   div1.classList.add("tab");
     tabContainer.appendChild(div1)
   })
   //.appendChild(div1);
   //append elements
   //nothing to append to a parent
  //console.log(div1)

};
