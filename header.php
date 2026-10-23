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
            <a href="<?php echo esc_url(home_url('/')); ?>">
                <img
                    src="<?php echo esc_url(get_theme_file_uri('/assets/img/svg/logo-hosting-company.svg')); ?>"
                    alt="Hosting company logo" class="hosting-company-logo">
            </a>

            <ul class="nav-list">
                <li><a class="nav-link" href="/servidores-vps">Servidores VPS</a></li>
                <li><a class="nav-link" href="/web-hosting">Web Hosting</a></li>
                <li id="dropdown">Servicios
                    <ul class="dropdown-list">
                        <li><a class="nav-link" href="/cloud-data-center">Cloud Data Center</a></li>
                        <li><a class="nav-link" href="/doble-factor">Atenticación doble factor (2FA)</a></li>
                        <li><a class="nav-link" href="/eset-antivirus">ESET Antivirus</a></li>
                        <li><a class="nav-link" href="/ethical-hacking">Ethical Hacking</a></li>
                        <li><a class="nav-link" href="/servicios-de-soporte">Servicios de soporte</a></li>
                        <li><a class="nav-link" href="/telefonia-ip">Telefonía IP</a></li>

                    </ul>
                </li>
                <li><a class="nav-link" href="/pago">Pago</a></li>
                <li><a class="featured-link" href="https://clientes.hostingcompany.cl/index.php?rp=/login">Clientes</a></li>

            </ul>

            <button class="menu" aria-label="open sidebar menu" aria-expanded="false" aria-controls="responsive-side">
                <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </button>

            <div id="responsive-overlay" class="responsive-overlay">
                <div class="responsive-side">
                    <div class="responsive-side-content">
                        <button id="closeMenu" aria-label="close side bar menu"><svg xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true">
                                <line x1="6" y1="6" x2="18" y2="18" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                            </svg>
                        </button>


                        <ul class="sidebar-list">
                            <li><img src="<?php echo esc_url(get_theme_file_uri('./assets/img/svg/logo-hosting-company.svg'));?>" alt=""></li>
                            <li><a class="nav-link" href="/servidores-vps">Servidores VPS</a></li>
                            <li><a class="nav-link" href="/web-hosting">Web Hosting</a></li>
                            <li class="nav-link">Servicios
                                <ul class="side-servicios">
                                    <li class="side-link">Cloud Data Center</li>
                                    <li class="side-link">2FA</li>
                                    <li class="side-link">ESET Antivirus</li>
                                    <li class="side-link">Ethical Hacking</li>
                                    <li class="side-link">Soporte</li>
                                    <li class="side-link">Telefonía IP</li>
                                </ul>
                            </li>
                            <li><a class="nav-link" href="/pago">Pago</a></li>
                            <li><a class="featured-link" href="https://clientes.hostingcompany.cl/index.php?rp=/login">Clientes</a></li>
                            

                        </ul>
                    </div>

                </div>


            </div>

        </nav>


    </header>