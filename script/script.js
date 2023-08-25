const KEYS = document.querySelectorAll('.key');


KEYS.forEach((KEY, index) => {
    const number = index < 9 ? '0' + (index + 1) : (index + 1);
    const soundLocation = `../media/piano-keys/key${number}.mp3`
    KEY.addEventListener('click', (e) => {
        e.preventDefault();
        playSound(soundLocation);
    });
})

function playSound(soundLocation) {
    console.log('a')
    new Audio(soundLocation).play();
}