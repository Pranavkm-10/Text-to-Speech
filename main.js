let voices = []
let speech = new SpeechSynthesisUtterance()
let voiceSelect = document.getElementById("select")

function speak(){
    speech.text = ''
    speech.text = document.getElementById("input").value
    speechSynthesis.speak(speech)
}

speechSynthesis.onvoiceschanged = () =>{
    voices = speechSynthesis.getVoices()
    speech.voice = voices[0]

    voices.forEach((voice,i) => voiceSelect.options[i] = new Option(voice.name,i))
}

voiceSelect.addEventListener('change',() =>{
    console.log(voiceSelect.value)
    speech.voice = voices[voiceSelect.value]
})

