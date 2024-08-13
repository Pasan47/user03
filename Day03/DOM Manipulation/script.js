
// 2 dimenstional array
const data = [
    {
        image: './images/happy.png',
        text: "I'm Happy"
    },
    {
        image: './images/hungry.jpg',
        text: "I'm Hungry"
    },
    {
        image: './images/sad.jpg',
        text: "I'm Sad"
    },
    {
        image: './images/sleepy.jpg',
        text: "I'm Sleepy"
    },
    {
        image: './images/thirsty.jpg',
        text: "I'm Thirsty"
    },
];

//calling the function
data.forEach(createBox);

//Create the speech boxes
function createBox(item){
    const box = document.createElement('div');

    // Destructure
    const { image, text } = item;
    // console.log(item);

    box.classList.add('box');

    box.innerHTML = `
        <img src="${image}" alt="${text}/> 
        <br>
        <p class="info">${text}</p>
    `;

    

    box.addEventListener('click', () => {
        //alert("exaple");
        setTextMessage(text);
        speakText();
       
        box.classList.add('active');
    })


    //send the images to body
    document.body.appendChild(box);

}

// initiate the message
const message = new SpeechSynthesisUtterance();

// Set Text
function setTextMessage(text){
    message.text = text;
}

// Speak Text
function speakText(){
    speechSynthesis.speak(message);
}

// Toggle visibility of the form
document.getElementById('toggleButton').addEventListener('click', () => {
    const formContainer = document.getElementById('formContainer');
    formContainer.classList.toggle('hidden');
});

// Populate voice options
function populateVoiceOptions() {
    if ('speechSynthesis' in window) {
        const voices = speechSynthesis.getVoices();
        const voiceSelect = document.getElementById('voiceSelect');
        voiceSelect.innerHTML = ''; // Clear existing options
        voices.forEach(voice => {
            const option = document.createElement('option');
            option.value = voice.name;
            option.textContent = voice.name;
            voiceSelect.appendChild(option);
        });
    }
}

// Initialize the boxes and populate voice options when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createBox(data);
    populateVoiceOptions();
    speechSynthesis.onvoiceschanged = populateVoiceOptions; // Update voices if they change
});

