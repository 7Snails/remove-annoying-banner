// ==UserScript==
// @name         Remove Annoying Banner
// @version      0.1
// @description  Remove the annoying banner from the Scratch home page
// @author       @7Snails
// @match        https://scratch.mit.edu/*
// @match        http://scratch.mit.edu/*
// @grant        none
// @downloadURL  https://github.com/7Snails/remove-annoying-banner/raw/master/rab.user.js
// @updateURL    https://github.com/7Snails/remove-annoying-banner/raw/master/rab.user.js
// ==/UserScript==

document.getElementsByClassName("title-banner mod-splash-tenth")[0].style.display = "none";
