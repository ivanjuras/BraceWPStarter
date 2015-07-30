<?php

$context = Timber::get_context();
$context['post'] = Timber::get_post();

Timber::render( 'template-single-post.twig', $context );