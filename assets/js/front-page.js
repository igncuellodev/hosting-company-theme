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


const traits = [

  {
    title: "Transferencias",
    span: "Ilimitadas",
    type: 0,
    text: "Disfruta de transferencias ilimitadas en todos nuestros planes de hosting, sin complicaciones."
  },

  {
    title:"Integración con",
    span: "Wordpress",
    type: 0,
    text: "Todos nuestros planes de hosting incluyen WordPress para crear tu sitio web de forma sencilla."
  },

  {
    title: "Cloud",
    span:"Hosting",
    type: 0,
    text: "Disfruta de gran velocidad y soporte especializado para mantener tu sitio web siempre estable."

  },

  {
    title:"para tu sitio",
    span:"Dominio",
    type:1,
    text:"Registra un dominio nuevo o configura el que ya tienes para poner tu página web en marcha hoy."
  },
  {
    title:"Hosting",
    span:"E-commerce",
    type:1,
    text:"Impulsa ya tu negocio con tecnología confiable y herramientas pensadas para crecer junto a ti."
  },
  {
    title:"Hosting",
    span:"Re-seller",
    type: 1,
    text:"Crea tu tienda online con nuestras soluciones para ecommerce y empieza a vender con facilidad."
  },

]



function TraitsCreation(traitsList){
  const wrapper = document.getElementById("trait-wrapper")

for(const trait of traitsList){
  const card = document.createElement("article");
  card.classList.add("trait-card")
  card.classList.add("scroll-animate")

  if(trait.type === 0){
     card.innerHTML = `
  <h5 class="trait-title">${trait.title}<span class="red-highlight"> ${trait.span}</span></h5>
  <p class="traits-text">${trait.text}</p>
  `} else if(trait.type === 1){
        card.innerHTML = `
  <h5 class="trait-title"><span class="red-highlight"> ${trait.span}</span> ${trait.title}</h5>
  <p class="traits-text">${trait.text}</p>
  `
    
  }

  wrapper.appendChild(card)

}
}


TraitsCreation(traits)

