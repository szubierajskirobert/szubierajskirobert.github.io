<?php
/**
 * Template name: Produkty Template
 * 
 */
?>

 <?php get_header(); ?>

    <div class="products">
    <?php
 

 $args = array(
    'post_type' => 'produkty',
    'order' => 'ASC',
    'orderby' => 'ID'
 );
// The Query
$the_query = new WP_Query( $args );
 
// The Loop
if ( $the_query->have_posts() ) {
    echo '<ul>';
    while ( $the_query->have_posts() ) {
        $the_query->the_post();
        echo '<li>' . get_the_title() . '<br>' . get_the_content() . '</li>';
    }
    echo '</ul>';
} else {
    // no posts found
}
/* Restore original Post Data */
wp_reset_postdata();
?>
    </div>


 <?php get_footer(); ?>