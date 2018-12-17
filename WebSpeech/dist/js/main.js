//get access to speech synth API
const synth = window.speechSynthesis;

//grab all the DOM elements
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');
const body = document.querySelector('body');

//init the voices array - fetching the voices using the API
let voices = [];

function getVoices(){
	voices = synth.getVoices();
	//console.log(voices);

	//loop through voices and create an option for each voice
	voices.forEach(voice => {
		//create an option element
		const option = document.createElement('option');
		//fill option with the voice and language
		option.textContent = voice.name + '('+ voice.lang +')';

		//Set needed option attributes
		option.setAttribute('data-lang', voice.lang);
		option.setAttribute('data-name', voice.name);

		//append the options to the select
		voiceSelect.appendChild(option);
	});
}

getVoices();
if(synth.onvoiceschanged !== undefined){
	synth.onvoiceschanged = getVoices;
}

//Speak function
const speak = () => {

	//check if speaking
	if(synth.speaking){
		console.error('Already speaking');
		return;
	}

	//check if not an empty string being inputted
	if(textInput.value !== ''){
		//add background animation
		body.style.background = '#141414 url(img/wave.gif)';
		body.style.backgroundRepeat = 'repeat-x';
		body.style.backgroundSize = '100% 100%';
		//Get speak text
		const speakText = new SpeechSynthesisUtterance(textInput.value);

		//Speak end - this runs when it is done speaking
		speakText.onend = e => {
			console.log('Done speaking');
			body.style.background = '#141414';
		}

		//Speak error
		speakText.onerror = e => {
			console.error('Something went wrong');
		}

		//Selected voice
		const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

		//loop through voices
		voices.forEach(voice => {
			if(voice.name === selectedVoice){
				speakText.voice = voice;
			}
		});

		//set pitch and rate
		speakText.rate = rate.value;
		speakText.pitch = pitch.value;

		//Speak
		synth.speak(speakText);
	}
};

//eventListeners
//form submission to call speak function
textForm.addEventListener('submit', e => {
	e.preventDefault();
	speak();
	textInput.blur();
});

//the rate value change
rate.addEventListener('change', e => rateValue.textContent = rate.value);

//the pitch value change
pitch.addEventListener('change', e => pitchValue.textContent = pitch.value);

//Voice select change
voiceSelect.addEventListener('change', e => speak());
