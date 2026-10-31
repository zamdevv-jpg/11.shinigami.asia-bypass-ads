// ==UserScript==
// @name         SHINIGAMI // INSTANT SKIP
// @namespace    dev.zam.shinigami
// @version      3.1.0
// @description  Experimental Shinigami chapter timer interception
// @author       zams.dev
// @match        https://11.shinigami.asia/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const CONFIG = Object.freeze({
        TARGET_DELAY: 8010,
        DEBUG: true
    });

    const COLORS = {
        cyan: '#00e5ff',
        green: '#00ff9c',
        purple: '#a855f7',
        gold: '#ffd166',
        white: '#f5f5f5',
        gray: '#8b949e'
    };

    const BANNER = `
███████╗██╗  ██╗██╗███╗   ██╗██╗ ██████╗  █████╗ ███╗   ███╗██╗
██╔════╝██║  ██║██║████╗  ██║██║██╔════╝ ██╔══██╗████╗ ████║██║
███████╗███████║██║██╔██╗ ██║██║  ███╗███████║██╔████╔██║██║
╚════██║██╔══██║██║██║╚██╗██║██║   ██║██╔══██║██║╚██╔╝██║██║
███████║██║  ██║██║██║ ╚████║██║╚██████╔╝██║  ██║██║ ╚═╝ ██║██║
╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝

          I N S T A N T   S K I P
             DEVELOPER: zams.dev

             VERSION: 3.1.0
`;
    function log(label, message, color) {
        if (!CONFIG.DEBUG) return;

        console.log(
            '%c SHINIGAMI %c ' + label + ' %c ' + message,
            'background:#111827;color:#00e5ff;font-weight:bold;padding:4px 7px;',
            'background:#263449;color:#ffffff;font-weight:bold;padding:4px 7px;',
            'color:' + color + ';font-weight:bold;'
        );
    }

    function bypassLog() {
        console.log(
            '%c[SHINIGAMI BYPASS] SUCCES BYPASS ADS',
            'color:#00ff9c;font-size:15px;font-weight:bold;'
        );

        console.log(
            '%c[SHINIGAMI BYPASS] Author : zams.dev',
            'color:#00e5ff;font-size:13px;font-weight:bold;'
        );
    }

    console.log(
        '%c' + BANNER,
        'color:#00e5ff;font-weight:bold;font-size:11px;'
    );

    console.log(
        '%c SYSTEM INITIALIZATION ',
        'background:#a855f7;color:white;font-weight:bold;padding:5px 12px;'
    );

    log('BOOT', 'Initializing system...', COLORS.cyan);
    log('CORE', 'JavaScript runtime detected', COLORS.green);
    log('HOOK', 'Preparing timer interception', COLORS.purple);
    const nativeSetTimeout = window.setTimeout;

    window.setTimeout = function (callback, delay) {
        const args = Array.prototype.slice.call(arguments, 2);

        if (
            typeof callback === 'function' &&
            Number(delay) === CONFIG.TARGET_DELAY
        ) {
            log(
                'TARGET',
                '8010ms timer detected!',
                COLORS.gold
            );

            log(
                'OVERRIDE',
                'Timer delay changed to 0ms',
                COLORS.green
            );

            delay = 0;

            bypassLog();
        }

        args.unshift(delay, callback);

        return nativeSetTimeout.apply(window, args);
    };
    console.log(
        '%c SYSTEM ONLINE ',
        'background:#00ff9c;color:#061b12;font-weight:bold;padding:6px 14px;'
    );

    log(
        'STATUS',
        'Timer hook installed successfully',
        COLORS.green
    );

    log(
        'AUTHOR',
        'zams.dev // Independent Developer',
        COLORS.cyan
    );

    console.log(
        '%c SHINIGAMI // INSTANT SKIP v3.1.0 ',
        'color:#a855f7;font-size:13px;font-weight:bold;'
    );

})();
