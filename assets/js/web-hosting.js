document.addEventListener("DOMContentLoaded", () => {
  plansCreation(plans);
  TraitsCreation(traits);

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
        stagger: 0.2,
        y: 10,
        scrollTrigger: {
          trigger: ".plans-section",
          start: "top -22%",
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
    question: "¿Qué es Hosting o alojamiento web?",
    answer:
      "El alojamiento web es el servicio que permite visualizar un sitio web o blog en Internet. El alojamiento es una forma en que los sitios web pueden compartir espacio web y ancho de banda con los visitantes. Los hosts normalmente brindan espacio de almacenamiento para páginas web, servidores de correo para cuentas de correo electrónico y sockets para FTP.",
  },

  {
    question: "¿Puedo elegir cualquier período de pago que desee?",
    answer:
      "Para nuestros planes de hosting principales aceptamos pagos anuales, puedes contratar 2, 3, 4 años o mas comunicandote con el departamento de ventas.",
  },

  {
    question: "¿Puedo instalar aplicaciones automáticamente?",
    answer:
      "Puede instalar aplicaciones a través de nuestro cPanel, con solo hacer clic en un botón. También puede programar cuándo y con qué frecuencia crea copias de seguridad de sus sitios.",
  },
  {
    question: "¿Cómo puedo acceder a mi constructor de sitios web?",
    answer:
      "Puedes acceder y seleccionar tu constructor de sitios web desde el cPanel con softaculous.",
  },

  {
    question: "¿Cómo accesar a cPanel?",
    answer:
      "Puede accesar a su cPanel desde el área de clientes de hostingcompany.",
  },

  {
    question: "¿Puedo instalar aplicaciones automáticamente?",
    answer:
      "Es un sistema operativo construido especialmente para empresas de hosting compartido, este ultimo se encarga de mejorar la seguridad en los sistemas y servicios. El factor importante de Cloudlinux en el mercado es que permite ajustar los servicios de hosting con limites en CPU, memoria RAM, acceso a disco, cantidad de archivos, limites en peticiones de php y otros que hacen de este sistema uno de los más usados para estos fines.",
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

    summary.textContent = faq.question;
    pAnswer.textContent = faq.answer;

    faqDetail.appendChild(summary);
    faqDetail.appendChild(pAnswer);
    faqsDiv.appendChild(faqDetail);
  }
}

CreateFaq(faqs);
