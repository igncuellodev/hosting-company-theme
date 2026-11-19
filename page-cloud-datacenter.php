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

<main class="cloud-datacenter-page">
    <?php if (!empty($carousel_cards)) : ?>
        <section class="cloud-datacenter-carousel" aria-label="Beneficios de Cloud Datacenter">
            <div class="swiper">
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
                    <div class="swiper-pagination"></div>
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
