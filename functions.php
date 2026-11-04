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




function hosting_theme_setup()
{
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
}

add_action('after_setup_theme', 'hosting_theme_setup');
