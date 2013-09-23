<?php
/**
 * Product Loop Start
 *
 * @author    WooThemes
 * @package   WooCommerce/Templates
 * @version     2.0.0
 */
?>
<h1>Trier</h1>
<ul class="woocommerce-tag-list">
  <li><a href="<?php echo get_option("siteurl") ?>">Tout</a></li>
<?php foreach (get_terms('product_tag') as $term): ?>
  <li>
    <a href="<?php echo get_term_link($term, 'product_tag') ?>"><?php echo $term->name ?></a>
  </li>
<?php endforeach ?>
</ul>

<hr style="border:none;"/>
<h1 style="margin-top:40px;">Catalogue</h1>
<ul class="products">
