var bgImages = [];
var currentImage = 0;

// change body CSS for background image block
document.body.style.height = "100%"; 
document.body.style.width = "auto";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center center";
document.body.style.backgroundAttachment = "fixed";
document.body.style.backgroundRepeat = "no-repeat";  
document.body.style.overflow = "hidden";

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

//document.getElementsByClassName("footer-wrapper")[0].style.dispay = "none";
