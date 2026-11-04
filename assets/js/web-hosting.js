document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero-title, .hero-text", 
        {
            opacity: 0,
            y: 20,
            delay: 0.3,
            stagger: 0.40,
        
        }
    )
})


document.addEventListener("scroll", () => {
  gsap.to(".web-hosting-hero", {
    duration: 0.5,
    scale: 0.95,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".hero-img-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
});
});


const plans = [

    {
        name: "Starter",
        price: "7.000",
        monthly: "583",
        ssd: 7,
        sitios: 1,
        db: 1
        //Se agregaron solo los elementos que cambian por plan
    },

    {
        name: "Business",
        price: "25.000",
        monthly: "2.083",
        ssd: 10,
        sitios: 2,
        db: 2
        //Se agregaron solo los elementos que cambian por plan
    },

    {
        name: "Enterprise",
        price: "55.900",
        monthly: "4.658",
        ssd: 25,
        sitios: 3,
        db: 4
        //Se agregaron solo los elementos que cambian por plan
    },

    {
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
    cardPlan.classList.add("scroll-animate")

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

plansCreation(plans)
