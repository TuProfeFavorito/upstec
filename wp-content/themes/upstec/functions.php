<?php
/* Theme Support */
add_theme_support('html-5');
add_theme_support('post-thumbnails');
add_theme_support('custom-logo');
add_theme_support('title-tag');
add_filter('show_admin_bar', '__return_false');

if( function_exists('acf_add_options_page') ) {
	acf_add_options_page();
}