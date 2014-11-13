<?php
/**
 * Product Loop Start
 *
 * @author    WooThemes
 * @package   WooCommerce/Templates
 * @version     2.0.0
 */
$mainCategories = array(
    'affiche'    => 'Affiche',
    'cd'         => 'CD',
    'colifichet' => 'Colifichet',
    'dvd'        => 'DVD',
    'k7'         => 'K7',
    'livre'      => 'Livre',
    'tissu'      => 'Tissu',
    'vinyl'      => 'Vinyl'
);
?>
<h1 class="woocommerce-heading-1">Trier</h1>
<ul class="woocommerce-tag-list">
    <li><a href="<?php echo get_option("siteurl/distro/stock/") ?>">Tout</a></li>
<?php foreach ($mainCategories as $name => $label): ?>
    <li>
        <a href="<?php echo get_option("siteurl/distro/stock/product-tag/<?php echo $name ?>") ?>"><?php echo $label ?></a>
    </li>
<?php endforeach; ?>
</ul>

<br />
<br />
<br />

<ul class="woocommerce-tag-list">
<?php foreach (get_terms('product_tag') as $term): ?>
    <?php if (!in_array($term, array_keys($mainCategories))): ?>
    <li>
        <a href="<?php echo get_term_link($term, 'product_tag') ?>"><?php echo $term->name ?></a>
    </li>
    <?php endif ?>
<?php endforeach ?>
</ul>

<hr style="border:none;"/>
<h1 style="margin-top:60px;">Catalogue</h1>
<ul class="products">
