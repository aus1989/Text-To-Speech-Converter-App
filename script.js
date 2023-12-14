let speech = new SpeechSynthesisUtterance();

let btn = document.querySelector("button");
let textarea = document.querySelector("textarea");

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()=> {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", function(){
  speech.voice = voices[voiceSelect.value];
});

btn.addEventListener("click", function(){
  speech.text = textarea.value;
  window.speechSynthesis.speak(speech);
})