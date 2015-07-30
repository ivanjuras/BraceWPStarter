<?php

// ---------- Register navigation menus ---------- //

add_action( 'init', 'bracewp_register_nav_menus' );
function bracewp_register_nav_menus() {

	register_nav_menus( array(
		'header_menu' => __( 'Header Menu' ),
		'footer_menu' => __( 'Footer Menu' )
	) );

}
