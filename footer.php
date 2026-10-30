<footer class="site-footer">

    <div class="footer-wrapper">
        <div class="logo-section">
            <a href="<?php echo esc_url(home_url('/')); ?>">
                <img
                    src="<?php echo esc_url(get_theme_file_uri('/assets/img/svg/logo-hosting-company.svg')); ?>"
                    alt="Hosting company logo" width="250">
            </a>

            <p class="footer-text">Hosting Company. 2012-2023 Todos los derechos reservados.</p>

            <p class="adress">Av. Nueva Providencia 1881, Oficina 2401, Providencia</p>

            <p>Lunes a Viernes 09:00hrs a 18:00hrs</p>
        </div>


        <div class="link-section">
            <div class="services">
                <span class="footer-title">Empresa</span>
                <ul class="services-list">
                    <li><a class="footer-link" href="/blog">Blog</a></li>
                    <li><a class="footer-link" href="/terminos-y-condiciones">Términos y condiciones</a></li>
                    <li><a class="footer-link" href="/pago">Información de pago</a></li>
                    <li><a class="footer-link" href="/contacto">Contáctanos</a></li>
                </ul>

            </div>


            <div class="empresa">
                <span class="footer-title">Servicios</span>
                <ul class="empresa-list">
                    <li><a class="footer-link" href="/cloud-datacenter">Cloud Datacenter</a></li>
                    <li><a class="footer-link" href="/doble-autenticación">Doble autenticación</a></li>
                    <li><a class="footer-link" href="/eset-antivirus">ESET Antivirus</a></li>
                    <li><a class="footer-link" href="/ethical-hacking">Ethical Hacking</a></li>
                    <li><a class="footer-link" href="/telefonia-ip">Telefonía IP</a></li>


                </ul>

            </div>


        </div>

    </div>



</footer>
<div class="footer-tag">
    <p>
        © <?php echo date('Y'); ?> Hosting Company
    </p>
</div>

<?php wp_footer(); ?>

</body>

</html>