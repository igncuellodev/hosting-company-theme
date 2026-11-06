<?php get_header() /*
Template Name: Web Hosting
*/ ?>


<main>
    <section class="web-hosting-hero">

        <div class="hero-img-container">
            <div class="hero-intro-wrapper">
                <div class="hero-intro">

                    <div class="hero-text-content">
                        <h1 class="hero-title">Web <span class="highlight">Hosting</span></h1>
                        <p class="hero-text">Una parte muy importante, al momento de tener un sitio web es elegir el alojamiento o hosting correcto para tus necesidades. En Hosting Company nos preocupamos de ayudarte y guiarte para que escojas lo que mejor se adapte a tus necesidades.</p>

                    </div><!--Hero text Content-->

                    <a href="#plans" class="red-btn">Ver Planes</a>

                </div> <!--Hero Intro-->

            </div> <!--Hero Intro Wrappe-->


        </div> <!--Hero Image container-->

    </section>

    <section class="plans-section">
        <div class="plans-wrapper">
            <div class="plans-text-wrapper">
                <h2 class="h2-titles scroll-animate">Escoge tu <span class="highlight">Plan de Hosting</span></h2>
                <p class="dark-text scroll-animate">Hay muchos factores a considerar al elegir su Hosting o alojamiento. Nuestro experimentado equipo técnico ha analizado las necesidades más comunes de nuestros clientes y ha creado planes basados en esas necesidades.</p>
            </div>
            <div id="plans-grid">

            </div>

        </div>

    </section>

    <section class="characteristics-section">
        <div class="characteristics-content-wrapper">
            <img src="<?php echo esc_url(get_theme_file_uri('./assets/img/webp/characteristics.webp')) ?>" class="characteristics-img" alt="">
            <div class="characteristics">
                <div class="characteristics-text">
                    <h2 class="h2-titles animation"><span class="highlight">Caracteristicas</span> de los hostings</h2>
                    <p class="dark-text animation2">Nuestro paquete de alojamiento le ofrece la posibilidad de crear un sitio web hosting y la libertad de elegir su propio nombre de dominio. </p>
                </div>


                <div class="lists-characteristics-wrapper">
                    <ul class="list-characteristics">
                        <li class="characteristic char1"><img src="<?php echo esc_url(get_theme_file_uri('./assets/img/svg/wordpress.svg')) ?>" width="25" alt="">Wordpress</li>
                        <li class="characteristic char2"><img src="<?php echo esc_url(get_theme_file_uri('./assets/img/svg/datacenter.svg')) ?>" width="25" alt="">Datacenter en Chile</li>
                        <li class="characteristic char3"><img src="<?php echo esc_url(get_theme_file_uri('./assets/img/svg/ssd.svg')) ?>" width="25" alt="">Tecnología SSD</li>
                        <li class="characteristic char4"><img src="<?php echo esc_url(get_theme_file_uri('./assets/img/svg/ssl.svg')) ?>" width="25" alt="">Certificado SSL</li>
                    </ul>

                    <ul class="list-characteristics">
                        <li class="characteristic char5"><img src="<?php echo esc_url(get_theme_file_uri('./assets/img/svg/soporte.svg')) ?>" width="25" alt="">Soporte especializado</li>
                        <li class="characteristic char6"><img src="<?php echo esc_url(get_theme_file_uri('./assets/img/svg/transferencia.svg')) ?>" width="25" alt="">Transferencia ilimitada</li>
                        <li class="characteristic char7"><img src="<?php echo esc_url(get_theme_file_uri('./assets/img/svg/seguridad.svg')) ?>" width="25" alt="">Seguridad</li>
                        <li class="characteristic char8"><img src="<?php echo esc_url(get_theme_file_uri('./assets/img/svg/licencia.svg')) ?>" width="25" alt="">Licencia cPanel</li>
                    </ul>
                </div>

            </div>

        </div>
    </section>



    <section class="traits-section">

        <div id="trait-wrapper" class="traits-wrapper">
        </div>

    </section>


    <section class="faq-section">
        <div class="faq-text-content">
            <h2 class="h2-titles faq-title"><span class="highlight">Preguntas</span> frecuentes</h2>
            <p class="dark-text faq-text">Conoce más de Hosting Company con algunas de las preguntas que más realizan los usuarios antes de contratar nuestra solución</p>

        </div>
        <div id="faqs">

        </div>


    </section>




</main>


<?php get_footer() ?>