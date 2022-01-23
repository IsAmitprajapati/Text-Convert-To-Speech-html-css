let text = document.getElementById('text');
let btn = document.getElementById('speechBtn');

function textTospeech(txt){
    let utternace = new SpeechSynthesisUtterance(txt);
    speechSynthesis.speak(utternace);
}

btn.addEventListener("click",()=>{
    if(text.value !==""){
        textTospeech(text.value);
    }
});