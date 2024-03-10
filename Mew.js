// MewJS - Created by @TiComputer on Github.

function getRandomImage() { var imageSources = [ "https://us-tuna-sounds-images.voicemod.net/0da81bf2-124e-4af5-98af-256061c3e85c-1707288995342.jpg", "https://i.kym-cdn.com/editorials/icons/original/000/008/032/meiwing_meme.jpg", "https://i.ytimg.com/vi/zSV6pheDwdY/maxresdefault.jpg", "https://ih1.redbubble.net/image.5408788152.4124/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg", "https://us-tuna-sounds-images.voicemod.net/78d048fd-10c4-4ac3-b43e-6500b980b118-1702929016185.png", "https://mewing.coach/blog/wp-content/uploads/2022/11/mewing-hurts-how-to-mew-without-pain.gif", "https://fly.storage.tigris.dev/pai-images/6984484dc0da4abea2227cf94f51a744.png", ]; var randIndex = Math.floor(Math.random() * imageSources.length); return imageSources[randIndex]; } function mewImage() { var img = document.createElement("img"); img.src = getRandomImage(); document.body.appendChild(img); } function mewAudio() { var audio = new Audio('https://www.myinstants.com/media/sounds/bye-bye-mewing_fMVssQz.mp3'); audio.play(); } function mewAnim() { var img = document.createElement("img"); img.src = getRandomImage(); img.style.position = 'fixed'; img.style.top = '50%'; img.style.left = '50%'; img.style.transform = 'translate(-50%, -50%)'; img.style.width = '100px'; img.style.height = '100px'; document.body.appendChild(img); var angle = 0; setInterval(function() { angle += 2; img.style.transform = 'translate(-50%, -50%) rotate(' + angle + 'deg)'; }, 50); } function mewTapG() { var gameContainer = document.createElement('div'); gameContainer.style.width = '100%'; gameContainer.style.height = '100vh'; gameContainer.style.position = 'relative'; gameContainer.style.backgroundColor = '#f0f0f0'; gameContainer.style.overflow = 'hidden'; document.body.appendChild(gameContainer); var scoreDisplay = document.createElement('div'); scoreDisplay.textContent = 'Score: 0'; scoreDisplay.style.position = 'absolute'; scoreDisplay.style.top = '10px'; scoreDisplay.style.left = '10px'; scoreDisplay.style.fontSize = '20px'; gameContainer.appendChild(scoreDisplay); var score = 0; function createMew() { var mew = document.createElement('img'); mew.src = getRandomImage(); mew.style.position = 'absolute'; mew.style.width = '100px'; mew.style.height = '100px'; mew.style.left = Math.random() * (gameContainer.offsetWidth - 100) + 'px'; mew.style.top = Math.random() * (gameContainer.offsetHeight - 100) + 'px'; mew.style.cursor = 'pointer'; mew.addEventListener('click', function() { score++; scoreDisplay.textContent = 'Score: ' + score; gameContainer.removeChild(mew); createMew(); }); gameContainer.appendChild(mew); } for (var i = 0; i < 10; i++) { createMew(); } } 
