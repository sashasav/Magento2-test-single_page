define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    $.widget( "Smile.clearSelection", {
        _create: function() {
            var fieldset = $(this.element),
                clearBtn = $('.clear-selection'),
                fieldsToClear = fieldset.find('.field.configurable .control select');

            clearBtn.on('click', function (e) {
                e.preventDefault();
                fieldsToClear.each(function (i, el) {
                    $(el).val($(el).find('option:first').val());
                });
            });
        }
    });

    return $.Smile.clearSelection;
});
