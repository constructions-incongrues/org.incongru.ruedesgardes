<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package tdkate
 * @since tdkate 1.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<?php do_action( 'tdsimple_before_header' ); ?>
	<header id="masthead" class="site-header row" role="banner">
		
		<div class="header-content">
			<div class="twelve columns brand">
			<hgroup>
				<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
								<h1 class="site-title"><a href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>

			</hgroup>
	
		</div>
			
		<div class="twelve columns">
			
			<nav role="navigation" class="site-navigation main-navigation">
				<h4 class="assistive-text"><?php _e( 'Menu', 'tdblu' ); ?></h4>
				<?php if ( has_nav_menu( 'primary' ) ) { ?>
					<?php wp_nav_menu( array( 'container' => 'ul', 'menu_class' => 'nav-bar', 'theme_location' => 'primary') ); ?>
				<?php } else { ?>
					<ul class="nav-bar">
						<?php 
							wp_list_pages('title_li=' ); 
						?>
					</ul>
				<?php } ?>
			</nav><!-- .site-navigation .main-navigation -->
		</div>
			</div>
	</header><!-- #masthead .site-header -->


	<div id="main" class="site-main row">
