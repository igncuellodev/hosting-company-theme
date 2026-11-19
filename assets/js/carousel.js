function initializeCloudDatacenterCarousels() {
  if (typeof Swiper === "undefined") {
    return;
  }

  const carouselContainers = document.querySelectorAll(
    ".cloud-datacenter-carousel .swiper",
  );

  carouselContainers.forEach((carouselContainer) => {
    if (carouselContainer.swiper) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    new Swiper(carouselContainer, {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 24,
      autoplay: prefersReducedMotion
        ? false
        : {
            delay: 2000,
          },
      breakpoints: {
        320: { slidesPerView: 1 },
        720: { slidesPerView: 2 },
        840: { slidesPerView: 3 },
      },
      pagination: {
        el: carouselContainer.querySelector(".swiper-pagination"),
      },
      navigation: {
        nextEl: carouselContainer.querySelector(".swiper-button-next"),
        prevEl: carouselContainer.querySelector(".swiper-button-prev"),
        addIcons: false,
      },
      a11y: {
        prevSlideMessage: "Tarjeta anterior",
        nextSlideMessage: "Tarjeta siguiente",
        paginationBulletMessage: "Ir a la tarjeta {{index}}",
      },
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeCloudDatacenterCarousels,
  );
} else {
  initializeCloudDatacenterCarousels();
}
