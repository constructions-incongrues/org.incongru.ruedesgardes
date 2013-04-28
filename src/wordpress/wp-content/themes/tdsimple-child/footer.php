<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package tdsimple
 * @since tdsimple 1.0
 */
?>

	</div><!-- #main .site-main -->

	<footer id="colophon" class="site-footer row" role="contentinfo">
		<div id="gotop"><h6><?php _e( '<i class="foundicon-up-arrow"></i>', 'tdsimple' ); ?></h6></div>
		<div class="site-info twelve columns">
			<?php do_action( 'tdsimple_credits' ); ?>
			<p>Le projet <a href="http://ruedesgardes.incongru.org">Rue des Gardes</a> est développé par <a href="http://www.constructions-incongrues.net">Constructions Incongrues</a> et est hébergé par <a href="http://www.pastis-hosting.net">Pastis Hosting</a>.</p>
			<p>Le code source est <a href="https://github.com/constructions-incongrues/org.incongru.ruedesgardes">distribué</a> sous licence <a href="http://www.gnu.org/licenses/agpl.html">AGPL3</a>.</p>
		</div><!-- .site-info -->
	</footer><!-- #colophon .site-footer -->
</div><!-- #page .hfeed .site -->

<?php wp_footer(); ?>

</body>
</html>