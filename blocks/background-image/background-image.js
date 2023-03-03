
var bgImages = [];
var currentImage = 0;

function nextImage() {
    if (currentImage == bgImages.length) currentImage = 0;
    document.body.style.backgroundImage = "url('" + bgImages[currentImage] + "')";
    currentImage++;
}

export default function decorate(block) {
    block.style.display = "none";
    block.querySelectorAll('img').forEach((img) => {
        bgImages.push( img.src );
    });

    nextImage();
    const interval = setInterval(function() {nextImage()}, 3000);
}
