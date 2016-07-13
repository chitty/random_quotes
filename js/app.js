(function() {
    var app = angular.module('randomQuotes', []);

    app.controller('QuotesController', function() {
        this.chosen = quotes[Math.floor(Math.random()*quotes.length)];

        this.updateQuote = function() {
            this.chosen = quotes[Math.floor(Math.random()*quotes.length)];
        }
    });

    var quotes = [
        { text: 'Float like a butterfly, sting like a bee.', author: "Muhammad Ali", img: "http://www.pixhoster.info/f/2016-07/5e4d2a344738d2df2935241f0f3943ac.jpg" },
        { text: 'The man who has no imagination has no wings.', author: "Muhammad Ali", img: "http://www.pixhoster.info/f/2016-07/5e4d2a344738d2df2935241f0f3943ac.jpg" },
        { text: 'I can accept failure, everyone fails at something. But I can\'t accept not trying. ', author: "Michael Jordan", img: "http://www.pixhoster.info/f/2016-07/b8f6f9ec6d47d247ac7160d90f3829de.jpg" },
        { text: 'Look deep into nature, and then you will understand everything better.', author: "Albert Einstein", img: "http://www.pixhoster.info/f/2016-07/4cdccc0e32ea69c71d43e2792b71fa0c.jpg" },
        { text: 'Education is the most powerful weapon which you can use to change the world.', author: "Nelson Mandela", img: "http://www.pixhoster.info/f/2016-07/0ff07d94cba721f409be7c9875e70970.jpg" },
        { text: 'All we have to decide is what to do with the time that is given us.', author: "J. R. R. Tolkien", img: "http://www.pixhoster.info/f/2016-07/a6b0f63c0f2b05b5d51e358b2c40b668.jpg" },
        { text: 'Life is what happens while you are busy making other plans.', author: "John Lennon", img: "http://www.pixhoster.info/f/2016-07/8f9cd0697f59c7adeb8f77b80cfe2dbd.jpg" },
        { text: 'We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.', author: "Carl Sagan", img: "http://www.pixhoster.info/f/2016-07/f0141f22d76545793cc91dfd7ab8c125.jpg" },
        { text: 'Stay hungry, stay foolish.', author: "Steve Jobs", img: "http://www.pixhoster.info/f/2016-07/08c8cddb1553e188ae9eef5407a01a0b.jpg" },
        { text: 'Eat food, not too much, mostly plants.', author: "Michael Pollan", img: "http://www.pixhoster.info/f/2016-07/cf6887281aaf6e6e99ea9d47ae06efea.jpg" },
        { text: 'The purpose of our lives is to be happy.', author: "Dalai Lama", img: "http://www.pixhoster.info/f/2016-07/a96ea28b1d6077415080da1ad2fc5615.jpg" },
        { text: 'An eye for an eye only ends up making the whole world blind.', author: "Mahatma Gandhi", img: "http://www.pixhoster.info/f/2016-07/0911bb587d5cacf15348ba300d0170b7.jpg" },
        { text: 'Price is what you pay. Value is what you get.', author: "Warren Buffett", img: "http://www.pixhoster.info/f/2016-07/c479993bd0b18427d61121937edeca43.jpg" },
    ];

})();
