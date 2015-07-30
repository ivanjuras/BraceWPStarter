<?php

// Show db queries
function show_db_queries() {

	if ( current_user_can( 'manage_options' ) ) {
		global $wpdb;
		echo '<pre>';
		print_r( $wpdb->queries );
		echo '</pre>';
	}

}