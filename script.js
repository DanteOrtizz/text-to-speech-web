const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
    {
        image: './img/drink.jpeg',
        text: "I'm thisty"
    },
    {
        image: './img/burger.jpeg',
        text: "I'm hungry"
    },
    {
        image: './img/happy.jpeg',
        text: "I'm happy"
    },
    {
        image: './img/hurt.jpeg',
        text: "I'm hurt"
    },
    {
        image: './img/tired.jpeg',
        text: "I'm tired"
    }
];

data.forEach(createBox);

function createBox(item) {
    const box = document.createElement('div');

    const { image, text } = item;

    box.classList.add('box');
    box.innerHTML = `
        <img src="${image}" alt="${text}" />
        <p class="info">${text}</p>
    `;

    // todo - speak event

    main.appendChild(box);
}

