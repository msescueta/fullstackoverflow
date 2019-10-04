/*!
 * BETKO
 * 2019 | KEL
 */

// require('semantic/api');
// require('semantic/colorize');
// require('semantic/form');
// require('semantic/state');
// require('semantic/visibility');
// require('semantic/visit');
// require('semantic/site');
// require('semantic/accordion');
// require('semantic/checkbox');
// require('semantic/dimmer');
// require('semantic/dropdown');
// require('semantic/embed');  
// require('semantic/modal');
// require('semantic/nag');
// require('semantic/popup');
// require('semantic/progress');
// require('semantic/rating');
// require('semantic/search');
// require('semantic/shape');
// require('semantic/sidebar');
// require('semantic/sticky');
// require('semantic/tab');
// require('semantic/transition');

// $('.ui.dropdown').dropdown(); 
// $('.ui.accordion').accordion(); 

BET = {

    init: function() {
        BET.globalFunction();
    },

    globalFunction: function() {

        //Sidebar open
        $(document).on('click', '.burgernav', function(e) {
            e.preventDefault();
            $(".wrapper, footer.main").toggleClass("closed");
            $('.burgernav').toggleClass('open');
        });

        $('.ui.dropdown').dropdown(); 
        $('.ui.accordion').accordion(); 

    },


};

$(document).ready(function() {
    BET.init();
});