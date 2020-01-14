<?php
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
 
    $parent_style = 'parent-style'; // This is 'twentyfifteen-style' for the Twenty Fifteen theme.
 
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );
}


function create_posttype() { 
    register_post_type( 'produkty',
    // CPT Options
        array(
            'labels' => array(
                'name' => __( 'produkty' ),
                'singular_name' => __( 'produkt' )
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'produkty'),
        )
    );
}
// Hooking up our function to theme setup
add_action( 'init', 'create_posttype' );