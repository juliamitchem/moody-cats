//*Code credits:
//https://jsfiddle.net/macloo/t7zfxsd8/
//https://github.com/russellgoldenberg/scrollama
//https://www.linkedin.com/learning/scrollytelling-creating-a-one-page-web-experience/triggering-events?autoAdvance=true&autoSkip=false&autoplay=true&resume=false&u=41282748




//scrollama


const scroller = scrollama();

scroller
.setup({
 step: ".step",
 offset: 0.25,
 })
.onStepEnter((response) => {
    console.log(response)
     response.element.classList.remove('inactive')
    response.element.classList.add('active')
 })
 .onStepExit((response) => {
   console.log(response)
     response.element.classList.remove('active')
     response.element.classList.add('inactive')
 });

window.addEventListener("resize", scroller.resize);




//events

//tail

let image1T = document.querySelector('#taildown');
let image2T = document.querySelector('#scaredtail');
let image3T = document.querySelector('#tailwave');
let image4T = document.querySelector('#tailwaver');
let text1T = document.querySelector('#taildowntext');
let text2T = document.querySelector('#scaredtailtext');
let text3T = document.querySelector('#tailwavetext');
let text4T = document.querySelector('#tailwavertext');

image2T.style.display = 'none';
image3T.style.display = 'none';
image4T.style.display = 'none';
text2T.style.display = 'none';
text3T.style.display = 'none';
text4T.style.display = 'none';

image1T.onclick = (e) => {
  image2T.style.display = 'block';
  image1T.style.display = 'none';
  text2T.style.display = 'block';
  text1T.style.display = 'none';
   e.target.setAttribute('src', image2T);
   e.target.setAttribute('src', text2T);
};

image2T.onclick = (e) => {
  image3T.style.display = 'block';
  image2T.style.display = 'none';
  text3T.style.display = 'block';
  text2T.style.display = 'none';
   e.target.setAttribute('src', image3T);
   e.target.setAttribute('src', text3T);
};

image3T.onclick = (e) => {
  image4T.style.display = 'block';
  image3T.style.display = 'none';
   e.target.setAttribute('src', image4T);
  text4T.style.display = 'block';
  text3T.style.display = 'none';
   e.target.setAttribute('src', text4T);
};

image4T.onclick = (e) => {
  image1T.style.display = 'block';
  image4T.style.display = 'none';
   e.target.setAttribute('src', image1T);
  text1T.style.display = 'block';
  text4T.style.display = 'none';
   e.target.setAttribute('src', text1T);
};
//eyes

let image1E = document.querySelector('#dilatedpupils');
let image2E = document.querySelector('#half-closed');
let image3E = document.querySelector('#slits');
let image4E = document.querySelector('#stare');
let text1E = document.querySelector('#dilatedpupilstext');
let text2E = document.querySelector('#half-closedtext');
let text3E = document.querySelector('#slitstext');
let text4E = document.querySelector('#staretext');

image2E.style.display = 'none';
image3E.style.display = 'none';
image4E.style.display = 'none';
text2E.style.display = 'none';
text3E.style.display = 'none';
text4E.style.display = 'none';

image1E.onclick = (e) => {
  image2E.style.display = 'block';
  image1E.style.display = 'none';
   e.target.setAttribute('src', image2E);
  text2E.style.display = 'block';
  text1E.style.display = 'none';
   e.target.setAttribute('src', text2E);
};

image2E.onclick = (e) => {
  image3E.style.display = 'block';
  image2E.style.display = 'none';
   e.target.setAttribute('src', image3E);
   text3E.style.display = 'block';
   text2E.style.display = 'none';
    e.target.setAttribute('src', text3E);
};

image3E.onclick = (e) => {
  image4E.style.display = 'block';
  image3E.style.display = 'none';
   e.target.setAttribute('src', image4E);
   text4E.style.display = 'block';
   text3E.style.display = 'none';
    e.target.setAttribute('src', text4E);
};

image4E.onclick = (e) => {
  image1E.style.display = 'block';
  image4E.style.display = 'none';
   e.target.setAttribute('src', image1E);
   text1E.style.display = 'block';
   text4E.style.display = 'none';
    e.target.setAttribute('src', text1E);
};

//body

let image1B = document.querySelector('#play');
let image2B = document.querySelector('#sly');
let image3B = document.querySelector('#relaxed');
let image4B = document.querySelector('#inquisitive');
let text1B = document.querySelector('#playtext');
let text2B = document.querySelector('#slytext');
let text3B = document.querySelector('#relaxedtext');
let text4B = document.querySelector('#inquisitivetext');

image2B.style.display = 'none';
image3B.style.display = 'none';
image4B.style.display = 'none';
text2B.style.display = 'none';
text3B.style.display = 'none';
text4B.style.display = 'none';

image1B.onclick = (e) => {
  image2B.style.display = 'block';
  image1B.style.display = 'none';
   e.target.setAttribute('src', image2B);
  text2B.style.display = 'block';
  text1B.style.display = 'none';
   e.target.setAttribute('src', text2B);
};

image2B.onclick = (e) => {
  image3B.style.display = 'block';
  image2B.style.display = 'none';
   e.target.setAttribute('src', image3B);
  text3B.style.display = 'block';
  text2B.style.display = 'none';
   e.target.setAttribute('src', text3B);
};

image3B.onclick = (e) => {
  image4B.style.display = 'block';
  image3B.style.display = 'none';
   e.target.setAttribute('src', image4B);
  text4B.style.display = 'block';
  text3B.style.display = 'none';
   e.target.setAttribute('src', text4B);
};

image4B.onclick = (e) => {
  image1B.style.display = 'block';
  image4B.style.display = 'none';
   e.target.setAttribute('src', image1B);
  text1B.style.display = 'block';
  text4B.style.display = 'none';
   e.target.setAttribute('src', text1B);
};

//ears

let image1EA = document.querySelector('#perkedup');
let image2EA = document.querySelector('#flat');
let image3EA = document.querySelector('#side');
let image4EA = document.querySelector('#forward');
let text1EA = document.querySelector('#perkeduptext');
let text2EA = document.querySelector('#flattext');
let text3EA = document.querySelector('#sidetext');
let text4EA = document.querySelector('#forwardtext');

image2EA.style.display = 'none';
image3EA.style.display = 'none';
image4EA.style.display = 'none';
text2EA.style.display = 'none';
text3EA.style.display = 'none';
text4EA.style.display = 'none';

image1EA.onclick = (e) => {
  image2EA.style.display = 'block';
  image1EA.style.display = 'none';
   e.target.setAttribute('src', image2EA);
  text2EA.style.display = 'block';
  text1EA.style.display = 'none';
   e.target.setAttribute('src', text2EA);
};

image2EA.onclick = (e) => {
  image3EA.style.display = 'block';
  image2EA.style.display = 'none';
   e.target.setAttribute('src', image3EA);
  text3EA.style.display = 'block';
  text2EA.style.display = 'none';
   e.target.setAttribute('src', text3EA);
};

image3EA.onclick = (e) => {
  image4EA.style.display = 'block';
  image3EA.style.display = 'none';
   e.target.setAttribute('src', image4EA);
  text4EA.style.display = 'block';
  text3EA.style.display = 'none';
   e.target.setAttribute('src', text4EA);
};

image4EA.onclick = (e) => {
  image1EA.style.display = 'block';
  image4EA.style.display = 'none';
   e.target.setAttribute('src', image1EA);
  text1EA.style.display = 'block';
  text4EA.style.display = 'none';
   e.target.setAttribute('src', text1EA);
};
