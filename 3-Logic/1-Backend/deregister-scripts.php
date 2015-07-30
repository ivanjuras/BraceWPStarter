<?php

// ---------- Deregister JS scripts ---------- //

add_action( 'wp_enqueue_scripts', 'bracewp_deregister_scripts' );
function bracewp_deregister_scripts() {

	wp_deregister_script( 'jquery' );

}
