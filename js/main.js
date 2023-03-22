VanillaTilt.init(document.querySelector(".right-side-main"), {
});

VanillaTilt.init(document.querySelector(".right-side-about"), {
});
VanillaTilt.init(document.querySelectorAll(".advantages-card-item"), {
});



particlesJS("particles-js", {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#0d6efd"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

let menuBurger = document.querySelector('.menu-burger');

menuBurger.addEventListener('click',()=>{
    menuBurger.classList.toggle('show-burger');
})

let header = document.querySelector('header');

window.addEventListener('scroll', () => { 
    let scroll = window.pageYOffset;
    if (scroll > 200){
        header.classList.add('blue-header');
    }  else header.classList.remove('blue-header')
});


const map = new mapgl.Map('map', {
    center: [76.929683, 43.261898],
    zoom: 17,
    key: 'bfd8bbca-8abf-11ea-b033-5fa57aae2de7',
    style: 'c080bb6a-8134-4993-93a1-5b4d8c36a59b'
});
const marker = new mapgl.Marker(map, {
    coordinates: [76.929683, 43.261898],
});