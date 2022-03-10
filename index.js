const api = 'https://type.fit/api/quotes';
const quotes = document.getElementById('quote')
const author = document.getElementById('author')
const anchor = document.getElementById('anchor')
const badge = document.getElementById('badge')

let realData = '';
let quotesData = ''
console.log(quotesData);

const tweetNow = ()=> {
    let tweet = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
    window.open(tweet)
}

const getNewQuotes = ()=>{
    let rnum = Math.floor(Math.random()*1643);
    quotesData = realData[rnum]
    quotes.innerText = `${quotesData.text}`
    quotesData.author == null ? author.innerText = 'Unknown' : author.innerText = `By ${quotesData.author}`;
    // author.innerText = `${quotesData.author}`
    // console.log(rnum);
    // console.log(realData[rnum].text, realData[rnum].author);

}


const getQuotes = async () =>{
   
    
    try {
        //whenever we fetch data via internet we use await
        let data = await fetch(api)
        realData = await data.json();
        getNewQuotes()
        // console.log(realData);
        // console.log(realData[rnum].text, realData[rnum].author);
    } catch (error) {
        
    }
   
    
}  


anchor.addEventListener('click', getNewQuotes)
badge.addEventListener('click', tweetNow)
getQuotes();

