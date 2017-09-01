// ==UserScript==
// @name         Thingiverse Spam Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically remove spam posts from dashboard, because Thingiverse can't be bothered!
// @author       Criznach
// @match        http*://www.thingiverse.com/dashboard*
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';

    // Use thingiverse's jquery
    function init_jquery() {
        if (typeof unsafeWindow.jQuery == 'undefined') {
            // Si aún no se ha cargado, esperar un poco más
            window.setTimeout(init_jquery, 100);
        }
        else {
            $ = unsafeWindow.jQuery.noConflict(true);
        }
    }

    init_jquery();

    $(".row_item.personal_notification:contains('medelis')").each(function() {
        $(this).hide();
    });
})();
