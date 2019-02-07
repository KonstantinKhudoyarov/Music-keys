'use strict'

function playSound(e) {
    var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
    var key = document.querySelector('.keys__key[data-key="' + e.keyCode + '"]');
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('js-playing');
}

function removeTransition() {
    this.classList.remove('js-playing');
}

window.addEventListener('keydown', playSound);

var keys = document.querySelectorAll('.keys__key');
var keysArray = Array.prototype.slice.call(keys, '');
keysArray.forEach(function(key) {
    key.addEventListener('animationend', removeTransition);
});