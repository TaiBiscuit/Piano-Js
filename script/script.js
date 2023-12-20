const KEYS = document.querySelectorAll('.key');
const recordBtn = document.getElementById('record-btn');
const playBtn = document.getElementById('play-btn');
const stopBtn = document.getElementById('stop-btn');
const textArea = document.getElementById('text-output');

let recording = false;
let outputText = '';

KEYS.forEach((KEY, index) => {
    const number = index < 9 ? '0' + (index + 1) : (index + 1);
    const soundLocation = `./media/piano-keys/key${number}.mp3`
    KEY.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(KEY.innerText)
        playSound(soundLocation);
    });
});

document.onkeydown = function (e) {
    e.stopPropagation();
    const am = e.key.toUpperCase();
    if(recording){
        outputText += am
        textArea.innerText +=outputText
    }
    KEYS.forEach((KEY, index) => {
        const number = index < 9 ? '0' + (index + 1) : (index + 1);
        if (KEY.innerText == am){
            const soundLocation = `./media/piano-keys/key${number}.mp3`
            playSound(soundLocation);
        }
    });
}

recordBtn.addEventListener('click', (e) => {
    e.preventDefault();
    outputText = '';
    recording = true;
    recordBtn.style.backgroundColor='rgb(9, 88, 9)'
});

stopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    recording = false;
    textArea.value = '';
    recordBtn.style.backgroundColor='rgb(17, 143, 17)'
})

playBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(!recording){
        const outputToArray = outputText.split('');
        outputToArray.forEach(async (KEY, index) => {
            let am = KEY
            setTimeout(() => {
                KEYS.forEach((KEY, index) => {
                    const number = index < 9 ? '0' + (index + 1) : (index + 1);
                    if (KEY.innerText == am){
                        console.log('yes')
                        const soundLocation = `./media/piano-keys/key${number}.mp3`
                        playSound(soundLocation);
                        
                    }
                });
            }, index * 500);
        })
    } else {
        alert('Stop the recording first!')
    }
})

function playSound(soundLocation) {
    new Audio(soundLocation).play();
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}