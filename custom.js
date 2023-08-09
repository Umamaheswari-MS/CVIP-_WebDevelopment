const quotes = [{
    quote:'That it will never come again is what makes life so sweet.',
    writer:'Emily Dickinson'
}, {
    quote:'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    writer: 'Ralph Waldo Emerson'
}, {
    quote:'All the worlds a stage, and all the men and women merely players.',
    writer:'William Shakespeare'
}, {
    quote:'Self-awareness and self-love matter. Who we are is how we lead.',
    writer:'Brene Brown'
}, {
    quote:'Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.',
    writer:'Voltaire'
},]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    
    quote.innerHTML = quotes[random].quote;

    
    writer.innerHTML = quotes[random].writer;
})
