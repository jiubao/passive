'use strict';

function index (_) {
  var passive = false;

  function noop () {}

  var options = Object.defineProperty({}, 'passive', {
    get: function get () { passive = true; }
  });

  window.addEventListener('testPassive', noop, options);
  window.removeEventListener('testPassive', noop, options);
  return passive
}

module.exports = index;
