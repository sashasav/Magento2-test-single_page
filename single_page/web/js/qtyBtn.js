define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    $.widget( "Smile.qtyBtn", {
        _create: function() {
            var qtyInput = $(this.element);

            qtyInput.parent().append('<button class="qty-btn btn-plus"><i class="fas fa-caret-up"></i></i></button>').append('<button class="qty-btn btn-minus"><i class="fas fa-caret-down"></i></i></button>');

            $('.btn-plus').on('click', function (e) {
                e.preventDefault();
                qtyInput.val(parseInt(qtyInput.val()) + 1);
            });

            $('.btn-minus').on('click', function (e) {
                e.preventDefault();
                var count = parseInt(qtyInput.val()) - 1;
                count = count < 1 ? 1 : count;
                qtyInput.val(count);
            });
        }
    });

    return $.Smile.qtyBtn;
});
