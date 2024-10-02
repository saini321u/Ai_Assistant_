let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("voice");

function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = "hi-GB";
  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  let day = new Date();
  let hours = day.getHours();
  // console.log(hours);
  if (hours >= 0 && hours < 12) {
    speak("Good morning sir jii");
  } else if (hours >= 12 && hours < 20) {
    speak("Good afternoon sir jii");
  } else {
    speak("Good Evening sir jii");
  }
}
window.addEventListener("load", () => {
  wishMe();
});

let speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript;
  //   console.log(event);
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  recognition.start();
//   btn.style.display = "none";
//   voice.style.display = "block";
});

function takeCommand(message) {
   if (message.includes("hello") || message.includes("hey")) {
    speak("Hello sir, what can i help you?");
  } else if (message.includes("who are you")) {
    speak("I AM VIRTUAL ASSISTANT, CREATED BY PUSHPENDRA SAINI");
  } else if (message.includes("open youtube")) {
    speak("open youtube...");
    window.open("https://www.youtube.com");
  } else if (message.includes("open google")) {
    speak("open google...");
    window.open("https://www.google.com");
  } else if (message.includes("open instagram")) {
    speak("open instagram...");
    window.open("https://www.instagram.com");
  } else if (message.includes("open instagram")) {
    speak("open instagram...");
    window.open("https://www.google.com/");
  }
  else if (message.includes("time")) {
    let time = new Data().toLocalString(undefined, {hours: "numeric",minute: "numeric",second: "numeric"})
    speak(time)    
  }
  else{
    speak(`this is what i found on internet regarding ${message}`)
    window.open(`https://www.google.com/search?q=${message}`)
  }
}


