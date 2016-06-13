/**
 * Created by ravitaneja on 7/6/16.
 */
$(document).ready(function() {
   $('.navbar-container').on({
      click: function() {
          $('.navbar').toggleClass('show');
          $('.navbar-toggle').toggleClass('close');
          $('.navbar-container').toggleClass('open-navbar');
      }
   });
});

$(document).ready(function() {
    $('.navigation-panel').on({
        mouseover: function() {
            $('.n').toggleClass('n-hover');
            $('.v').toggleClass('v-hover');
        },
        click: function() {
            $('.bars').toggleClass('open');
        }
    });
});