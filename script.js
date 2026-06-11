
particlesJS("particles-js",{
particles:{
number:{value:40,density:{enable:true,value_area:400}},
color:{value:"#c77dff"},
shape:{type:"circle"},
opacity:{value:0.5,random:true},
size:{value:3,random:true},
line_linked:{enable:true,distance:150,color:"#c77dff",opacity:0.3,width:1},
move:{enable:true,speed:2}
},
interactivity:{
detect_on:"canvas",
events:{onhover:{enable:true,mode:"grab"},onclick:{enable:true,mode:"push"}},
modes:{grab:{distance:180,line_linked:{opacity:1}},push:{particles_nb:4}}
},
retina_detect:true
});


const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index){
  slides.forEach(slide=>slide.classList.remove('active'));
  dots.forEach(dot=>dot.classList.remove('active-dot'));
  slides[index].classList.add('active');
  dots[index].classList.add('active-dot');
}


setInterval(()=>{
  currentSlide++;
  if(currentSlide >= slides.length) currentSlide = 0;
  showSlide(currentSlide);
},50000);


dots.forEach((dot,index)=>{
  dot.addEventListener('click',()=>{currentSlide=index; showSlide(index);});
});


const slider = document.querySelector('.slider');
slider.addEventListener('click', ()=>{
  currentSlide++;
  if(currentSlide >= slides.length) currentSlide = 0;
  showSlide(currentSlide);
});