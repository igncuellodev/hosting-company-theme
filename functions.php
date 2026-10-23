<?php

function hosting_scripts() {

    $header_js = get_template_directory() . '/assets/js/header.js';
    $front_js  = get_template_directory() . '/assets/js/front-page.js';

    wp_enqueue_script(
        'hosting-header',
        get_template_directory_uri() . '/assets/js/header.js',
        array(),
        filemtime($header_js),
        true
    );

    wp_enqueue_script(
        'hosting-front',
        get_template_directory_uri() . '/assets/js/front-page.js',
        array(),
        filemtime($front_js),
        true
    );

    
}


function hosting_styles() {

    $global_css = get_template_directory() . '/assets/css/global.css';

    wp_enqueue_style(
        'hosting-global',
        get_template_directory_uri() . '/assets/css/global.css',
        array(),
        filemtime($global_css),
        'all'
    );


    if(is_front_page()){
        $front_page_css = get_template_directory() . '/assets/css/front-page.css';

        wp_enqueue_style( 
            'front-css',
            get_template_directory_uri() . '/assets/css/front-page.css',
            array('hosting-global'),
            filemtime($front_page_css),
            'all'
        );
    }

    else if(is_page_template('page-servidores-vps.php')){
        $servidores_css = get_template_directory() .'/assets/css/servidores.css';

        wp_enqueue_style(
            'servidores-css',
            get_template_directory_uri() . '/assets/css/servidores.css',
            array('hosting-global'),
            filemtime($servidores_css),
            'all'
        );
    }

}


add_action('wp_enqueue_scripts', 'hosting_scripts');
add_action('wp_enqueue_scripts', 'hosting_styles');


