<?php
add_theme_support('woocommerce');

/**
 * Displays text after the product summary on product page.
 *
 * @template woocommerce/templates/content-single-product.php:49
 */
add_action('woocommerce_single_product_summary', function () {
    $html = <<<EOT
    <p class="contact">
        Contact :
        <a title="Contacter la Rue des Gardes au sujet de cet article" target="_blank" href="mailto:%s <%s>?subject=À propos de %s">%s</a>
    </p>
    <hr class="narrow" />
EOT;

    $email = get_option('admin_email', 'ruedesgardes@incongru.org');
    $name = get_option('blogname', 'Rue des Gardes');
    echo sprintf($html, $name, $email, $_SERVER['REQUEST_URI'], $email);
});

add_action('wp_enqueue_scripts', function () {
    // Register fonts stylesheets
    wp_register_style(
        'font-carrois',
        'http://fonts.googleapis.com/css?family=Carrois+Gothic+SC',
        array(),
        date('Ymd'),
        'all'
    );
    wp_register_style(
        'font-vollkorn',
        'http://fonts.googleapis.com/css?family=Vollkorn',
        array(),
        date('Ymd'),
        'all'
    );

    // Enqueue registered styles
    wp_enqueue_style('font-carrois');
    wp_enqueue_style('font-vollkorn');
});

/**
 * Replaces the ugly "Produits" word with something more acceptable.
 */
add_filter('post_type_archive_title', function ($title) {
    if ($title == 'Produits') {
        return 'Distro';
    } else {
        return $title;
    }
});
