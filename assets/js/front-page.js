document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const floating = ".first, .second, .third, .fourth";

  
  gsap.from(`.hero-title, .hero-text, .main-btn, .outline-btn, ${floating}`, {
    y: 80,
    opacity: 0,
    duration: 0.6,
    ease: "power1.out",
    stagger: 0.15,

    onComplete: () => {
  
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



const faqs = [
  
{
  question: "¿Qué es Hosting o alojamiento web?",
  answer: "El alojamiento web es el servicio que permite visualizar un sitio web o blog en Internet. El alojamiento es una forma en que los sitios web pueden compartir espacio web y ancho de banda con los visitantes. Los hosts normalmente brindan espacio de almacenamiento para páginas web, servidores de correo para cuentas de correo electrónico y sockets para FTP."
},

{
  question: "¿Puedo elegir cualquier período de pago que desee?",
  answer: "Para nuestros planes de hosting principales aceptamos pagos anuales, puedes contratar 2, 3, 4 años o mas comunicandote con el departamento de ventas."

},

{
  question: "¿Puedo instalar aplicaciones automáticamente?",
  answer: "Puede instalar aplicaciones a través de nuestro cPanel, con solo hacer clic en un botón. También puede programar cuándo y con qué frecuencia crea copias de seguridad de sus sitios."
},
{
  question: "¿Cómo puedo acceder a mi constructor de sitios web?",
  answer: "Puedes acceder y seleccionar tu constructor de sitios web desde el cPanel con softaculous."
},

{
  question: "¿Cómo accesar a cPanel?",
  answer: "Puede accesar a su cPanel desde el área de clientes de hostingcompany."
},

{
  question: "¿Puedo instalar aplicaciones automáticamente?",
  answer: "Es un sistema operativo construido especialmente para empresas de hosting compartido, este ultimo se encarga de mejorar la seguridad en los sistemas y servicios. El factor importante de Cloudlinux en el mercado es que permite ajustar los servicios de hosting con limites en CPU, memoria RAM, acceso a disco, cantidad de archivos, limites en peticiones de php y otros que hacen de este sistema uno de los más usados para estos fines.",},
]



function CreateFaq(faqs){
  const faqsDiv = document.getElementById("faqs")
  for(const faq of faqs){
    const faqDetail = document.createElement("details")
    const summary = document.createElement("summary")
    const pAnswer = document.createElement("p")

    summary.textContent = faq.question;
    pAnswer.textContent = faq.answer;

    faqDetail.appendChild(summary)
    faqDetail.appendChild(pAnswer)
    faqsDiv.appendChild(faqDetail)

  }
}


CreateFaq(faqs)