// ==UserScript==
// @name         FuckTwitterHome
// @namespace    http://tampermonkey.net/
// @description  FuckTwitterHome - Automatically disables Algorithmic Timeline in favour of latest tweets first.
// @author       Blumlaut
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?domain=twitter.com
// @grant        none
// @version      1.0.3
// @updateURL https://raw.githubusercontent.com/Blumlaut/FuckTwitterHome/main/FTH.user.js
// @downloadURL https://raw.githubusercontent.com/Blumlaut/FuckTwitterHome/main/FTH.user.js
// ==/UserScript==

(function() {
    'use strict';

    var currentTry=0

    function init() {
        if (currentTry==3) {
            console.log("looks like the algo spared us...")
            return
        }

        var communitiesButton = document.querySelector('[aria-label="Communities"]')
        if (communitiesButton) {
            communitiesButton.remove()
        }
        var timelineModeButton = document.querySelector('[aria-label="Top Tweets on"]')
        if (!timelineModeButton) {
            setTimeout(init, 5000)
            currentTry++
        } else {
            timelineModeButton.click()

            function fuckingToggleTimeline() {
                var stupidFuckingToggleButton = document.querySelectorAll('[role="menuitem"]')[0]
                if (!stupidFuckingToggleButton) {
                    setTimeout(fuckingToggleTimeline, 100)
                } else {
                    stupidFuckingToggleButton.click()
                }
            }
            fuckingToggleTimeline()


        }
    }
    setTimeout(init, 3000)

})();
