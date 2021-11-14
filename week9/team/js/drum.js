window.addEventListener('keydown', function(e) {
    const audioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const audioButton = document.querySelector(`.keys > div[data-key="${e.keyCode}"]`);
    if(!audioElement) {return;}
    console.dir;
    audioElement.currentTime = 0;
    audioElement.play();
    buttonStyle = window.getComputedStyle(audioButton);
    translateMatrix = new WebKitCSSMatrix(buttonStyle.transform);
    if(translateMatrix.m42 < 100) {
        audioButton.style.transform = `translateY(${translateMatrix.m42+10}px)`;
    }else {
        audioButton.style.transform = `translateY(0)`; 
    }
    audioButton.classList.add("playing");
    audioElement.onended = function() {
        audioButton.classList.remove("playing");
    }
    console.log(audioElement);
});
