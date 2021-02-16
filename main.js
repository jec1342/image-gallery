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
btn.onclick = function viewMode () {
    if(btn.getAttribute('class') === 'dark') {
        overlay.setAttribute('class', 'light');
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundcolor = "rgba(0,0,0,0.5)";
    } else {
        overlay.setAttribute('class', 'dark');
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundcolor = "rgba(0,0,0,0)";
    }
}