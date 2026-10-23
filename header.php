<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<?php wp_body_open(); ?>

<header>
    <nav>
    <a href="<?php echo esc_url( home_url('/') ); ?>" class="odoo-logo">
    <img 
    src="<?php echo esc_url( get_theme_file_uri('/assets/img/svg/logo-hosting-company.svg') ); ?>" 
    alt="Hosting company logo" class="hosting-company-logo">
    </a>

    <ul class="nav-list">
        <li><a class="nav-link" href="#">Servidores VPS</a></li>
        <li><a class="nav-link" href="#">Web Hosting</a></li>
        <li><a class="nav-link" href="#">Servicios</a></li>
        <li><a class="nav-link" href="#">Pago</a></li>
        <li><a class="nav-link" href="#">Clientes</a></li>
    </ul>

    </nav>
</header>