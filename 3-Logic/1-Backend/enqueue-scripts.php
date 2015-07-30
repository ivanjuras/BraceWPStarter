<?php

// ---------- CSS Styles ---------- //

add_action( 'wp_enqueue_scripts', 'bracewp_enqueue_css' );
function bracewp_enqueue_css() {

	// Google fonts
	wp_enqueue_style(
		'google-font-css',
		'//fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Open+Sans:400italic,400,700,300'
	);

	// Main style
	wp_enqueue_style(
		'main-css',
		get_stylesheet_uri(),
		array( 'google-font-css' )
	);

}

// ---------- Javascript scripts ---------- //

add_action( 'wp_enqueue_scripts', 'bracewp_enqueue_js' );
function bracewp_enqueue_js() {

	// jQuery CDN
	wp_enqueue_script(
		'jquery-cdn',
		'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js',
		array(),
		null,
		true
	);

	// Main script
	wp_enqueue_script(
		'script-js',
		get_stylesheet_directory_uri() . '/script.js',
		array( 'jquery-cdn' ),
		null,
		true
	);

}