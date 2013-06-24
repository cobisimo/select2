/**
 * Select2 Serbian translation.
 * 
 * Author: Никола Радовановић <cobisimo@gmail.com>
 */
(function ($) {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches: function () { return "Ништа није пронађено"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Молим унесите још " + n + " знак" + (n == 1 ? "" : ((n > 1)&&(n < 5) ? "а" : "ова")); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Молим унесите " + n + " знак" + (n == 1 ? "" : ((n > 1)&&(n < 5) ? "а" : "ова")) + " мање"; },
        formatSelectionTooBig: function (limit) { return "Можете изабрати само " + limit + " ставк" + (n == 1 ? "у" : ((n > 1)&&(n < 5) ? "е" : "и")); },
        formatLoadMore: function (pageNumber) { return "Учитавам још резултата..."; },
        formatSearching: function () { return "Тражим..."; }
    });
})(jQuery);
