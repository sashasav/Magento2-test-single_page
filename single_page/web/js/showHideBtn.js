define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    $.widget( "Smile.searchBtn", {
        options: {
            elementsBtns: [],
            elementsParents: '',
            elementsToHide: []
        },

        _create: function() {
            var btnsWrapper = $(this.element),
                isShownArr = [];

            function fooShowHide(wrapper, elementsBtnsArr, elementsParentsNode, elementsToHideArr, isShown) {
                $(elementsBtnsArr).each(function (i, el) {
                    wrapper.find(el).closest(elementsParentsNode).find(elementsToHideArr[i]).hide();
                    isShown[i] = false;

                    $(el).on('click', function () {
                        if (!isShown[i]) {
                            wrapper.find(el).closest(elementsParentsNode).find(elementsToHideArr[i]).show();
                            isShown.splice(i, 1, true);
                        } else {
                            wrapper.find(el).closest(elementsParentsNode).find(elementsToHideArr[i]).hide();
                            isShown.splice(i, 1, false);
                        }
                    })
                });
            }

            fooShowHide(btnsWrapper,
                this.options.elementsBtns,
                this.options.elementsParents,
                this.options.elementsToHide,
                isShownArr);
        }
    });

    return $.Smile.searchBtn;
});
