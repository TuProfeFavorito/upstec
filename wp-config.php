<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'upstec' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '586_SuJ{uW%xuV[;YK]dXzrHHq/efns_|;N&T,v_`Zpyckah;r!l@cD]CQZ4nYu$' );
define( 'SECURE_AUTH_KEY',  'Y f+-#k*96)XL`1Yp*H*s5RFPAdM#u,|a%?,uc8lfy8=(D1^a5t>PaZHT=YX]958' );
define( 'LOGGED_IN_KEY',    ' I0j&z7R@0bgJ-Gi|}0v P~rS#!&fR!J7t?$:[(A BdP%YliJ|wjG-#W.Os5(MO^' );
define( 'NONCE_KEY',        '**s4HRJgK<t!|XS[=tu+xNY*_:PgI$mbptfqUz[[vf8mmUmr5qKp+[M4|Kzdi)_c' );
define( 'AUTH_SALT',        'O)Q7IDC4Wc7utN[t$Ve*N[Eq117.%3:yss<O[{_*6fXHGOMKjN81n,!eo{QEuCcc' );
define( 'SECURE_AUTH_SALT', '0kIy1ZtGGUl7vL#tj|tp%94Kdi`=8X%7F7J-D/u:Z-[B!@3qkRr#&=M&pS2ku3>0' );
define( 'LOGGED_IN_SALT',   'BWAcsNS;/oKfzIUKy3#e]aF,)EO~=rbGW48?pU9Gxlhhew85Rm3AtaVuc$[[f6;c' );
define( 'NONCE_SALT',       'y?,]lOEWOpocXBuGj%A6hoa(viV }Q.ONhMw~|w9f`}RAu~f~6JMuo&87u)UzyjC' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'up_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
