<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $product;
$categories = explode(',', strip_tags($product->get_categories()));
unset($categories[0]);
?>

<?php if ( $price_html = $product->get_price_html() ) : ?>
    <span class="price">
    <?php if (count($categories)): ?>
        <?php echo $categories[1] ?> / <?php echo $price_html; ?>
    <?php else: ?>
        <?php echo $price_html; ?>
    <?php endif ?>
    </span>
<?php endif; ?>
