const current = document.querySelector('#current');
//querySelectorAll returns a node list similar to an Array
const imgs = document.querySelectorAll('.imgs img');

const opacity = 0.6;

//set first image opacity
imgs[0].style.opacity = opacity;

//An alternative to the above code is below reducing code lines
//const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];

//imgs.forEach(img => img.addEventListener('click', e => (current.src = e.target.src)));


imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e){
  //Reset the opacity
  imgs.forEach(img => (img.style.opacity = 1));
  //Change current image to src of clicked image
  current.src = e.target.src;

  //Add fading class
  current.classList.add('fade-in');

  //Remove fade-in class after .5seconds
  setTimeout(() => current.classList.remove('fade-in'), 500);

  //Change the opacity to opacity var
  e.target.style.opacity = opacity;
}