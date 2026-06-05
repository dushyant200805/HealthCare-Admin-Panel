// This file must be imported BEFORE any jQuery plugin (e.g. jquery-slimscroll).
// ES module imports are hoisted, so setting globals in the same file as
// plugin imports does NOT guarantee execution order.
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
