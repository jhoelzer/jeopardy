// const grid = new JeopardyGridHeader ({
//     numberOfRows: 1,
//     numberOfColumns: 6,
//     targetElement: document.querySelector("main"),
//     cellClasses: ["red-border"]
// });

const grid = new JeopardyGrid ({
    numberOfRows: 5,
    numberOfColumns: 6,
    targetElement: document.querySelector("main"),
    cellClasses: ["green-border"],
    categoryIDs: [21, 67, 680, 309, 582, 267]
});

function randNum(max) {
    return Math.floor(Math.random() * max);
}

fetch("http://jservice.io/api/category?id=21")
    .then(res => res.json())
    .then(data => {
        let animalCategory = data.clues[randNum(260)];
        let question = animalCategory.question;
        let answerText = animalCategory.answer;
        // console.log(`Category: ${data.title} | Clue: ${question}`);
        // console.log(answerText);
    });

fetch("http://jservice.io/api/category?id=67")
    .then(res => res.json())
    .then(data => {
        let tvCategory = data.clues[randNum(235)];
        let question = tvCategory.question;
        let answerText = tvCategory.answer;
        // console.log(`Category: ${data.title} | Clue: ${question}`);
        // console.log(answerText);
    });

fetch("http://jservice.io/api/category?id=680")
    .then(res => res.json())
    .then(data => {
        let mythCategory = data.clues[randNum(135)];
        let question = mythCategory.question;
        let answerText = mythCategory.answer;
        // console.log(`Category: ${data.title} | Clue: ${question}`);
        // console.log(answerText);
    });

fetch("http://jservice.io/api/category?id=309")
    .then(res => res.json())
    .then(data => {
        let moviesCategory = data.clues[randNum(130)];
        let question = moviesCategory.question;
        let answerText = moviesCategory.answer;
        // console.log(`Category: ${data.title} | Clue: ${question}`);
        // console.log(answerText);
    });

fetch("http://jservice.io/api/category?id=582")
    .then(res => res.json())
    .then(data => {
        let geoCategory = data.clues[randNum(220)];
        let question = geoCategory.question;
        let answerText = geoCategory.answer;
        // console.log(`Category: ${data.title} | Clue: ${question}`);
        // console.log(answerText);
    });

fetch("http://jservice.io/api/category?id=267")
    .then(res => res.json())
    .then(data => {
        let natureCategory = data.clues[randNum(155)];
        let question = natureCategory.question;
        let answerText = natureCategory.answer;
        // console.log(`Category: ${data.title} | Clue: ${question}`);
        // console.log(answerText);
    });