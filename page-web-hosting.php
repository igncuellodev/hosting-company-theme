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
                <p class="dark-text scroll-animate">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, aliquid. Similique at, impedit pariatur quis, voluptas hic necessitatibus corporis, debitis odit officiis velit iure culpa blanditiis eum? Quisquam, sunt ea.</p>
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
                    <h2 class="h2-titles"><span class="highlight">Caracteristicas</span> de los hostings</h2>
                    <p class="dark-text left">Nuestro paquete de alojamiento le ofrece la posibilidad de crear un sitio web hosting y la libertad de elegir su propio nombre de dominio. </p>
                </div>


                <div class="lists-characteristics-wrapper">
                    <ul class="list-characteristics">
                        <li class="characteristic">Wordpress</li>
                        <li class="characteristic">Datacenter en Chile</li>
                        <li class="characteristic">Tecnología SSD</li>
                        <li class="characteristic">Certificado SSL</li>
                    </ul>

                    <ul class="list-characteristics">
                        <li class="characteristic">Soporte especializado</li>
                        <li class="characteristic">Trnasferencia ilimitada</li>
                        <li class="characteristic">Seguridad</li>
                        <li class="characteristic">Licencia cPanel</li>
                    </ul>
                </div>

            </div>

        </div>
    </section>



    <section class="traits-section">

        <div id="trait-wrapper" class="traits-wrapper">
        </div>

    </section>



</main>


<?php get_footer() ?>