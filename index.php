<?php

// Get context
$context = Timber::get_context();

// If static homepage
if ( is_front_page() ) {
	
	$context['post'] = Timber::get_post();
	Timber::render( 'template-home.twig', $context );

}

// If static page
elseif ( is_page() ) {
	
	$context['post'] = Timber::get_post();
	Timber::render( 'template-page.twig', $context );

}

