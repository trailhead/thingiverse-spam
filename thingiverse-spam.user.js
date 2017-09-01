// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http*://www.thingiverse.com/*
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
        $(this).remove();
    });
})();