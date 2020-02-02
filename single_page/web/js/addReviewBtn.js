define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    $.widget( "Smile.addReviewBtn", {
        _create: function() {
            var reviewBtn = $(this.element),
                reviewFormBlock = $('.block.review-add'),
                reviewForm = $('#review-form');

            reviewFormBlock.hide();
            reviewBtn.on('click', function () {
                reviewFormBlock.show();
                $('html, body').animate({
                    scrollTop: reviewForm.offset().top
                }, 300);
            });
        }
    });

    return $.Smile.addReviewBtn;
});
