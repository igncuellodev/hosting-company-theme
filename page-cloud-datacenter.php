<?php
/**
 * Template Name: Cloud Datacenter
 */

get_header();

$carousel_data_path = get_theme_file_path('/assets/data/carousel.json');
$carousel_content = is_readable($carousel_data_path)
    ? json_decode(file_get_contents($carousel_data_path), true)
    : array();
$carousel_cards = isset($carousel_content['textcontent']) && is_array($carousel_content['textcontent'])
    ? $carousel_content['textcontent']
    : array();
?>

<main>

 <section class="heros">

        <div class="hero-img-container cloud-data-image">
            <div class="hero-intro-wrapper">
                <div class="hero-intro">

                    <div class="hero-text-content">
                        <h1 class="hero-title">Cloud <span class="highlight">DataCenter</span></h1>
                        <p class="hero-text">Una parte muy importante, al momento de tener un sitio web es elegir el alojamiento o hosting correcto para tus necesidades. En Hosting Company nos preocupamos de ayudarte y guiarte para que escojas lo que mejor se adapte a tus necesidades.</p>

                    </div><!--Hero text Content-->

                    <a href="#" class="red-btn">Conocer más</a>

                </div> <!--Hero Intro-->

            </div> <!--Hero Intro Wrappe-->


        </div> <!--Hero Image container-->

    </section>


     <section class="characteristics-section">
        <div class="characteristics-content-wrapper">
            <img src="<?php echo esc_url(get_theme_file_uri('./assets/img/webp/characteristics.webp')) ?>" class="characteristics-img" alt="Imagen de datacenter por fuera">
            <div class="characteristics">
                <div class="characteristics-text">
                    <h2 class="h2-titles animation"><span class="highlight">Caracteristicas</span> de los hostings</h2>
                    <p class="dark-text animation2">Nuestro paquete de alojamiento le ofrece la posibilidad de crear un sitio web hosting y la libertad de elegir su propio nombre de dominio. </p>
                </div>

                <hr class="divider">


                <div class="lists-characteristics-wrapper">
                    <ul class="list-characteristics">
                        <li class="characteristic char1"><img src="<?php echo esc_url(get_theme_file_uri('./assets/img/svg/wordpress.svg')) ?>" width="25" alt="Logo de wordpress">Wordpress</li>
                        <li class="characteristic char2"><img src="<?php echo esc_url(get_theme_file_uri('./assets/img/svg/datacenter.svg')) ?>" width="25" alt="Icono de data center">Datacenter en Chile</li>
                        <li class="characteristic char3"><img src="<?php echo esc_url(get_theme_file_uri('./assets/img/svg/ssd.svg')) ?>" width="25" alt="Ícono de SSD">Tecnología SSD</li>
                        <li class="characteristic char4"><img src="<?php echo esc_url(get_theme_file_uri('./assets/img/svg/ssl.svg')) ?>" width="25" alt="Ícono de certificado SSD">Certificado SSL</li>
                    </ul>

                    <ul class="list-characteristics">
                        <li class="characteristic char5"><img src="<?php echo esc_url(get_theme_file_uri('./assets/img/svg/soporte.svg')) ?>" width="25" alt="Ícono de soporte">Soporte especializado</li>
                        <li class="characteristic char6"><img src="<?php echo esc_url(get_theme_file_uri('./assets/img/svg/transferencia.svg')) ?>" width="25" alt="Ícono de transferencia">Transferencia ilimitada</li>
                        <li class="characteristic char7"><img src="<?php echo esc_url(get_theme_file_uri('./assets/img/svg/seguridad.svg')) ?>" width="25" alt="Ícono de seguridad">Seguridad</li>
                        <li class="characteristic char8"><img src="<?php echo esc_url(get_theme_file_uri('./assets/img/svg/licencia.svg')) ?>" width="25" alt="Ícono de licencia">Licencia cPanel</li>
                    </ul>
                </div>

            </div>

        </div>
    </section>



    <?php if (!empty($carousel_cards)) : ?>
        <section class="cloud-datacenter-carousel" aria-label="Beneficios de Cloud Datacenter">
            <div class="swiper">
                <div class="carousel-text-intro">
                    <h2 class="h2-titles max-width-600">¿Por qué Cloud <span class="highlight">Data Center</span> en Hosting Company?</h2>
                    <p class="dark-text max-width-550">Con nuestra amplia red y recursos, podemos ofrecerle mejores precios en todos sus servicios y soporte en la nube.</p>
                </div>
                <div class="swiper-wrapper">
                    <?php foreach ($carousel_cards as $carousel_card) : ?>
                        <div class="swiper-slide">
                            <img
                                src="<?php echo esc_url(get_theme_file_uri('/assets/img/carousel/placeholder.png')); ?>"
                                alt=""
                                class="carousel-img"
                                width="410"
                                height="304">
                            <div class="carousel-card-text-content">
                                <h3 class="carousel-card-title"><?php echo esc_html($carousel_card['title']); ?></h3>
                                <p class="carousel-card-text"><?php echo esc_html($carousel_card['text']); ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="swiper-controls">
                    <div class="carousel-pagination-group">
                        <div class="swiper-pagination"></div>
                        <span class="carousel-page-counter" aria-label="Página del carrusel"></span>
                    </div>
                    <div class="carousel-buttons">
                        <button class="swiper-button-prev" type="button" aria-label="Tarjeta anterior">
                            <img src="<?php echo esc_url(get_theme_file_uri('/assets/img/carousel/arrow-prev.svg')); ?>" width="20" alt="">
                        </button>
                        <button class="swiper-button-next" type="button" aria-label="Tarjeta siguiente">
                            <img src="<?php echo esc_url(get_theme_file_uri('/assets/img/carousel/arrow-next.svg')); ?>" width="20" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </section>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
