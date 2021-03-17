// Play by mouse

const keys = document.querySelectorAll('.piano-key')
const piano = document.querySelector('.piano')

const startAudio = (e) => {
    const key = e.target
    const audio = document.getElementById(key.dataset.note)
    if (!audio) return;
    key.classList.add('pressing')
    audio.currentTime = 0
    audio.play()
}

const stopAudio = (e) => {
    e.target.classList.remove('pressing')
}

const startOver = (e) => {
    if (e.target.classList.contains('piano-key')) {
        e.target.classList.add('pressing')
    }
    keys.forEach((key) => {
        key.addEventListener('mouseover', startAudio)
        key.addEventListener('mouseout', stopAudio)
    })
}

const stopOver = (e) => {
    keys.forEach((key) => {
        key.classList.remove('pressing')
        key.removeEventListener('mouseover', startAudio)
        key.removeEventListener('mouseout', stopAudio)
    })
}

piano.addEventListener('mousedown', startAudio)
piano.addEventListener('mousedown', startOver, false)
piano.addEventListener('mouseup', stopOver)
window.addEventListener('mouseup', stopOver)


// Play by keyboard
function playSound2(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`)
    if (!audio) return;
    audio.currentTime = 0
    audio.play()
    key.classList.add('pressing')
}

window.addEventListener('keydown', playSound2)

keys.forEach(key => key.addEventListener('transitionend', removeTransition))

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('pressing')
}

// Notes/Letters


const listBtn = document.querySelector('.btn-container')
const btnLetter = document.querySelector('.btn-letters')
const mainActive = document.querySelector('main')

listBtn.addEventListener('click', changeClass)

function changeClass(e) {
    const elem = document.querySelectorAll(".btn-active");
    [].forEach.call(elem, function (el) {
        el.classList.remove("btn-active");
    });
    e.target.classList.add('btn-active')
    if (btnLetter.classList.contains('btn-active')) {
        mainActive.classList.add('letters-active')
    } else mainActive.classList.remove('letters-active')
}

//fullscreen

document.querySelector('.fullscreen').addEventListener('click', toggleScreen)

function toggleScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
    } else {
        if (document.fullscreenEnabled) {
            document.exitFullscreen()
        }
    }
}