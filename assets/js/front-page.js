document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const floating = ".first, .second, .third, .fourth";

  // Animaciones de entrada
  gsap.from(`.hero-title, .hero-text, .main-btn, .outline-btn, ${floating}`, {
    y: 80,
    opacity: 0,
    duration: 0.6,
    ease: "power1.out",
    stagger: 0.15,

    onComplete: () => {
      // Animación flotante infinita
      gsap.to(floating, {
        y: -15,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      });
    },
  });

  // Animaciones con ScrollTrigger
  gsap.utils.toArray(".scroll-animate").forEach((element) => {
    gsap.from(element, {
      y: 100,
      opacity: 0,
      duration: 0.6,
      ease: "power1.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        once: true,
      },
    });
  });
});
