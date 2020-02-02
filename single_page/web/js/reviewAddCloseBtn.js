define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    $.widget( "Smile.reviewAddCloseBtn", {
        _create: function() {
            var reviewForm = $(this.element),
                reviewBlock = reviewForm.closest('.block.review-add'),
                closeBtn = $('<i class="review-add-close fas fa-times"></i>');

            reviewBlock.append(closeBtn);

            closeBtn.on('click', function (e) {
                e.preventDefault();
                reviewBlock.hide();
            });
        }
    });

    return $.Smile.reviewAddCloseBtn;
});
