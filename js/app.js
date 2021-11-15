$(()=>{
   const conWrap = $('.content-container');
   const sect_1 = $('#section-1');
   const sect_2 = $('#section-2');
   const sect_3 = $('#section-3');
   const h1_sect1 = $('#section-1 h1');
   const h1_sect2 = $('#section-2 h1');
   const h1_sect3 = $('#section-3 h1');

//    console.log(conWrap);
const tl = gsap.timeline();

tl.from(conWrap, {autoAlpha: 0, duration: 4});
tl.from(sect_1, {xPercent: -100, duration: 1}, '-=2')



      ////////////////////////document ready function ends here
});