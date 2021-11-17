$(() => {
  //cursor animation
  let mouseCursor = document.querySelector(".cursor");
  // console.log(mouseCursor);
  let navLinks = document.querySelectorAll(".nav-links li");
  console.log(navLinks);
  window.addEventListener("mousemove", cursorMovement);
  function cursorMovement(e) {
    // console.log(e);
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
  }
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      mouseCursor.classList.add("link-grow");
    });
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow");
    });
  });

  //gsap animation
  function init() {
    gsap.registerPlugin(ScrollTrigger);
    const conWrap = $(".content-container");
    const sect_1 = $("#section-1");
    const sect_2 = $("#section-2");
    const sect_3 = $("#section-3");
    const h1_sect1 = $("#section-1 h1");
    const h1_sect2 = $("#section-2 h1");
    const h1_sect3 = $("#section-3 h1");

    //    console.log(conWrap);

    // toggleActions states: onEnter, onLeave, onEnterBack, and onLeaveBack,
    // / toggleActions options: play, pause, resume, reverse, complete, restart, reset, or none
    const tl1 = gsap
      .timeline
      //           {
      //           scrollTrigger: {
      //             trigger: conWrap,
      //             start: '0% top',
      //             end: '30% center',
      //                 markers: {startColor: 'green', endColor: 'red', fontSize: '18px'},
      //                 marker: true,

      //             toggleActions: 'play none resume reverse',
      //             pin: true,
      //             pinSpacing: false
      //           }
      //     }
      ();

    tl1.from(conWrap, { autoAlpha: 0, duration: 4 });
    tl1.from(sect_1, { xPercent: -100, duration: 1 }, "-=2");
    tl1.fromTo(
      h1_sect1,
      { autoAlpha: 0, y: -100 },
      { autoAlpha: 1, y: 0, duration: 0.5 }
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: sect_2,
        //     start: 'top center',//the first value is the start position on the trigger element, second value is the scrollstart position on the viewport
        //     end: 'bottom 40%',//the first value is the end position on the trigger element, second value is the scrollend position on the viewport
        start: "top 30%",
        end: "center center",
        markers: { startColor: "white", endColor: "red", fontSize: "18px" },
        marker: true,
        //     onEnter, onLeave, onEnterBack, and onLeaveBack,
        // play, pause, resume, reverse, complete, restart, reset, or none
        //toggleActions: 'play none resume reverse',
        // pin: true,
        // pinSpacing: false
      },
    });
    tl2.fromTo(
      "#section-2 h1",
      { autoAlpha: 0, y: -100 },
      { autoAlpha: 1, y: 0, duration: 0.5 }
    );
  }

  init();

  ////////////////////////document ready function ends here
});
