const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1 declare baseURL of the API (required endpoint for the NYT data)
const key = 'II8WGUaGhR8hbk8pR3bQiOGEgAteGlE3'; // 2 lets NYT know which user is accessing their API
let url; //3 global url, able to use anywhere in our code

//SEARCH FORM
const searchTerm = document.querySelector('.search');  // querySelector returns the first element in the specified class
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section'); // referred to display results field

nav.style.display = 'none';

let pageNumber = 0; // START AT PAGE NUMBER POSITION 0
let displayNav = false;

//        
searchForm.addEventListener('submit', fetchResults); 
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage); //3

                     //1 function declaration // event handling function (receives object containg properties aka variables and methods aka functions*)
function fetchResults(e) {
    e.preventDefault(); // because in this case we submit form to GET not POST
    // Assemble the full URL
    url = 
    baseURL + //refers back to base url we set in line 1
    '?api-key=' +  // label what's to follow
    key +  // actual key info
    '&page=' + // label for pg
    pageNumber + // pg data
    '&q=' + // query? aka search
    searchTerm.value; //3 creates versatile/changeable query sting; study ?, &, and &q = when possible! .... Value is whatever is typed in the box (built in term, does not need defined)
    console.log(url); // 4 just logs string to see it

    if(startDate.value !== '') {  //if start date does not equal empty date range, then it creates/adds to our url string to fetch our results
        //setting a limit on our results
        console.log(startDate.value)
      url += '&begin_date=' + startDate.value;
    };
  
  
    if(endDate.value !== '') {
      url += '&end_date=' + endDate.value;
    };
      //1
  fetch(url)  // starting a promise / url is defined above
  .then(function(result) {
      // until we know our url, we can't jsonify it, "find the results, then display the results"  this ENTIRE FETCH FUNCTION WILL BE USED WORD FOR WORD FOR API'S
  console.log(result)
  return result.json(); //2 captures jsonified results

}).then(function(json) {
    displayResults(json); //3 Display jsonified results. This function needs defined further down
});
}

function displayResults(json) {
    // while (aka "do while") is a conditional statement: go back and reread this module section "DISPLAY RESULTS 05"
    while ( section.firstChild) {
        section.removeChild(section.firstChild); //1 clears previous results / child elements before new results are added if you don't refresh between searches
    }

    let articles = json.response.docs; // way of stepping into the json

    if(articles.length === 10) {
        nav.style.display = 'block'; //shows the nav display (next page button) if 10 items are in the array
      } else {
        nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
      }
    
    

    if(articles.length === 0) {
        


    }else {
        for(let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');  //modify our HTML elements within browser only
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');  //1
            let para = document.createElement('p');   //1
            let clearfix = document.createElement('div');  // what IS this? (Display results 6)

            let current = articles[i]; //iterable ... could refer to any specific article, will keep looping to show all articles

            link.href = current.web_url; //url link to article corresponding to whichever index we're at.... (.web_url is an attribute in the array in the browser console)
            link.textContent = current.headline.main; //clickable headline link to url

            para.textContent = 'Keywords: ';

            for(let j = 0; j < current.keywords.length; j++) {
                //5
                let span = document.createElement('span');   
                //6
                span.textContent += current.keywords[j].value + ' ';   
                //7
                para.appendChild(span);
            }

            if(current.multimedia.length > 0) {
                //basically if an image exists for the article
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url; //first position associated image? [0]
                //4
                img.alt = current.headline.main; //backup to image is just the headline
              }

                clearfix.setAttribute('class','clearfix');

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img); //5
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
};

  
  function nextPage(e){
    console.log("Next button clicked");
    pageNumber++;  // adding 1 page at a time (page# + 1)
    fetchResults(e); // callback to displayResults
  } //5
  
  function previousPage(){
    console.log("Next button clicked");
    if (pageNumber > 0) {
      pageNumber--;
    }
    else{
      return;
    }
  } //5