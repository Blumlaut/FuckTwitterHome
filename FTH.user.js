// ==UserScript==
// @name         FuckTwitterHome
// @namespace    http://tampermonkey.net/
// @description  FuckTwitterHome - Automatically disables Algorithmic Timeline in favour of latest tweets first.
// @author       Blumlaut
// @match        https://twitter.com/home
// @icon         https://www.google.com/s2/favicons?domain=twitter.com
// @grant        none
// @version      1.0.0
// @updateURL https://raw.githubusercontent.com/Blumlaut/FuckTwitterHome/main/FTH.user.js
// @downloadURL https://raw.githubusercontent.com/Blumlaut/FuckTwitterHome/main/FTH.user.js
// ==/UserScript==

(function() {
    'use strict';

    var currentTry=0

    function findStupidFuckingAlgoToggle() {
        if (currentTry==3) {
            console.log("looks like the algo spared us.. or i broke, fuck you @twitter, in that case.")
            return
        }
        var timelineModeButton = document.querySelector('[aria-label="Top Tweets on"]')
        console.log(timelineModeButton)
        if (!timelineModeButton) {
            setTimeout(findStupidFuckingAlgoToggle, 5000)
            currentTry=+1
        } else {
            timelineModeButton.click()
            
            function fuckingToggleTimeline() {
                var stupidFuckingToggleButton = document.querySelectorAll('[role="menuitem"]')[0]
                console.log(stupidFuckingToggleButton)
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
