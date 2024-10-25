// ==UserScript==
// @name         XOVI Tools
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description
// @author       T.Hinze
// @match        https://suite.xovi.net/onpage/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // -----

  /**
   * insert custom CSS
   *
   */
  function insertCss(css, css_id) {
    var style = document.createElement('STYLE');
    if (css_id) {
      style.id = css_id;
    }
    style.innerHTML = css;
    document.querySelector('head').appendChild(style);
  }

  /**
   * replace old styles-element with new one
   *
   * @param css_id
   * @param css
   */
  function updateCss(css, css_id) {
    var styles = document.querySelector('#' + css_id);
    if (styles) {
      styles.parentNode.removeChild(styles);
    }
    insertCss(css, css_id);
  }

  /**
   * set multiple styles on an element
   *
   * @param elem      DOM node
   * @param styles    key-value array {width: 'auto', height: 'auto', ... }
   */
  function setStylesOnElement(elem, styles){
    Object.assign(elem.style, styles);
  }

  var css = [];
  // cfg CSS
  css.push('#content #pageContent .card-content { max-width: 1200px; } '); // onpage - overview - summary
  css.push('');
  css.push('');
  css = css.join('');
  updateCss(css, 'xovi-tools');

  // ----- ???  -----
  /*
      var watcher1;

      function modifyUrlList() {
          var links = document.querySelectorAll('.card table.dataTable a.tooltipped');
          links.forEach( function (elem) {
              elem.innerText = elem.dataset.tooltip;
          });
          console.log('XOVI links modified');
      }

      function execScript() {
          if (document.querySelector('.card table.dataTable a.tooltipped')) {
              modifyUrlList();
          }
      }

      function waitUntilLoaded() {
          if (document.querySelector('div.circle') === null) { // no .circle == loading finsihed ?
              window.clearInterval(watcher1);
              execScript();
          }
      }

      watcher1 = window.setTimeout(execScript, 2000);
  */


  console.log('XOVI Tools executed ...');

})();