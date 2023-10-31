<!doctype html>
<html lang="<?php bloginfo( 'language' ) ?>">
<head>    
    <meta charset="<?php bloginfo( 'charset' ) ?>">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	<?php
        wp_head();
    ?>
    <link rel="stylesheet" type="text/css" href="<?php echo site_url(); ?>/wp-content/themes/upstec/style.css" />
</head>
<body <?php body_class(); ?>>
<header>
    <div class="headertop">
        <div class="x-container">
            <div class="headertop__flex">
                <div class="headertop__right">
                    <ul class="links">
                        <?php 
                            $links = get_field("links", "options");
                            if ($links) {
                                foreach ($links as $link) {
                        ?>
                        <li>
                            <a href="<?php echo $link["link"]; ?>">
                                <?php echo $link["imagen"]; ?>
                                <?php echo $link["nombre"]; ?>
                            </a>
                        </li>
                        <?php
                                }
                            }
                        ?>
                    </ul>
                    <ul class="social">
                        <?php 
                            $social = get_field("social", "options");
                            if ($social) {
                                foreach ($social as $so) {
                        ?>
                        <li>
                            <a href="<?php echo $so["link"]; ?>" target="_blank">
                                <img src="<?php echo $so["imagen"]; ?>" />
                            </a>
                        </li>
                        <?php
                                }
                            }
                        ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="headerbottom">
        <div class="x-container">
        
        </div>
    </div>
    
</header>