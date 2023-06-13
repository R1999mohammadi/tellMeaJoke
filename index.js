
const jokes = [
    'Why did the melon jump into the lake? It wanted to be a water-melon',
    'Grandma: Back in our days, you could buy bread, milk, soaps, spices, eggs, meat, all for a dollarLittle Kid: You can’t do that now. They have CCTVs everywhere',
    'You can\’t trust atoms. They make up everything!',
    ' What do you call an elephant that doesn\’t matter? An irrelephant.',
    'Why do you smear peanut butter on the road? To go with the traffic jam.',
    'Where did Napoleon keep his armies? In his sleevies',
    

]

let jokeButton = document.querySelector('#joke');
jokeButton;
let text = document.querySelector(".textArea");


jokeButton.addEventListener('click', () => {
    let randomJoke = Math.floor(Math.random()* jokes.length);
    text.textContent = jokes[randomJoke];
});

