document.addEventListener("DOMContentLoaded", () => {

    plansCreation(plans)
    TraitsCreation(traits)
    gsap.from(".hero-title, .hero-text", 
        {
            opacity: 0,
            y: 20,
            delay: 0.3,
            stagger: 0.40,
        
        });



  gsap.to(".web-hosting-hero", {
    duration: 0.5,
    scale: 0.90,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".hero-img-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
});




gsap.from("#card1, #card2, #card3, #card4", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".plans-section",
        start: "top 50%",
    }
});


gsap.from("#trait1, #trait2, #trait3, #trait4, #trait5, #trait6",{
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.2,
    scrollTrigger:{
        trigger: ".characteristics-section",
        start: "bottom 40%"
    }
})

gsap.from(".traits-section", {
    duration: 0.5,
    opacity: 0,
    scale: 0.80,
    scrollTrigger:{
        trigger: ".characteristics-section",
        start: "top 30%",
        scrub: true

    }
})

});

const plans = [

    {
        id: "card1",
        name: "Starter",
        price: "7.000",
        monthly: "583",
        ssd: 7,
        sitios: 1,
        db: 1
        //Se agregaron solo los elementos que cambian por plan
    },

    {
        id: "card2",
        name: "Business",
        price: "25.000",
        monthly: "2.083",
        ssd: 10,
        sitios: 2,
        db: 2
        //Se agregaron solo los elementos que cambian por plan
    },

    {
        id: "card3",
        name: "Enterprise",
        price: "55.900",
        monthly: "4.658",
        ssd: 25,
        sitios: 3,
        db: 4
        //Se agregaron solo los elementos que cambian por plan
    },

    {
        id:"card4",
        name: "Advanced",
        price: "79.900",
        monthly: "6.658",
        ssd: 50,
        sitios: 5,
        db: 8,

        //Se agregaron solo los elementos que cambian por plan
    },


]

const plansGrid = document.getElementById("plans-grid");

function plansCreation(plansArray){
    for(const plan of plansArray){
    const cardPlan = document.createElement("article")

    cardPlan.classList.add("plan-card")
    cardPlan.setAttribute("id", plan.id)


    cardPlan.innerHTML =`
     <h3 class="plan-name">
      ${plan.name}
    </h3>
    <h4 class="price">$${plan.price}<span class="yearly">/Anual + IVA</span></h4>
    <p class="monthly">Desde ${plan.monthly} por mes*</p>
     <hr class="plan-divider">

     <a href="" class="outline-btn2">Contratar</a>

    <ul class="plan-specs">
        <li class="spec"><img class="spec-icon" src="/wp-content/themes/hosting-company-theme/assets/img/svg/ssd.svg" alt="">${plan.ssd} GB SSD</li>
        <li class="spec"><img class="spec-icon" src="/wp-content/themes/hosting-company-theme/assets/img/svg/email.svg" alt="">Emails Ilimitados</li>
        <li class="spec" id="sitios"><img class="spec-icon" src="/wp-content/themes/hosting-company-theme/assets/img/svg/website.svg" alt="">${plan.sitios} ${plan.sitios === 1 ? "sitio web" : "sitios web"}</li>
        <li class="spec"><img class="spec-icon" src="/wp-content/themes/hosting-company-theme/assets/img/svg/db.svg" alt="">${plan.db} Base de datos</li>
        <li class="spec"><img class="spec-icon" src="/wp-content/themes/hosting-company-theme/assets/img/svg/ssl.svg" alt="">Certficado SSL Gratis</li>
    </ul>
`
    plansGrid.appendChild(cardPlan)
}
}


const traits = [

  {
    id: "trait1",
    title: "Disponibilidad",
    text: "Mantén tu sitio web siempre disponible, sin caídas y con disponibilidad garantizada las 24 horas."
  },

  {
    id: "trait2",
    title:"Escalibilidad",
    text: "Puedes hacer un upgrade de tu servicio de forma rápida y sencilla, con tan solo unos pocos clics."
  },

  {
    id: "trait3",
    title: "Seguridad",
    text: "Protegemos tu sitio web frente a cualquier tipo de ataque, manteniendo tus datos seguros en todo momento."

  },

  {
    id: "trait4",
    title:"Soporte",
    text:"Cuenta con soporte técnico altamente calificado y disponible para ayudarte en todo momento que lo necesites."
  },
  {
    id: "trait5",
    title:"Backups Semanales",
    text:"Programa respaldos de tu sitio semanalmente y protege toda tu información de forma automática y segura."
  },
  {
    id: "trait6",
    title:"Configuración rápida",
    text:"Configura y personaliza tu servicio de hosting de manera rápida, sencilla y segura con solo unos clics."
  },

]



function TraitsCreation(traitsList){
  const wrapper = document.getElementById("trait-wrapper")

for(const trait of traitsList){
  const card = document.createElement("article");
  card.classList.add("trait-card")
  card.setAttribute("id", trait.id)


card.innerHTML = `
  <h5 class="trait-title">${trait.title}</h5>
  <p class="traits-text">${trait.text}</p>
  `


  wrapper.appendChild(card)


}}
