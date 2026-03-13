const images = [
  "threshold/1.png","threshold/2.png","threshold/3.png","threshold/4.png",
  "threshold/5.png","threshold/6.png","threshold/7.png","threshold/8.png",
  "threshold/9.png","threshold/10.png","threshold/11.png","threshold/12.png",
  "threshold/13.png","threshold/14.png","threshold/15.png","threshold/16.png",
  "threshold/17.png","threshold/18.png","threshold/19.png","threshold/20.png"
];

function createRandomImage() {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  const img = document.createElement("img");
  img.src = randomImage;

  img.style.position = "absolute";
  img.style.opacity = 0;
  img.style.transition = "opacity 6s ease";

  // proportional random size
  const size = Math.random() * 400 + 100;
  img.style.width = `${size}px`;
  img.style.height = "auto";

  // X position (full width)
  const maxX = window.innerWidth - size;

  // Y position (bottom 2/3 only)
  const startY = window.innerHeight / 3;
  const maxY = window.innerHeight - size;
  const randomY = Math.random() * (maxY - startY) + startY;

  img.style.left = `${Math.random() * maxX}px`;
  img.style.top = `${randomY}px`;

  document.getElementById("container").appendChild(img);

  // fade in
  setTimeout(() => {
    img.style.opacity = 10;
  }, 20);

  // fade out after 30 seconds
  setTimeout(() => {
    fadeOutAndRemove(img);
  }, 30000);

  // spawn next image (1–5 seconds later)
  setTimeout(createRandomImage, Math.random() * 4000 + 1000);
}

function fadeOutAndRemove(img) {
  img.style.transition = "opacity 5s ease";
  img.style.opacity = 0;

  setTimeout(() => {
    img.remove();
  }, 5000);
}

// Start the first image after 10 seconds
setTimeout(createRandomImage, 5000);
