// ==UserScript==
// @name         hide paywalls
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.businessinsider.com/*
// @icon         https://www.google.com/s2/favicons?domain=businessinsider.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var hide = function(className){
        var els = document.getElementsByClassName(className);
        if (els && els.length) {
            for(var i = 0; i < els.length; i++){
                els[i].style.display = "none";
            }
        }
    }

    setTimeout(()=>{
        hide('tp-backdrop');
        hide('tp-modal');

        document.body.className="theme-default";//.remove('tp-modal-open');
        document.getElementById('piano-inline-content-wrapper').style.display='block';
    },1500);
    // Your code here...
})();
