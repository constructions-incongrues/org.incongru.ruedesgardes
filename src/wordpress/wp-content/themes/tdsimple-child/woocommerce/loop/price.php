<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $product;
$categories = array_filter(explode(',', strip_tags($product->get_categories())), function($data) {
    return strtolower(trim($data)) != 'stock';
})
?>

<?php if ( $price_html = $product->get_price_html() ) : ?>
    <span class="price">
    <?php if (count($categories)): ?>
        <?php echo implode(', ', $categories) ?> / <?php echo $price_html; ?>
    <?php else: ?>
        <?php echo $price_html; ?>
    <?php endif ?>
    </span>
<?php endif; ?>
