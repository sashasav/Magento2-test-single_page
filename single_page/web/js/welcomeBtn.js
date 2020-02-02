define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    $.widget( "Smile.welcomeBtn", {
        _create: function() {
            var xBtn = $(this.element);

            xBtn.on('click', function () {
                $(this).parent('.panel.header').hide();
            });
        }
    });

    return $.Smile.welcomeBtn;
});
