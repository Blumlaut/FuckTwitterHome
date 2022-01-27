// ==UserScript==
// @name         FuckTwitterHome
// @namespace    http://tampermonkey.net/
// @description  FuckTwitterHome - Automatically disables Algorithmic Timeline in favour of latest tweets first.
// @author       Blumlaut
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?domain=twitter.com
// @grant        none
// @version      1.0.1
// @updateURL https://raw.githubusercontent.com/Blumlaut/FuckTwitterHome/main/FTH.user.js
// @downloadURL https://raw.githubusercontent.com/Blumlaut/FuckTwitterHome/main/FTH.user.js
// ==/UserScript==

(function() {
    'use strict';

    var currentTry=0

    function findStupidFuckingAlgoToggle() {
        if (currentTry==3) {
            console.log("looks like the algo spared us...")
            return
        }
        var timelineModeButton = document.querySelector('[aria-label="Top Tweets on"]')
        if (!timelineModeButton) {
            setTimeout(findStupidFuckingAlgoToggle, 5000)
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
    setTimeout(findStupidFuckingAlgoToggle, 3000)

})();
