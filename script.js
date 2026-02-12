// Elements
const envelope = document.getElementById('envelope-container');
const letter = document.getElementById('letter-container');
const yesBtn = document.querySelector('.yes-btn');
const bunnyImg = document.getElementById('bunny-img');
const noBtn = document.querySelector('.no-btn');
const letterWindow = document.querySelector('.letter-window');
const sadCat = document.getElementById('sad-cat-img');

const title = document.getElementById('letter-title');
const buttons = document.getElementById('letter-buttons');
const finalText = document.getElementById('final-text');

const videoContainer = document.getElementById('video-container');
const videoElement = document.getElementById('celebration-video');

const musica = new Audio('./assets/japi.mp3');

// Click Envelope to Open Letter

envelope.addEventListener('click', () => {
    envelope.style.display = 'none';
    letter.style.display = 'flex';

    setTimeout(() => {
        document.querySelector('.letter-window').classList.add('open');
    }, 50);
});


noBtn.addEventListener('mouseover', () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random()* Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = 'transform 0.3s ease';
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// adding song to the yes button
yesBtn.addEventListener('mouseenter', () => {
    musica.currentTime = 0;
    musica.play().catch(error => {
        console.log("El audio necesita una interacción previa en el sobre para sonar.");
    });
});

// Stop music when mouse leaves the yes button
yesBtn.addEventListener('mouseleave', () => {
    musica.pause(); 
}); 

// Show sad cat when hovering over NO button
noBtn.addEventListener('mouseenter', () => {
    sadCat.style.display = 'block';
    
    const rect = noBtn.getBoundingClientRect();
    const windowRect = letterWindow.getBoundingClientRect();

    sadCat.style.left = (rect.left - windowRect.left) + 'px';
    sadCat.style.top = (rect.top - windowRect.top - 100) + 'px';
});

noBtn.addEventListener('mouseleave', () => {
    sadCat.style.display = 'none';
});

yesBtn.addEventListener('click', () => {
    document.body.classList.add('accepted');
    letterWindow.classList.add('accepted');
    title.style.display = 'none';
    buttons.style.display = 'none';

    bunnyImg.src = "./assets/bunny_dancing.gif";
    bunnyImg.style.width = "250px"; 
    finalText.style.display = 'block';

    document.body.classList.add('accepted');
    letterWindow.classList.add('accepted');
    title.style.display = 'none';
    buttons.style.display = 'none';
    bunnyImg.src = "./assets/bunny_dancing.gif";
    bunnyImg.style.width = "250px"; 
    finalText.style.display = 'block';

    setTimeout(() => {
        bunnyImg.style.display = 'none';
        finalText.style.display = 'none';

        const celebrationContainer = document.getElementById('celebration-container');
        const videoElement = document.getElementById('celebration-video');
        const teAmoText = document.getElementById('te-amo-text');

        celebrationContainer.style.display = 'flex';
        videoElement.play();

        teAmoText.style.display = 'block';

        if (musica) musica.volume = 0.2; 
    }, 5000);
});