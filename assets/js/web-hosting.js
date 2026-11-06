document.addEventListener("DOMContentLoaded", () => {
  plansCreation(plans);
  TraitsCreation(traits);
  CreateFaq(faqs);

  const mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
    gsap.from(".hero-title, .hero-text", {
      opacity: 0,
      y: 20,
      delay: 0.3,
      stagger: 0.4,
    });

    gsap.to(".web-hosting-hero", {
      duration: 0.5,
      scale: 0.9,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".hero-img-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.from("#card1, #card2, #card3, #card4", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".plans-section",
        start: "top 50%",
      },
    });

    gsap.from("#trait1, #trait2, #trait3, #trait4, #trait5, #trait6", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".characteristics-section",
        start: "bottom 40%",
      },
    });

    gsap.from(".traits-section", {
      opacity: 0,
      scale: 0.8,

      scrollTrigger: {
        trigger: ".characteristics-section",
        start: "bottom 50%",
        scrub: true,
        once: true,
      },
    });

    gsap.from(".characteristics-img", {
      opacity: 0,
      scale: 0,
      scrollTrigger: {
        trigger: ".plans-section",
        start: "top -20%",
      },
    });

    gsap.from(
      ".animation, .animation2, .char1, .char2, .char3, .char4, .char5, .char6, .char7, .char8",
      {
        opacity: 0,
        stagger: 0.08,
        y: 10,
        scrollTrigger: {
          trigger: ".plans-section",
          start: "top -22%",
        },
      },
    );

    gsap.from(
      ".faq-title, .faq-text, #faq1, #faq2, #faq3, #faq4, #faq5, #faq6, #faq7",
      {
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".traits-section",
          start: "bottom 40%",
        },
      },
    );
  });
});

const plans = [
  {
    id: "card1",
    name: "Starter",
    price: "7.000",
    monthly: "583",
    ssd: 7,
    sitios: 1,
    db: 1,
    //Se agregaron solo los elementos que cambian por plan
  },

  {
    id: "card2",
    name: "Business",
    price: "25.000",
    monthly: "2.083",
    ssd: 10,
    sitios: 2,
    db: 2,
    //Se agregaron solo los elementos que cambian por plan
  },

  {
    id: "card3",
    name: "Enterprise",
    price: "55.900",
    monthly: "4.658",
    ssd: 25,
    sitios: 3,
    db: 4,
    //Se agregaron solo los elementos que cambian por plan
  },

  {
    id: "card4",
    name: "Advanced",
    price: "79.900",
    monthly: "6.658",
    ssd: 50,
    sitios: 5,
    db: 8,

    //Se agregaron solo los elementos que cambian por plan
  },
];

const plansGrid = document.getElementById("plans-grid");

function plansCreation(plansArray) {
  for (const plan of plansArray) {
    const cardPlan = document.createElement("article");

    cardPlan.classList.add("plan-card");
    cardPlan.setAttribute("id", plan.id);

    cardPlan.innerHTML = `
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
        <li class="spec"><img class="spec-icon" src="/wp-content/themes/hosting-company-theme/assets/img/svg/ssl.svg" alt="">Certificado SSL Gratis</li>
    </ul>
`;
    plansGrid.appendChild(cardPlan);
  }
}

const traits = [
  {
    id: "trait1",
    title: "Disponibilidad",
    text: "Mantén tu sitio web siempre disponible, sin caídas y con disponibilidad garantizada las 24 horas.",
  },

  {
    id: "trait2",
    title: "Escalabilidad",
    text: "Puedes hacer un upgrade de tu servicio de forma rápida y sencilla, con tan solo unos pocos clics.",
  },

  {
    id: "trait3",
    title: "Seguridad",
    text: "Protegemos tu sitio web frente a cualquier tipo de ataque, manteniendo tus datos seguros en todo momento.",
  },

  {
    id: "trait4",
    title: "Soporte",
    text: "Cuenta con soporte técnico altamente calificado y disponible para ayudarte en todo momento que lo necesites.",
  },
  {
    id: "trait5",
    title: "Backups Semanales",
    text: "Programa respaldos de tu sitio semanalmente y protege toda tu información de forma automática y segura.",
  },
  {
    id: "trait6",
    title: "Configuración rápida",
    text: "Configura y personaliza tu servicio de hosting de manera rápida, sencilla y segura con solo unos clics.",
  },
];

function TraitsCreation(traitsList) {
  const wrapper = document.getElementById("trait-wrapper");

  for (const trait of traitsList) {
    const card = document.createElement("article");
    card.classList.add("trait-card");
    card.setAttribute("id", trait.id);

    card.innerHTML = `
  <h5 class="trait-title">${trait.title}</h5>
  <p class="traits-text">${trait.text}</p>
  `;

    wrapper.appendChild(card);
  }
}

const faqs = [
  {
    id: "faq1",
    question: "¿Qué es el hosting compartido?",
    answer:
      "En palabras simples es un alojamiento de multiples servicios, tales como paginas web, correos, aplicaciones, base de datos que estan soportadas por servidores de alta tecnologia. ",
  },

  {
    id: "faq2",
    question: "¿Quién se encarga de la seguridad del servicio?",
    answer:
      "La empresa proveedora del servicio de hosting es quien debe tomar las medidas necesarias en tanto firewall, antispam y antivirus se refiere. ",
  },

  {
    id: "faq3",
    question: "¿Puedo alojar solo la web con un hosting?",
    answer:
      "Si, con nuestro servicio puedes usar otros proveedores de mails como Google Apps o Microsoft etc",
  },
  {
    id: "faq4",
    question: "¿Dónde puedo configurar mi servicio de hosting?",
    answer:
      "Puedes configurar tu servicio en cualquier dispositivo que tenga un cliente de mails, tanto tablet, computadores, celulares con cualquier sistema operativo.",
  },

  {
    id: "faq5",
    question:
      "¿Quién realiza la migración del servicio si estoy en otro proveedor de hosting?",
    answer:
      "Nosotros realizamos la migracion completa de tu servicio hacia nuestros servidores, solo debes tener accesos a tu actual cPanel y nuestros ingenieros podran revisar si la migracion es factible y en que condiciones. ",
  },

  {
    id: "faq6",
    question: "¿Qué plan escoger?",
    answer:
      "Nuestros planes de alojamiento le brindan las herramientas y los recursos que necesita para crear un sitio web exitoso. Nuestro equipo de expertos está aquí para ayudar a garantizar que su sitio esté en funcionamiento las 24 horas del día, los 7 días de la semana. Ofrecemos una variedad de planes de alojamiento para que pueda encontrar el que mejor se adapte a sus necesidades. ¡Desde el nivel básico hasta el empresarial, lo tenemos cubierto con todo, desde almacenamiento premium hasta direcciones IP dedicadas, redes de baja latencia y más! Nuestros planes ofrecen diferentes soluciones a un precio accesible. Alojar su sitio web con nosotros le da el poder de escalar hacia arriba o hacia abajo según sea necesario, sin pagar por los recursos no utilizados. También garantizamos que nuestro servicio estará activo el 100 % del tiempo (esto excluye el mantenimiento programado).",
  },

  {
    id: "faq7",
    question: "¿Puedo migrar mi sitio desde otro hosting?",
    answer:
      "Si, en Hostingcompany realizamos migraciones para ello tienes que ir al área de contacto y crear una solicitud para que te indiquemos los pasos para migrar, en este caso se evaluara el tamaño del sitio web y que plan es apto para realizar la migración.",
  },
];

function CreateFaq(faqs) {
  const faqsDiv = document.getElementById("faqs");
  for (const faq of faqs) {
    const faqDetail = document.createElement("details");
    const summary = document.createElement("summary");
    const pAnswer = document.createElement("p");

    faqDetail.classList.add("faq-content");
    pAnswer.classList.add("answer-text");
    summary.classList.add("question");
    faqDetail.setAttribute("id", faq.id);

    summary.textContent = faq.question;
    pAnswer.textContent = faq.answer;

    faqDetail.appendChild(summary);
    faqDetail.appendChild(pAnswer);
    faqsDiv.appendChild(faqDetail);
  }
}
