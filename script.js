const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
    {
        image: './img/drink.jpeg',
        text: "I'm thirsty"
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

    box.addEventListener('click', () => {
        setTextMessage(text);
        speakText();

        // add active efect
        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 800);
    });

    // todo - speak event

    main.appendChild(box);
}

// Init speech synth
const message = new SpeechSynthesisUtterance();

// Populate select voice
let voices = [];

function getVoices() {
    voices = speechSynthesis.getVoices();

    voices.forEach(voice => {
        const option = document.createElement('option');

        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;

        voicesSelect.appendChild(option);
    });
}

// Set text
function setTextMessage(text) {
    message.text = text;
}

// speak text
function speakText() {
    speechSynthesis.speak(message);
}

// Set voice
function setVoice(e) {
    message.voice = voices.find(voice => voice.name === e.target.value);
}

// Voice Changed
speechSynthesis.addEventListener('voiceschanged', getVoices);

// Toggle text box
toggleBtn.addEventListener('click', () =>
     document.getElementById('text-box').classList.toggle('show')
);

// Close btn
closeBtn.addEventListener('click', () =>
     document.getElementById('text-box').classList.remove('show')
);

// make voice stop reading when closing the text 
closeBtn.addEventListener('click', () => {
    speechSynthesis.cancel();
});

// Change Voice
voicesSelect.addEventListener('change', setVoice);

// Read text button
readBtn.addEventListener('click', () => {
    setTextMessage(textarea.value);
    speakText();
});

getVoices();
