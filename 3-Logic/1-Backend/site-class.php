<?php

// ---------- Error message if Timber doesn't exist ---------- //

if ( ! class_exists( 'Timber' ) ) {

	add_action( 'admin_notices', 'bracewp_require_timber' );
	function bracewp_require_timber() {
		echo '
			<div class="error">
				<p>
					Timber is required for this theme. <a href="' . esc_url( admin_url( 'plugins.php' ) ) . '">Activate the plugin here</a><br /> If you don\'t have it, search for "Timber Library" in the plugins directory and install the plugin.
				</p>
			</div>
		';
	}

	return;

}

// ---------- File directories ---------- //

Timber::$dirname = array(
	'1-Templating/1-Core',
	'1-Templating/2-Snippets',
	'1-Templating/2-Snippets/Navigation',
	'1-Templating/2-Snippets/Logos',
	'1-Templating/3-Sections',
	'1-Templating/4-Templates'
);

// -------------------- Class BraceWP -------------------- //

class BraceWP extends TimberSite {

	// ---------- Constructor ---------- //

	function __construct() {

		parent::__construct();

		add_theme_support( 'post-thumbnails' );
		add_theme_support(
			'html5',
			array( 'comment-list', 'comment-form', 'search-form', 'caption' )
		);

		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'get_twig', array( $this, 'add_to_twig' ) );

	}

	// ---------- Add to twig ---------- //

	function add_to_twig( $twig ) {

		// Show DB queries
		$twig->addFunction( new Twig_SimpleFunction( 'show_db_queries', function() {
			if ( current_user_can( 'manage_options' ) ) {
				global $wpdb;
				print_r( $wpdb->queries );
			}
		} ) );

		// Search form
		$twig->addFunction( new Twig_SimpleFunction( 'get_search_form', function() {
			get_search_form( true );
		} ) );

		$twig->addExtension( new Twig_Extension_StringLoader() );

		return $twig;

	}

	// ---------- Default context ---------- //

	function add_to_context( $context ) {

		$context['site'] = $this;
		
		// Menus
		$context['header_menu'] = new TimberMenu( 'header_menu' );
		$context['footer_menu'] = new TimberMenu( 'footer_menu' );

		// Functions
		$context['show_queries'] = TimberHelper::function_wrapper( 'show_db_queries' );
		$context['get_search_form'] = TimberHelper::function_wrapper( 'get_search_form' );

		// Logo
		$context['logo_image_large'] = new TimberImage(4);
		$context['logo_image_medium'] = new TimberImage(5);
		$context['logo_image_small'] = new TimberImage(29);
		
		return $context;

	}  

}
new BraceWP();