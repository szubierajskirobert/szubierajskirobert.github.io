<?php
    /**
     * Template Name: Video
     */
?>

<?php get_header(); ?>


<p>Moje ulubione video</p>

<iframe src="https://www.youtube.com/embed/9zRIIkVw0YQ" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
    
    <?php
if (have_posts()):
  while (have_posts()) : the_post();
    the_content();
  endwhile;
else:
  echo '<p>Sorry, no posts matched your criteria.</p>';
endif;
?>

<?php get_footer(); ?>