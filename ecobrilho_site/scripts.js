
/* scripts.js
   Consolidated inline JavaScript moved from the source html.
   Contains lazyload observer and the global Wpr/Elementor configuration script content taken from the original.
*/

/* lazyloadRunObserver (moved from inline <script>) */
const lazyloadRunObserver = () => {
    const lazyloadBackgrounds = document.querySelectorAll( `.e-con.e-parent:not(.e-lazyloaded)` );
    const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
        entries.forEach( ( entry ) => {
            if ( entry.isIntersecting ) {
                let lazyloadBackground = entry.target;
                if( lazyloadBackground ) {
                    lazyloadBackground.classList.add( 'e-lazyloaded' );
                }
                lazyloadBackgroundObserver.unobserve( entry.target );
            }
        });
    }, { rootMargin: '200px 0px 200px 0px' } );
    lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
        lazyloadBackgroundObserver.observe( lazyloadBackground );
    } );
};
const events = [
    'DOMContentLoaded',
    'elementor/lazyload/observe',
];
events.forEach( ( event ) => {
    document.addEventListener( event, lazyloadRunObserver );
} );

/* Wpr/Elementor configuration object script (excerpted and preserved) */
var WprConfig = {"ajaxurl":"https://ecobrilho.online/wp-admin/admin-ajax.php","resturl":"https://ecobrilho.online/wp-json/wpraddons/v1","nonce":"6f94132959","addedToCartText":"was added to cart","viewCart":"View Cart","comparePageID":"","comparePageURL":"https://ecobrilho.online/","wishlistPageID":"","wishlistPageURL":"https://ecobrilho.online/","chooseQuantityText":"Please select the required number of items.","site_key":"","is_admin":"","input_empty":"Please fill out this field","select_empty":"Nothing selected","file_empty":"Please upload a file","recaptcha_error":"Recaptcha Error","woo_shop_ppp":"9","woo_shop_cat_ppp":"9","woo_shop_tag_ppp":"9","is_product_category":"","is_product_tag":""};
window.elementorFrontendConfig = window.elementorFrontendConfig || {}; 
window.elementorFrontendConfig = {
    "environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},
    "i18n":{},
    "is_rtl":false,
    "breakpoints":{"viewport_mobile":{"value":767,"default_value":767,"direction":"max","is_enabled":true},"viewport_tablet":{"value":1024,"default_value":1024,"direction":"max","is_enabled":true}},
    "version":"3.30.4",
    "urls":{"assets":"https://ecobrilho.online/wp-content/plugins/elementor/assets/","ajaxurl":"https://ecobrilho.online/wp-admin/admin-ajax.php","uploadUrl":"https://ecobrilho.online/wp-content/uploads"},
    "kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description","hello_header_logo_type":"title","hello_header_menu_layout":"horizontal","hello_footer_logo_type":"logo"},
    "post":{"id":7,"title":"ecobrilho","excerpt":"","featuredImage":false}
};

/* Any other small inline scripts from the original can be appended here so nothing was removed. */
/* End of scripts.js */
