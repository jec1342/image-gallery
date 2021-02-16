const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (i =1; i < 6; i++) {
    let pic = ('images/pic' + i +'.jpg')
    const newImage = document.createElement('img');
    newImage.setAttribute('src' ,pic);
    thumbBar.appendChild(newImage);
    newImage.onclick = function changePic() {
        displayedImage.src = pic;
    }
}

/* Wiring up the Darken/Lighten button */
