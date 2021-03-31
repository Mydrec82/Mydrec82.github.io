'use strict';


const englishText = document.querySelector('.english__text'),
    widthContainers = document.querySelectorAll('.container'),
    button = document.querySelector('button');

englishText.textContent = "I live in Moscow, where there are four distinct seasons. Because of this, I have to wear different clothes every season.When I go to school, from September to May, I wear a school uniform.These are trousers, vest and shirt.I have several different light - coloured shirts and two pairs of trousers.For physical education lessons, I bring a sports suit and sneakers.In my free time, I like to wear jeans and t - shirts.If it's cold outside, I wear a sweater or a warm jacket. Sneakers I love more than shoes. I have a collection of 7 pairs of sneakers.It is cold in Moscow in winter, so, in order not to freeze, I wear a warm down jacket, knitted hat, scarf and gloves.I wear warm boots on my feet.When the temperature drops below 20° I put on the warm wool socks that my grandmother knitted for me.I like summer very much.Not only due to the fact that I have a holiday at this time, but also because I can wear my favourite shorts and T - shirts.I spend the whole day with my friends in the yard.We play football or ride bikes, so I always wear sportswear.";

button.addEventListener('click', event => {
    event.target.textContent = 'проверяем...'
});

if (document.documentElement.clientWidth < 400) {
    widthContainers.forEach(item => {
        item.style.width = '95%';
    });
}