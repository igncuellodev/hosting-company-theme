<?php

function hosting_scripts()
{

    $header_js = get_template_directory() . '/assets/js/header.js';

    wp_enqueue_script(
        'hosting-header',
        get_template_directory_uri() . '/assets/js/header.js',
        array(),
        filemtime($header_js),
        true
    );

    if (is_front_page()) {

        $front_js  = get_template_directory() . '/assets/js/front-page.js';

        wp_enqueue_script(
            'hosting-front',
            get_template_directory_uri() . '/assets/js/front-page.js',
            array(),
            filemtime($front_js),
            true
        );
    } else if (is_page('web-hosting')) {
        $web_hosting_script = get_template_directory() . '/assets/js/web-hosting.js';

        wp_enqueue_script(
            'web_hosting_script',
            get_template_directory_uri() . '/assets/js/web-hosting.js',
            array(),
            filemtime($web_hosting_script),
            true

        );
    } else if(is_page('cloud-datacenter')){
        $cloud_data_center_script = get_template_directory() .'/assets/js/cloud-data.js';

         wp_enqueue_script(
            'cloud_data_center_script',
            get_template_directory_uri() . '/assets/js/cloud-data.js',
            array(),
            filemtime($cloud_data_center_script),
            true

        );
    }
}


function hosting_styles()
{

    $global_css = get_template_directory() . '/assets/css/global.css';

    wp_enqueue_style(
        'hosting-global',
        get_template_directory_uri() . '/assets/css/global.css',
        array(),
        filemtime($global_css),
        'all'
    );


    if (is_front_page()) {
        $front_page_css = get_template_directory() . '/assets/css/front-page.css';

        wp_enqueue_style(
            'front-css',
            get_template_directory_uri() . '/assets/css/front-page.css',
            array('hosting-global'),
            filemtime($front_page_css),
            'all'
        );
    } else if (is_page_template('page-servidores-vps.php')) {
        $servidores_css = get_template_directory() . '/assets/css/servidores.css';

        wp_enqueue_style(
            'servidores-css',
            get_template_directory_uri() . '/assets/css/servidores.css',
            array('hosting-global'),
            filemtime($servidores_css),
            'all'
        );
    } else if (is_page('web-hosting')) {
        $web_hosting_css = get_template_directory() . '/assets/css/web-hosting.css';

        wp_enqueue_style(
            'web-hosting-css',
            get_template_directory_uri() . '/assets/css/web-hosting.css',
            array('hosting-global'),
            filemtime($web_hosting_css),
            'all'
        );
    }
}



function theme_gsap_script()
{
    // The core GSAP library
    wp_enqueue_script('gsap-js', 'https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js', array(), false, true);
    // ScrollTrigger - with gsap.js passed as a dependency
    wp_enqueue_script('gsap-st', 'https://cdn.jsdelivr.net/npm/gsap@3.15/dist/ScrollTrigger.min.js', array('gsap-js'), false, true);
}

add_action('wp_enqueue_scripts', 'hosting_scripts');
add_action('wp_enqueue_scripts', 'hosting_styles');
add_action('wp_enqueue_scripts', 'theme_gsap_script');

/**
 * Load Swiper and carousel assets only on the Cloud Datacenter page.
 */
function hosting_enqueue_cloud_datacenter_carousel_assets()
{
    if (!is_page(array('cloud-datacenter', 'cloud-data-center')) && !is_page_template('page-cloud-datacenter.php')) {
        return;
    }

    $carousel_stylesheet_path = get_theme_file_path('/assets/css/carousel.css');
    $carousel_script_path = get_theme_file_path('/assets/js/carousel.js');

    wp_enqueue_style(
        'hosting-swiper',
        'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css',
        array(),
        '12'
    );

    wp_enqueue_style(
        'hosting-carousel',
        get_theme_file_uri('/assets/css/carousel.css'),
        array('hosting-global', 'hosting-swiper'),
        filemtime($carousel_stylesheet_path)
    );

    wp_enqueue_script(
        'hosting-swiper',
        'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js',
        array(),
        '12',
        true
    );

    wp_enqueue_script(
        'hosting-carousel',
        get_theme_file_uri('/assets/js/carousel.js'),
        array('hosting-swiper'),
        filemtime($carousel_script_path),
        true
    );
}

add_action('wp_enqueue_scripts', 'hosting_enqueue_cloud_datacenter_carousel_assets');




function hosting_theme_setup()
{
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
}

add_action('after_setup_theme', 'hosting_theme_setup');
