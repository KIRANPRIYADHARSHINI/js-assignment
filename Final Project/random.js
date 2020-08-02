let btn=document.getElementById('btn');
let output=document.getElementById('output');

let quotes=[
    '"Imagination is more important than knowledge." - Albert Einstein',

    '"I never dreamed about success, I worked for it." - Estée Lauder',

    '“You can always edit a bad page. You can’t edit a blank page.” - Jodi Picoult',

    '"Never write anything that does not give you great pleasure. Emotion is easily transferred from the writer to the reader." - Joseph Joubert',

    '"My own experience is that once a story has been written, one has to cross out the beginning and the end. It is there that we authors do most of our lying." - Anton Chekhov',

    '"The most valuable of all talents is that of never using two words when one will do. " - Thomas Jefferson',

    '"Write your first draft with your heart. Rewrite with your head." - Mike Rich',

    '"I love deadlines. I like the whooshing sound they make as they fly by." - Douglas Adams'
];

btn.addEventListener('click', function(){
    var randomQuote=quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML=randomQuote;
})

