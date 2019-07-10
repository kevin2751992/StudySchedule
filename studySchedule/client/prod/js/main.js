(function(){function s(d,e,n){function t(l,i){if(!e[l]){if(!d[l]){var r="function"==typeof require&&require;if(!i&&r)return r(l,!0);if(o)return o(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var a=e[l]={exports:{}};d[l][0].call(a.exports,function(e){var a=d[l][1][e];return t(a||e)},a,a.exports,s,d,e,n)}return e[l].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)t(n[a]);return t}return s})()({1:[function(e,t){/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */(function(e,n){"use strict";"object"==typeof t&&"object"==typeof t.exports?t.exports=e.document?n(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(e)})("undefined"==typeof window?this:window,function(e,t){// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";var re=Math.ceil,de=Math.max;function n(e,t,n){n=n||pe;var a,o,s=n.createElement("script");if(s.text=e,t)for(a in Ne)// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
o=t[a]||t.getAttribute&&t.getAttribute(a),o&&s.setAttribute(a,o);n.head.appendChild(s).parentNode.removeChild(s)}function a(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ge[ye.call(e)]||"object":typeof e;// Support: Android <=2.3 only (functionish RegExp)
}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
function o(e){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=a(e);return!(we(e)||Ce(e))&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function s(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}// Implement the identical functionality for filter and not
function r(e,t,n){// Arraylike of elements (jQuery, arguments, Array)
return we(t)?ke.grep(e,function(e,a){return!!t.call(e,a,e)!==n}):t.nodeType?ke.grep(e,function(e){return e===t!==n}):"string"==typeof t?ke.filter(t,e,n):ke.grep(e,function(e){return-1<fe.call(t,e)!==n});// Single element
// Filtered directly for both simple and complex selectors
}function d(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}// Convert String-formatted options into Object-formatted ones
function l(e){var t={};return ke.each(e.match(Ie)||[],function(e,n){t[n]=!0}),t}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */function p(e){return e}function c(e){throw e}function u(e,t,n,a){var o;try{e&&we(o=e.promise)?o.call(e).done(t).fail(n):e&&we(o=e.then)?o.call(e,t,n):t.apply(void 0,[e].slice(a))}catch(e){n.apply(void 0,[e])}}// The ready event handler and self cleanup method
function h(){pe.removeEventListener("DOMContentLoaded",h),e.removeEventListener("load",h),ke.ready()}// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
// Used by camelCase as callback to replace()
function m(e,t){return t.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function f(e){return e.replace(_e,"ms-").replace(Fe,m)}function g(){this.expando=ke.expando+g.uid++}function y(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:$e.test(e)?JSON.parse(e):e);// Only convert to a number if it doesn't change the string
}function x(e,t,n){var a;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType)if(a="data-"+t.replace(Ve,"-$&").toLowerCase(),n=e.getAttribute(a),"string"==typeof n){try{n=y(n)}catch(t){}// Make sure we set the data so it isn't changed later
ze.set(e,t,n)}else n=void 0;return n}function b(e,t,n,a){var o,i,s=20,r=a?function(){return a.cur()}:function(){return ke.css(e,t,"")},d=r(),l=n&&n[3]||(ke.cssNumber[t]?"":"px"),// Starting value computation is required for potential unit mismatches
p=e.nodeType&&(ke.cssNumber[t]||"px"!==l&&+d)&&Ge.exec(ke.css(e,t));if(p&&p[3]!==l){for(d/=2,l=l||p[3],p=+d||1;s--;)// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
ke.style(e,t,p+l),0>=(1-i)*(1-(i=r()/d||.5))&&(s=0),p/=i;p*=2,ke.style(e,t,p+l),n=n||[]}return n&&(p=+p||+d||0,o=n[1]?p+(n[1]+1)*n[2]:+n[2],a&&(a.unit=l,a.start=p,a.end=o)),o}function v(e){var t,n=e.ownerDocument,a=e.nodeName,o=nt[a];return o?o:(t=n.body.appendChild(n.createElement(a)),o=ke.css(t,"display"),t.parentNode.removeChild(t),"none"===o&&(o="block"),nt[a]=o,o)}function T(e,t){// Determine new display value for elements that need to change
for(var n,a,o=[],i=0,s=e.length;i<s;i++)(a=e[i],!!a.style)&&(n=a.style.display,t?("none"===n&&(o[i]=Xe.get(a,"display")||null,!o[i]&&(a.style.display="")),""===a.style.display&&et(a)&&(o[i]=v(a))):"none"!==n&&(o[i]="none",Xe.set(a,"display",n)));// Set the display of the elements in a second loop to avoid constant reflow
for(i=0;i<s;i++)null!=o[i]&&(e[i].style.display=o[i]);return e}function w(e,t){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var n;return n="undefined"==typeof e.getElementsByTagName?"undefined"==typeof e.querySelectorAll?[]:e.querySelectorAll(t||"*"):e.getElementsByTagName(t||"*"),void 0===t||t&&s(e,t)?ke.merge([e],n):n}// Mark scripts as having already been evaluated
function C(e,t){for(var n=0,a=e.length;n<a;n++)Xe.set(e[n],"globalEval",!t||Xe.get(t[n],"globalEval"))}function N(e,t,n,o,s){for(var r,d,p,c,u,h,m=t.createDocumentFragment(),f=[],g=0,y=e.length;g<y;g++)if(r=e[g],r||0===r)// Add nodes directly
if("object"===a(r))// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
ke.merge(f,r.nodeType?[r]:r);else if(!rt.test(r))f.push(t.createTextNode(r));else{for(d=d||m.appendChild(t.createElement("div")),p=(ot.exec(r)||["",""])[1].toLowerCase(),c=st[p]||st._default,d.innerHTML=c[1]+ke.htmlPrefilter(r)+c[2],h=c[0];h--;)d=d.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
ke.merge(f,d.childNodes),d=m.firstChild,d.textContent=""}// Remove wrapper from fragment
for(m.textContent="",g=0;r=f[g++];){// Skip elements already in the context collection (trac-4087)
if(o&&-1<ke.inArray(r,o)){s&&s.push(r);continue}// Capture executables
if(u=Je(r),d=w(m.appendChild(r),"script"),u&&C(d),n)for(h=0;r=d[h++];)it.test(r.type||"")&&n.push(r)}return m}function k(){return!0}function S(){return!1}// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function j(e,t){return e===D()==("focus"===t)}// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function D(){try{return pe.activeElement}catch(e){}}function E(e,t,n,a,o,i){var s,r;// Types can be a map of types/handlers
if("object"==typeof t){for(r in"string"!=typeof n&&(a=a||n,n=void 0),t)E(e,r,n,a,t[r],i);return e}if(null==a&&null==o?(o=n,a=n=void 0):null==o&&("string"==typeof n?(o=a,a=void 0):(o=a,a=n,n=void 0)),!1===o)o=S;else if(!o)return e;return 1===i&&(s=o,o=function(e){return ke().off(e),s.apply(this,arguments)},o.guid=s.guid||(s.guid=ke.guid++)),e.each(function(){ke.event.add(this,t,o,a,n)})}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function i(e,t,n){// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
return n?void(// Register the controller as a special universal handler for all event namespaces
Xe.set(e,t,!1),ke.event.add(e,t,{namespace:!1,handler:function(e){var a,o,i=Xe.get(this,t);if(!(1&e.isTrigger&&this[t]))i.length&&(// ...and capture the result
// Abort handling of the native event
Xe.set(this,t,{value:ke.event.trigger(// Support: IE <=9 - 11+
// Extend with the prototype to reset the above stopImmediatePropagation()
ke.extend(i[0],ke.Event.prototype),i.slice(1),this)}),e.stopImmediatePropagation());else// Interrupt processing of the outer synthetic .trigger()ed event
// Saved data should be false in such cases, but might be a leftover capture object
// from an async native handler (gh-4350)
if(!!i.length)(ke.event.special[t]||{}).delegateType&&e.stopPropagation();else if(i=ue.call(arguments),Xe.set(this,t,i),a=n(this,t),this[t](),o=Xe.get(this,t),i!==o||a?Xe.set(this,t,!1):o={},i!==o)return e.stopImmediatePropagation(),e.preventDefault(),o.value;// If this is an inner synthetic event for an event with a bubbling surrogate
// (focus or blur), assume that the surrogate already propagated from triggering the
// native event and prevent that from happening again here.
// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
// bubbling surrogate propagates *after* the non-bubbling base), but that seems
// less bad than duplication.
// If this is a native event triggered above, everything is now in order
// Fire an inner synthetic event with the original arguments
}})):void(void 0===Xe.get(e,t)&&ke.event.add(e,t,k))}// Prefer a tbody over its parent table for containing new rows
function A(e,t){return s(e,"table")&&s(11===t.nodeType?t.firstChild:t,"tr")?ke(e).children("tbody")[0]||e:e}// Replace/restore the type attribute of script elements for safe DOM manipulation
function L(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function q(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function H(e,t){var n,a,o,s,r,d,p,c;if(1===t.nodeType){// 1. Copy private data: events, handlers, etc.
if(Xe.hasData(e)&&(s=Xe.access(e),r=Xe.set(t,s),c=s.events,c))for(o in delete r.handle,r.events={},c)for(n=0,a=c[o].length;n<a;n++)ke.event.add(t,o,c[o][n]);// 2. Copy user data
ze.hasData(e)&&(d=ze.access(e),p=ke.extend({},d),ze.set(t,p))}}// Fix IE bugs, see support tests
function P(e,t){var n=t.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&at.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function O(e,t,a,o){t=he.apply([],t);var s,r,d,p,c,u,h=0,m=e.length,l=t[0],f=we(l);// We can't cloneNode fragments that contain checked, in WebKit
if(f||1<m&&"string"==typeof l&&!Te.checkClone&&ht.test(l))return e.each(function(n){var i=e.eq(n);f&&(t[0]=l.call(this,n,i.html())),O(i,t,a,o)});if(m&&(s=N(t,e[0].ownerDocument,!1,e,o),r=s.firstChild,1===s.childNodes.length&&(s=r),r||o))// Require either new content or an interest in ignored elements to invoke the callback
{// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(d=ke.map(w(s,"script"),L),p=d.length;h<m;h++)c=s,h!=m-1&&(c=ke.clone(c,!0,!0),p&&ke.merge(d,w(c,"script"))),a.call(e[h],c,h);if(p)// Evaluate executable scripts on first document insertion
for(u=d[d.length-1].ownerDocument,ke.map(d,q),h=0;h<p;h++)c=d[h],it.test(c.type||"")&&!Xe.access(c,"globalEval")&&ke.contains(u,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?ke._evalUrl&&!c.noModule&&ke._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")}):n(c.textContent.replace(mt,""),c,u))}return e}function M(e,t,n){for(var a,o=t?ke.filter(t,e):e,s=0;null!=(a=o[s]);s++)n||1!==a.nodeType||ke.cleanData(w(a)),a.parentNode&&(n&&Je(a)&&C(w(a,"script")),a.parentNode.removeChild(a));return e}function I(e,t,n){var a,o,i,s,// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
r=e.style;return n=n||gt(e),n&&(s=n.getPropertyValue(t)||n[t],""===s&&!Je(e)&&(s=ke.style(e,t)),!Te.pixelBoxStyles()&&ft.test(s)&&yt.test(t)&&(a=r.width,o=r.minWidth,i=r.maxWidth,r.minWidth=r.maxWidth=r.width=s,s=n.width,r.width=a,r.minWidth=o,r.maxWidth=i)),void 0===s?s:// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
s+""}function R(e,t){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments);// Hook needed; redefine it so that the support test is not executed again.
}}}// Return a vendor-prefixed property or undefined
function W(e){for(// Check for vendor prefixed names
var t=e[0].toUpperCase()+e.slice(1),n=xt.length;n--;)if(e=xt[n]+t,e in bt)return e}// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function B(e){var t=ke.cssProps[e]||vt[e];return t?t:e in bt?e:vt[e]=W(e)||e}function _(e,t,n){// Any relative (+/-) values have already been
// normalized at this point
var a=Ge.exec(t);return a?// Guard against undefined "subtract", e.g., when used as in cssHooks
de(0,a[2]-(n||0))+(a[3]||"px"):t}function F(e,t,n,a,o,s){var r="width"===t?1:0,d=0,l=0;// Adjustment may not be necessary
if(n===(a?"border":"content"))return 0;for(;4>r;r+=2)"margin"===n&&(l+=ke.css(e,n+Qe[r],!0,o)),a?("content"===n&&(l-=ke.css(e,"padding"+Qe[r],!0,o)),"margin"!==n&&(l-=ke.css(e,"border"+Qe[r]+"Width",!0,o))):(l+=ke.css(e,"padding"+Qe[r],!0,o),"padding"===n?d+=ke.css(e,"border"+Qe[r]+"Width",!0,o):l+=ke.css(e,"border"+Qe[r]+"Width",!0,o));// Account for positive content-box scroll gutter when requested by providing computedVal
return!a&&0<=s&&(l+=de(0,re(e["offset"+t[0].toUpperCase()+t.slice(1)]-s-l-d-.5// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
// Use an explicit zero to avoid NaN (gh-3964)
))||0),l}function U(e,t,n){// Start with computed style
var a=gt(e),// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
// Fake content-box until we know it's needed to know the true value.
o=!Te.boxSizingReliable()||n,i=o&&"border-box"===ke.css(e,"boxSizing",!1,a),s=i,r=I(e,t,a),d="offset"+t[0].toUpperCase()+t.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(ft.test(r)){if(!n)return r;r="auto"}// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
// Support: IE 9-11 only
// Also use offsetWidth/offsetHeight for when box sizing is unreliable
// We use getClientRects() to check for hidden/disconnected.
// In those cases, the computed value can be trusted to be border-box
// Adjust for the element's box model
return(!Te.boxSizingReliable()&&i||"auto"===r||!parseFloat(r)&&"inline"===ke.css(e,"display",!1,a))&&e.getClientRects().length&&(i="border-box"===ke.css(e,"boxSizing",!1,a),s=d in e,s&&(r=e[d])),r=parseFloat(r)||0,r+F(e,t,n||(i?"border":"content"),s,a,// Provide the current computed size to request scroll gutter calculation (gh-3589)
r)+"px"}function X(e,t,n,a,o){return new X.prototype.init(e,t,n,a,o)}function z(){St&&(!1===pe.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(z):e.setTimeout(z,ke.fx.interval),ke.fx.tick())}// Animations created synchronously will run synchronously
function $(){return e.setTimeout(function(){kt=void 0}),kt=Date.now()}// Generate parameters to create a standard animation
function V(e,t){var n,a=0,o={height:e};// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
for(t=t?1:0;4>a;a+=2-t)n=Qe[a],o["margin"+n]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function Y(e,t,n){for(var a,o=(K.tweeners[t]||[]).concat(K.tweeners["*"]),i=0,s=o.length;i<s;i++)if(a=o[i].call(n,t,e))// We're done with this property
return a}function G(e,t,n){var a,o,i,s,r,d,l,p,c="width"in t||"height"in t,u=this,h={},m=e.style,f=e.nodeType&&et(e),g=Xe.get(e,"fxshow");// Queue-skipping animations hijack the fx hooks
// Detect show/hide animations
for(a in n.queue||(s=ke._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,r=s.empty.fire,s.empty.fire=function(){s.unqueued||r()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,ke.queue(e,"fx").length||s.empty.fire()})})),t)if(o=t[a],jt.test(o)){if(delete t[a],i=i||"toggle"===o,o===(f?"hide":"show"))// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"===o&&g&&void 0!==g[a])f=!0;else continue;h[a]=g&&g[a]||ke.style(e,a)}// Bail out if this is a no-op like .hide().hide()
if(d=!ke.isEmptyObject(t),d||!ke.isEmptyObject(h))for(a in c&&1===e.nodeType&&(n.overflow=[m.overflow,m.overflowX,m.overflowY],l=g&&g.display,null==l&&(l=Xe.get(e,"display")),p=ke.css(e,"display"),"none"===p&&(l?p=l:(T([e],!0),l=e.style.display||l,p=ke.css(e,"display"),T([e]))),("inline"===p||"inline-block"===p&&null!=l)&&"none"===ke.css(e,"float")&&(!d&&(u.done(function(){m.display=l}),null==l&&(p=m.display,l="none"===p?"":p)),m.display="inline-block")),n.overflow&&(m.overflow="hidden",u.always(function(){m.overflow=n.overflow[0],m.overflowX=n.overflow[1],m.overflowY=n.overflow[2]})),d=!1,h)// Per-property setup
d||(g?"hidden"in g&&(f=g.hidden):g=Xe.access(e,"fxshow",{display:l}),i&&(g.hidden=!f),f&&T([e],!0),u.done(function(){for(a in f||T([e]),Xe.remove(e,"fxshow"),h)ke.style(e,a,h[a])})),d=Y(f?g[a]:0,a,u),a in g||(g[a]=d.start,f&&(d.end=d.start,d.start=0));// Restrict "overflow" and "display" styles during box animations
}function Q(e,t){var n,a,o,i,s;// camelCase, specialEasing and expand cssHook pass
for(n in e)if(a=f(n),o=t[a],i=e[n],Array.isArray(i)&&(o=i[1],i=e[n]=i[0]),n!=a&&(e[a]=i,delete e[n]),s=ke.cssHooks[a],s&&"expand"in s)// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in i=s.expand(i),delete e[a],i)n in e||(e[n]=i[n],t[n]=o);else t[a]=o}function K(e,t,n){var a,o,i=0,s=K.prefilters.length,r=ke.Deferred().always(function(){delete d.elem}),d=function(){if(o)return!1;for(var t=kt||$(),n=de(0,l.startTime+l.duration-t),// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
a=n/l.duration||0,i=1-a,s=0,d=l.tweens.length;s<d;s++)l.tweens[s].run(i);// If there's more to do, yield
return(r.notifyWith(e,[l,i,n]),1>i&&d)?n:(d||r.notifyWith(e,[l,1,0]),r.resolveWith(e,[l]),!1);// If this was an empty animation, synthesize a final progress notification
},l=r.promise({elem:e,props:ke.extend({},t),opts:ke.extend(!0,{specialEasing:{},easing:ke.easing._default},n),originalProperties:t,originalOptions:n,startTime:kt||$(),duration:n.duration,tweens:[],createTween:function(t,n){var a=ke.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(a),a},stop:function(t){var n=0,// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
a=t?l.tweens.length:0;if(o)return this;for(o=!0;n<a;n++)l.tweens[n].run(1);// Resolve when we played the last frame; otherwise, reject
return t?(r.notifyWith(e,[l,1,0]),r.resolveWith(e,[l,t])):r.rejectWith(e,[l,t]),this}}),p=l.props;for(Q(p,l.opts.specialEasing);i<s;i++)if(a=K.prefilters[i].call(l,e,p,l.opts),a)return we(a.stop)&&(ke._queueHooks(l.elem,l.opts.queue).stop=a.stop.bind(a)),a;return ke.map(p,Y,l),we(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ke.fx.timer(ke.extend(d,{elem:e,anim:l,queue:l.opts.queue})),l}// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function J(e){var t=e.match(Ie)||[];return t.join(" ")}function Z(e){return e.getAttribute&&e.getAttribute("class")||""}function ee(e){return Array.isArray(e)?e:"string"==typeof e?e.match(Ie)||[]:[]}function te(e,t,n,o){if(Array.isArray(t))ke.each(t,function(t,a){n||Wt.test(e)?o(e,a):te(e+"["+("object"==typeof a&&null!=a?t:"")+"]",a,n,o)});else if(!n&&"object"===a(t))// Serialize object item.
for(var i in t)te(e+"["+i+"]",t[i],n,o);else// Serialize scalar item.
o(e,t)}// Serialize an array of form elements or a set of
// key/values into a query string
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function ne(e){// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var a,o=0,s=t.toLowerCase().match(Ie)||[];if(we(n))// For each dataType in the dataTypeExpression
for(;a=s[o++];)// Prepend if requested
"+"===a[0]?(a=a.slice(1)||"*",(e[a]=e[a]||[]).unshift(n)):(e[a]=e[a]||[]).push(n)}}// Base inspection function for prefilters and transports
function ae(e,t,n,a){function o(r){var d;return i[r]=!0,ke.each(e[r]||[],function(e,r){var l=r(t,n,a);return"string"!=typeof l||s||i[l]?s?!(d=l):void 0:(t.dataTypes.unshift(l),o(l),!1)}),d}var i={},s=e===Kt;return o(t.dataTypes[0])||!i["*"]&&o("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function oe(e,t){var n,a,o=ke.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:a||(a={}))[n]=t[n]);return a&&ke.extend(!0,e,a),e}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function ie(e,t,n){// Remove auto dataType and get content-type in the process
for(var a,o,i,s,r=e.contents,d=e.dataTypes;"*"===d[0];)d.shift(),void 0===a&&(a=e.mimeType||t.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(a)for(o in r)if(r[o]&&r[o].test(a)){d.unshift(o);break}// Check to see if we have a response for the expected dataType
if(d[0]in n)i=d[0];else{// Try convertible dataTypes
for(o in n){if(!d[0]||e.converters[o+" "+d[0]]){i=o;break}s||(s=o)}// Or just use first one
i=i||s}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
return i?(i!==d[0]&&d.unshift(i),n[i]):void 0}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function se(e,t,n,a){var o,i,s,r,d,l={},// Work with a copy of dataTypes in case we need to modify it for conversion
p=e.dataTypes.slice();// Create converters map with lowercased keys
if(p[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];// Convert to each sequential dataType
for(i=p.shift();i;)if(e.responseFields[i]&&(n[e.responseFields[i]]=t),!d&&a&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),d=i,i=p.shift(),i)// There's only work to do if current dataType is non-auto
if("*"===i)i=d;else if("*"!==d&&d!=i){// If none found, seek a pair
if(s=l[d+" "+i]||l["* "+i],!s)for(o in l)if(r=o.split(" "),r[1]===i&&(s=l[d+" "+r[0]]||l["* "+r[0]],s)){!0===s?s=l[o]:!0!==l[o]&&(i=r[0],p.unshift(r[1]));break}// Apply converter (if not an equivalence)
if(!0!==s)// Unless errors are allowed to bubble, catch and return them
if(s&&e.throws)t=s(t);else try{t=s(t)}catch(t){return{state:"parsererror",error:s?t:"No conversion from "+d+" to "+i}}}return{state:"success",data:t}}var le=[],pe=e.document,ce=Object.getPrototypeOf,ue=le.slice,he=le.concat,me=le.push,fe=le.indexOf,ge={},ye=ge.toString,xe=ge.hasOwnProperty,be=xe.toString,ve=be.call(Object),Te={},we=function(e){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
return"function"==typeof e&&"number"!=typeof e.nodeType},Ce=function(e){return null!=e&&e===e.window},Ne={type:!0,src:!0,nonce:!0,noModule:!0},// Define a local copy of jQuery
ke=function(e,t){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new ke.fn.init(e,t)},// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
Se=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;ke.fn=ke.prototype={// The current version of jQuery being used
jquery:"3.4.1",constructor:ke,// The default length of a jQuery object is 0
length:0,toArray:function(){return ue.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){// Return all the elements in a clean array
return null==e?ue.call(this):0>e?this[e+this.length]:this[e];// Return just the one element from the set
},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){// Build a new jQuery matched element set
var t=ke.merge(this.constructor(),e);// Add the old object onto the stack (as a reference)
// Return the newly-formed element set
return t.prevObject=this,t},// Execute a callback for every element in the matched set.
each:function(e){return ke.each(this,e)},map:function(e){return this.pushStack(ke.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(ue.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:me,sort:le.sort,splice:le.splice},ke.extend=ke.fn.extend=function(){var e,t,n,a,o,s,r=arguments[0]||{},d=1,l=arguments.length,p=!1;// Handle a deep copy situation
for("boolean"==typeof r&&(p=r,r=arguments[d]||{},d++),"object"==typeof r||we(r)||(r={}),d===l&&(r=this,d--);d<l;d++)// Only deal with non-null/undefined values
if(null!=(e=arguments[d]))// Extend the base object
for(t in e)// Prevent Object.prototype pollution
// Prevent never-ending loop
(a=e[t],"__proto__"!==t&&r!==a)&&(p&&a&&(ke.isPlainObject(a)||(o=Array.isArray(a)))?(n=r[t],s=o&&!Array.isArray(n)?[]:o||ke.isPlainObject(n)?n:{},o=!1,r[t]=ke.extend(p,s,a)):void 0!==a&&(r[t]=a));// Recurse if we're merging plain objects or arrays
// Return the modified object
return r},ke.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+("3.4.1"+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Objects with prototype are plain iff they were constructed by a global Object function
return!!(e&&"[object Object]"===ye.call(e))&&((t=ce(e),!!!t)||(n=xe.call(t,"constructor")&&t.constructor,"function"==typeof n&&be.call(n)===ve));// Objects with no prototype (e.g., `Object.create( null )`) are plain
},isEmptyObject:function(e){for(var t in e)return!1;return!0},// Evaluates a script in a global context
globalEval:function(e,t){n(e,{nonce:t&&t.nonce})},each:function(e,t){var n,a=0;if(o(e))for(n=e.length;a<n&&!1!==t.call(e[a],a,e[a]);a++);else for(a in e)if(!1===t.call(e[a],a,e[a]))break;return e},// Support: Android <=4.0 only
trim:function(e){return null==e?"":(e+"").replace(Se,"")},// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(o(Object(e))?ke.merge(n,"string"==typeof e?[e]:e):me.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:fe.call(t,e,n)},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,a=0,o=e.length;a<n;a++)e[o++]=t[a];return e.length=o,e},grep:function(e,t,n){// Go through the array, only saving the items
// that pass the validator function
for(var a,o=[],s=0,r=e.length;s<r;s++)a=!t(e[s],s),a!==!n&&o.push(e[s]);return o},// arg is for internal usage only
map:function(e,t,n){var a,s,r=0,d=[];// Go through the array, translating each of the items to their new values
if(o(e))for(a=e.length;r<a;r++)s=t(e[r],r,n),null!=s&&d.push(s);// Go through every key on the object,
else for(r in e)s=t(e[r],r,n),null!=s&&d.push(s);// Flatten any nested arrays
return he.apply([],d)},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:Te}),"function"==typeof Symbol&&(ke.fn[Symbol.iterator]=le[Symbol.iterator]),ke.each(["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error","Symbol"],function(e,t){ge["[object "+t+"]"]=t.toLowerCase()});var je=/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */function(e){function t(e,t,n,a){var o,s,r,d,l,p,c,h=t&&t.ownerDocument,// nodeType defaults to 9, since context defaults to document
f=t?t.nodeType:9;// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==f&&9!==f&&11!==f)return n;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!a&&((t?t.ownerDocument||t:F)!==P&&H(t),t=t||P,M)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==f&&(l=fe.exec(e)))// ID selector
if(!(o=l[1])){if(l[2])return ee.apply(n,t.getElementsByTagName(e)),n;// Class selector
if((o=l[3])&&C.getElementsByClassName&&t.getElementsByClassName)return ee.apply(n,t.getElementsByClassName(o)),n}else// Document context
if(9===f){if(!(r=t.getElementById(o)))return n;// Element context
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(r.id===o)return n.push(r),n}else// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(h&&(r=h.getElementById(o))&&B(t,r)&&r.id===o)return n.push(r),n;// Type selector
// Take advantage of querySelectorAll
if(C.qsa&&!Y[e+" "]&&(!I||!I.test(e))&&(// Support: IE 8 only
// Exclude object elements
1!==f||"object"!==t.nodeName.toLowerCase())){// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// Thanks to Andrew Dupont for this technique.
if(c=e,h=t,1===f&&re.test(e)){for((d=t.getAttribute("id"))?d=d.replace(be,ve):t.setAttribute("id",d=_),p=j(e),s=p.length;s--;)p[s]="#"+d+" "+m(p[s]);c=p.join(","),h=ge.test(e)&&u(t.parentNode)||t}try{return ee.apply(n,h.querySelectorAll(c)),n}catch(t){Y(e,!0)}finally{d===_&&t.removeAttribute("id")}}}// All others
return E(e.replace(oe,"$1"),t,n,a)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function n(){function e(n,a){return t.push(n+" ")>N.cacheLength&&delete e[t.shift()],e[n+" "]=a}var t=[];return e}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */function a(e){return e[_]=!0,e}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function o(e){var t=P.createElement("fieldset");try{return!!e(t)}catch(t){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */function s(e,t){for(var n=e.split("|"),a=n.length;a--;)N.attrHandle[n[a]]=t}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */function r(e,t){var n=t&&e,a=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;// Use IE sourceIndex if available on both nodes
if(a)return a;// Check if b follows a
if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function d(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function p(e){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
// Remaining elements are neither :enabled nor :disabled
return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||// Where there is no isDisabled, check manually
/* jshint -W018 */t.isDisabled!==!e&&we(t)===e:t.disabled===e:!!("label"in t)&&t.disabled===e}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function c(e){return a(function(t){return t=+t,a(function(n,a){// Match elements found at the specified indexes
for(var o,s=e([],n.length,t),r=s.length;r--;)n[o=s[r]]&&(n[o]=!(a[o]=n[o]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function u(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}// Expose support vars for convenience
// Easy API for creating new setFilters
function h(){}function m(e){for(var t=0,n=e.length,a="";t<n;t++)a+=e[t].value;return a}function f(e,t,n){var a=t.dir,o=t.next,i=o||a,s=n&&"parentNode"===i,r=X++;return t.first?// Check against closest ancestor/preceding element
function(t,n,o){for(;t=t[a];)if(1===t.nodeType||s)return e(t,n,o);return!1}:// Check against all ancestor/preceding elements
function(t,n,d){var l,p,c,u=[U,r];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(d){for(;t=t[a];)if((1===t.nodeType||s)&&e(t,n,d))return!0;}else for(;t=t[a];)if(1===t.nodeType||s)if(c=t[_]||(t[_]={}),p=c[t.uniqueID]||(c[t.uniqueID]={}),o&&o===t.nodeName.toLowerCase())t=t[a]||t;else{if((l=p[i])&&l[0]===U&&l[1]===r)// Assign to newCache so results back-propagate to previous elements
return u[2]=l[2];// A match means we're done; a fail means we have to keep checking
if(p[i]=u,u[2]=e(t,n,d))return!0}return!1}}function g(e){return 1<e.length?function(t,n,a){for(var o=e.length;o--;)if(!e[o](t,n,a))return!1;return!0}:e[0]}function y(e,n,a){for(var o=0,s=n.length;o<s;o++)t(e,n[o],a);return a}function x(e,t,n,a,o){for(var s,r=[],d=0,l=e.length;d<l;d++)(s=e[d])&&(!n||n(s,a,o))&&(r.push(s),null!=t&&t.push(d));return r}function b(e,t,n,o,s,r){return o&&!o[_]&&(o=b(o)),s&&!s[_]&&(s=b(s,r)),a(function(a,r,d,l){var p,c,u,h=[],m=[],f=r.length,// Get initial elements from seed or context
g=a||y(t||"*",d.nodeType?[d]:d,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
b=e&&(a||!t)?x(g,h,e,d,l):g,v=n?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
s||(a?e:f||o)?// ...intermediate processing is necessary
[]:// ...otherwise use results directly
r:b;// Find primary matches
// Apply postFilter
if(n&&n(b,v,d,l),o)for(p=x(v,m),o(p,[],d,l),c=p.length;c--;)(u=p[c])&&(v[m[c]]=!(b[m[c]]=u));if(!a)v=x(v===r?v.splice(f,v.length):v),s?s(null,r,v,l):ee.apply(r,v);else if(s||e){if(s){for(p=[],c=v.length;c--;)(u=v[c])&&// Restore matcherIn since elem is not yet a final match
p.push(b[c]=u);s(null,v=[],p,l)}// Move matched elements from seed to results to keep them synchronized
for(c=v.length;c--;)(u=v[c])&&-1<(p=s?ne(a,u):h[c])&&(a[p]=!(r[p]=u))}// Add elements to results, through postFinder if defined
})}function v(e){for(var t,n,a,o=e.length,s=N.relative[e[0].type],r=s||N.relative[" "],d=s?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
l=f(function(e){return e===t},r,!0),p=f(function(e){return-1<ne(t,e)},r,!0),c=[function(e,n,a){var o=!s&&(a||n!==A)||((t=n).nodeType?l(e,n,a):p(e,n,a));// Avoid hanging onto element (issue #299)
return t=null,o}];d<o;d++)if(n=N.relative[e[d].type])c=[f(g(c),n)];else{// Return special upon seeing a positional matcher
if(n=N.filter[e[d].type].apply(null,e[d].matches),n[_]){for(a=++d;a<o&&!N.relative[e[a].type];a++);return b(1<d&&g(c),1<d&&m(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
e.slice(0,d-1).concat({value:" "===e[d-2].type?"*":""})).replace(oe,"$1"),n,d<a&&v(e.slice(d,a)),a<o&&v(e=e.slice(a)),a<o&&m(e))}c.push(n)}return g(c)}function T(e,n){var o=0<n.length,s=0<e.length,r=function(a,r,d,l,p){var c,u,h,m=0,f="0",g=a&&[],y=[],b=A,// We must always have either seed elements or outermost context
v=a||s&&N.find.TAG("*",p),// Use integer dirruns iff this is the outermost matcher
T=U+=null==b?1:Math.random()||.1,w=v.length;// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(p&&(A=r===P||r||p);f!==w&&null!=(c=v[f]);f++){if(s&&c){for(u=0,r||c.ownerDocument===P||(H(c),d=!M);h=e[u++];)if(h(c,r||P,d)){l.push(c);break}p&&(U=T)}// Track unmatched elements for set filters
o&&((c=!h&&c)&&m--,a&&g.push(c))}// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(m+=f,o&&f!==m){for(u=0;h=n[u++];)h(g,y,r,d);if(a){// Reintegrate element matches to eliminate the need for sorting
if(0<m)for(;f--;)g[f]||y[f]||(y[f]=J.call(l));// Discard index placeholder values to get only actual matches
y=x(y)}// Add matches to results
ee.apply(l,y),p&&!a&&0<y.length&&1<m+n.length&&t.uniqueSort(l)}// Override manipulation of globals by nested matchers
return p&&(U=T,A=b),g};return o?a(r):r}var w,C,N,k,S,j,D,E,A,L,q,// Local document vars
H,P,O,M,I,R,W,B,// Instance-specific data
_="sizzle"+1*new Date,F=e.document,U=0,X=0,z=n(),$=n(),V=n(),Y=n(),G=function(e,t){return e===t&&(q=!0),0},// Instance methods
Q={}.hasOwnProperty,K=[],J=K.pop,Z=K.push,ee=K.push,te=K.slice,// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
ne=function(e,t){for(var n=0,a=e.length;n<a;n++)if(e[n]===t)return n;return-1}// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
,// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
ae=/[\x20\t\r\n\f]+/g,oe=/^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,ie=/^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,se=/^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,re=/[\x20\t\r\n\f]|>/,de=/:((?:\\.|[\w-]|[^\0-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,le=/^(?:\\.|[\w-]|[^\0-\xa0])+$/,pe={ID:/^#((?:\\.|[\w-]|[^\0-\xa0])+)/,CLASS:/^\.((?:\\.|[\w-]|[^\0-\xa0])+)/,TAG:/^((?:\\.|[\w-]|[^\0-\xa0])+|[*])/,ATTR:/^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\]/,PSEUDO:/^:((?:\\.|[\w-]|[^\0-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,CHILD:/^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,bool:/^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:/^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i},ce=/HTML$/i,ue=/^(?:input|select|textarea|button)$/i,he=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
fe=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ge=/[+~]/,// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
ye=/\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,xe=function(e,t,n){var a=String.fromCharCode,o="0x"+t-65536;// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
return o!=o||n?t:0>o?// BMP codepoint
a(o+65536):// Supplemental Plane codepoint (surrogate pair)
a(55296|o>>10,56320|1023&o)},// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
be=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ve=function(e,t){return t?"\0"===e?"\uFFFD":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e;// Other potentially-special ASCII characters get backslash-escaped
},// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
Te=function(){H()},we=f(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{ee.apply(K=te.call(F.childNodes),F.childNodes),K[F.childNodes.length].nodeType}catch(t){ee={apply:K.length?// Leverage slice if possible
function(e,t){Z.apply(e,te.call(t))}:// Support: IE<9
// Otherwise append directly
function(e,t){// Can't trust NodeList.length
for(var n=e.length,a=0;e[n++]=t[a++];);e.length=n-1}}}// Add button/input type pseudos
for(w in C=t.support={},S=t.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;// Support: IE <=8
// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
// https://bugs.jquery.com/ticket/4833
return!ce.test(t||n&&n.nodeName||"HTML")},H=t.setDocument=function(e){var t,n,a=e?e.ownerDocument||e:F;// Return early if doc is invalid or already selected
return a!==P&&9===a.nodeType&&a.documentElement?(P=a,O=P.documentElement,M=!S(P),F!==P&&(n=P.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Te,!1):n.attachEvent&&n.attachEvent("onunload",Te)),C.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),C.getElementsByTagName=o(function(e){return e.appendChild(P.createComment("")),!e.getElementsByTagName("*").length}),C.getElementsByClassName=me.test(P.getElementsByClassName),C.getById=o(function(e){return O.appendChild(e).id=_,!P.getElementsByName||!P.getElementsByName(_).length}),C.getById?(N.filter.ID=function(e){var t=e.replace(ye,xe);return function(e){return e.getAttribute("id")===t}},N.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&M){var n=t.getElementById(e);return n?[n]:[]}}):(N.filter.ID=function(e){var t=e.replace(ye,xe);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},N.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&M){var n,a,o,s=t.getElementById(e);if(s){if(n=s.getAttributeNode("id"),n&&n.value===e)return[s];// Fall back on getElementsByName
for(o=t.getElementsByName(e),a=0;s=o[a++];)if(n=s.getAttributeNode("id"),n&&n.value===e)return[s]}return[]}}),N.find.TAG=C.getElementsByTagName?function(e,t){return"undefined"==typeof t.getElementsByTagName?C.qsa?t.querySelectorAll(e):void 0:t.getElementsByTagName(e)}:function(e,t){var n,a=[],o=0,// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
s=t.getElementsByTagName(e);// Filter out possible comments
if("*"===e){for(;n=s[o++];)1===n.nodeType&&a.push(n);return a}return s},N.find.CLASS=C.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&M)return t.getElementsByClassName(e)},R=[],I=[],(C.qsa=me.test(P.querySelectorAll))&&(o(function(e){O.appendChild(e).innerHTML="<a id='"+_+"'></a><select id='"+_+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&I.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),e.querySelectorAll("[selected]").length||I.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"),e.querySelectorAll("[id~="+_+"-]").length||I.push("~="),e.querySelectorAll(":checked").length||I.push(":checked"),e.querySelectorAll("a#"+_+"+*").length||I.push(".#.+[+~]")}),o(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var t=P.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&I.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&I.push(":enabled",":disabled"),O.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&I.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),I.push(",.*:")})),(C.matchesSelector=me.test(W=O.matches||O.webkitMatchesSelector||O.mozMatchesSelector||O.oMatchesSelector||O.msMatchesSelector))&&o(function(e){C.disconnectedMatch=W.call(e,"*"),W.call(e,"[s!='']:x"),R.push("!=",":((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")}),I=I.length&&new RegExp(I.join("|")),R=R.length&&new RegExp(R.join("|")),t=me.test(O.compareDocumentPosition),B=t||me.test(O.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,a=t&&t.parentNode;return e===a||!!(a&&1===a.nodeType&&(n.contains?n.contains(a):e.compareDocumentPosition&&16&e.compareDocumentPosition(a)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},G=t?function(e,t){// Flag for duplicate removal
if(e===t)return q=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):// Otherwise we know they are disconnected
1,1&n||!C.sortDetached&&t.compareDocumentPosition(e)===n?e===P||e.ownerDocument===F&&B(F,e)?-1:t===P||t.ownerDocument===F&&B(F,t)?1:L?ne(L,e)-ne(L,t):0:4&n?-1:1);// Calculate position if both inputs belong to the same document
// Disconnected nodes
}:function(e,t){// Exit early if the nodes are identical
if(e===t)return q=!0,0;var n,a=0,o=e.parentNode,s=t.parentNode,d=[e],l=[t];// Parentless nodes are either documents or disconnected
if(!o||!s)return e===P?-1:t===P?1:o?-1:s?1:L?ne(L,e)-ne(L,t):0;// If the nodes are siblings, we can do a quick check
// Otherwise we need full lists of their ancestors for comparison
if(o===s)return r(e,t);for(n=e;n=n.parentNode;)d.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);// Walk down the tree looking for a discrepancy
for(;d[a]===l[a];)a++;return a?// Do a sibling check if the nodes have a common ancestor
r(d[a],l[a]):// Otherwise nodes in our document sort first
d[a]===F?-1:l[a]===F?1:0},P):P;// Update global variables
},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==P&&H(e),C.matchesSelector&&M&&!Y[n+" "]&&(!R||!R.test(n))&&(!I||!I.test(n)))try{var a=W.call(e,n);// IE 9's matchesSelector returns false on disconnected nodes
if(a||C.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return a}catch(t){Y(n,!0)}return 0<t(n,P,null,[e]).length},t.contains=function(e,t){return(e.ownerDocument||e)!==P&&H(e),B(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==P&&H(e);var n=N.attrHandle[t.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
a=n&&Q.call(N.attrHandle,t.toLowerCase())?n(e,t,!M):void 0;return void 0===a?C.attributes||!M?e.getAttribute(t):(a=e.getAttributeNode(t))&&a.specified?a.value:null:a},t.escape=function(e){return(e+"").replace(be,ve)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],a=0,o=0;// Unless we *know* we can detect duplicates, assume their presence
if(q=!C.detectDuplicates,L=!C.sortStable&&e.slice(0),e.sort(G),q){for(;t=e[o++];)t===e[o]&&(a=n.push(o));for(;a--;)e.splice(n[a],1)}// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return L=null,e},k=t.getText=function(e){var t,n="",a=0,o=e.nodeType;if(!o)// If no nodeType, this is expected to be an array
for(;t=e[a++];)// Do not traverse comment nodes
n+=k(t);else if(1===o||9===o||11===o){// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof e.textContent)return e.textContent;// Traverse its children
for(e=e.firstChild;e;e=e.nextSibling)n+=k(e)}else if(3===o||4===o)return e.nodeValue;// Do not include comment or processing instruction nodes
return n},N=t.selectors={// Can be adjusted by the user
cacheLength:50,createPseudo:a,match:pe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ye,xe),e[3]=(e[3]||e[4]||e[5]||"").replace(ye,xe),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(!e[3]&&t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return pe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&de.test(n)&&(// Get excess from tokenize (recursively)
t=j(n,!0))&&(// advance to the next closing parenthesis
t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3));// Accept quoted arguments as-is
// Return only captures needed by the pseudo filter method (type and argument)
}},filter:{TAG:function(e){var t=e.replace(ye,xe).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+e+"([\\x20\\t\\r\\n\\f]|$)"))&&z(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,a){return function(o){var i=t.attr(o,e);return null==i?"!="===n:!n||(i+="","="===n?i===a:"!="===n?i!==a:"^="===n?a&&0===i.indexOf(a):"*="===n?a&&-1<i.indexOf(a):"$="===n?a&&i.slice(-a.length)===a:"~="===n?-1<(" "+i.replace(ae," ")+" ").indexOf(a):"|="==n&&(i===a||i.slice(0,a.length+1)===a+"-"))}},CHILD:function(e,t,n,a,o){var i="nth"!==e.slice(0,3),s="last"!==e.slice(-4),r="of-type"===t;return 1===a&&0===o?// Shortcut for :nth-*(n)
function(e){return!!e.parentNode}:function(t,n,d){var l,p,c,u,h,m,f=i==s?"previousSibling":"nextSibling",g=t.parentNode,y=r&&t.nodeName.toLowerCase(),x=!d&&!r,b=!1;if(g){// :(first|last|only)-(child|of-type)
if(i){for(;f;){for(u=t;u=u[f];)if(r?u.nodeName.toLowerCase()===y:1===u.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
m=f="only"===e&&!m&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(m=[s?g.firstChild:g.lastChild],s&&x){for(u=g,c=u[_]||(u[_]={}),p=c[u.uniqueID]||(c[u.uniqueID]={}),l=p[e]||[],h=l[0]===U&&l[1],b=h&&l[2],u=h&&g.childNodes[h];u=++h&&u&&u[f]||(// Fallback to seeking `elem` from the start
b=h=0)||m.pop();)// When found, cache indexes on `parent` and break
if(1===u.nodeType&&++b&&u===t){p[e]=[U,h,b];break}}else// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(x&&(u=t,c=u[_]||(u[_]={}),p=c[u.uniqueID]||(c[u.uniqueID]={}),l=p[e]||[],h=l[0]===U&&l[1],b=h),!1===b)// Use the same loop as above to seek `elem` from the start
for(;(u=++h&&u&&u[f]||(b=h=0)||m.pop())&&!((r?u.nodeName.toLowerCase()===y:1===u.nodeType)&&++b&&(x&&(c=u[_]||(u[_]={}),p=c[u.uniqueID]||(c[u.uniqueID]={}),p[e]=[U,b]),u===t)););// Incorporate the offset, then check against cycle size
return b-=o,b===a||0==b%a&&0<=b/a}}},PSEUDO:function(e,n){// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var o,s=N.pseudos[e]||N.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
return s[_]?s(n):1<s.length?(o=[e,e,"",n],N.setFilters.hasOwnProperty(e.toLowerCase())?a(function(e,t){for(var a,o=s(e,n),r=o.length;r--;)a=ne(e,o[r]),e[a]=!(t[a]=o[r])}):function(e){return s(e,0,o)}):s;// But maintain support for old signatures
}},pseudos:{// Potentially complex pseudos
not:a(function(e){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],o=D(e.replace(oe,"$1"));return o[_]?a(function(e,t,n,a){// Match elements unmatched by `matcher`
for(var s,r=o(e,null,a,[]),d=e.length;d--;)(s=r[d])&&(e[d]=!(t[d]=s))}):function(e,a,i){return t[0]=e,o(t,null,i,n),t[0]=null,!n.pop()}}),has:a(function(e){return function(n){return 0<t(e,n).length}}),contains:a(function(e){return e=e.replace(ye,xe),function(t){return-1<(t.textContent||k(t)).indexOf(e)}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:a(function(e){return le.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(ye,xe).toLowerCase(),function(t){var n;do if(n=M?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===O},focus:function(e){return e===P.activeElement&&(!P.hasFocus||P.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},// Boolean properties
enabled:p(!1),disabled:p(!0),checked:function(e){// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},// Contents
empty:function(e){// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(6>e.nodeType)return!1;return!0},parent:function(e){return!N.pseudos.empty(e)},// Element/input types
header:function(e){return he.test(e.nodeName)},input:function(e){return ue.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},// Position-in-collection
first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var a=0>n?n+t:n>t?t:n;0<=--a;)e.push(a);return e}),gt:c(function(e,t,n){for(var a=0>n?n+t:n;++a<t;)e.push(a);return e})}},N.pseudos.nth=N.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})N.pseudos[w]=d(w);for(w in{submit:!0,reset:!0})N.pseudos[w]=l(w);return h.prototype=N.filters=N.pseudos,N.setFilters=new h,j=t.tokenize=function(e,n){var a,o,i,s,r,d,l,p=$[e+" "];if(p)return n?0:p.slice(0);for(r=e,d=[],l=N.preFilter;r;){// Filters
for(s in(!a||(o=ie.exec(r)))&&(o&&(r=r.slice(o[0].length)||r),d.push(i=[])),a=!1,(o=se.exec(r))&&(a=o.shift(),i.push({value:a,// Cast descendant combinators to space
type:o[0].replace(oe," ")}),r=r.slice(a.length)),N.filter)(o=pe[s].exec(r))&&(!l[s]||(o=l[s](o)))&&(a=o.shift(),i.push({value:a,type:s,matches:o}),r=r.slice(a.length));if(!a)break}// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return n?r.length:r?t.error(e):// Cache the tokens
$(e,d).slice(0)},D=t.compile=function(e,t/* Internal Use Only */){var n,a=[],o=[],s=V[e+" "];if(!s){for(t||(t=j(e)),n=t.length;n--;)s=v(t[n]),s[_]?a.push(s):o.push(s);// Cache the compiled function
s=V(e,T(o,a)),s.selector=e}return s},E=t.select=function(e,t,n,a){var o,s,r,d,l,p="function"==typeof e&&e,c=!a&&j(e=p.selector||e);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===c.length){if(s=c[0]=c[0].slice(0),2<s.length&&"ID"===(r=s[0]).type&&9===t.nodeType&&M&&N.relative[s[1].type]){if(t=(N.find.ID(r.matches[0].replace(ye,xe),t)||[])[0],!t)return n;// Precompiled matchers will still verify ancestry, so step up a level
p&&(t=t.parentNode),e=e.slice(s.shift().value.length)}// Fetch a seed set for right-to-left matching
for(o=pe.needsContext.test(e)?0:s.length;o--&&(r=s[o],!N.relative[d=r.type]);)if((l=N.find[d])&&(a=l(r.matches[0].replace(ye,xe),ge.test(s[0].type)&&u(t.parentNode)||t)))// Search, expanding context for leading sibling combinators
{if(s.splice(o,1),e=a.length&&m(s),!e)return ee.apply(n,a),n;break}}// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(p||D(e,c))(a,t,!M,n,!t||ge.test(e)&&u(t.parentNode)||t),n},C.sortStable=_.split("").sort(G).join("")===_,C.detectDuplicates=!!q,H(),C.sortDetached=o(function(e){// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(P.createElement("fieldset"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||s("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),C.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||s("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||s("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",function(e,t,n){var a;if(!n)return!0===e[t]?t.toLowerCase():(a=e.getAttributeNode(t))&&a.specified?a.value:null}),t}(e);ke.find=je,ke.expr=je.selectors,ke.expr[":"]=ke.expr.pseudos,ke.uniqueSort=ke.unique=je.uniqueSort,ke.text=je.getText,ke.isXMLDoc=je.isXML,ke.contains=je.contains,ke.escapeSelector=je.escape;var De=function(e,t,n){for(var a=[];(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(void 0!==n&&ke(e).is(n))break;a.push(e)}return a},Ee=function(e,t){for(var a=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&a.push(e);return a},Ae=ke.expr.match.needsContext,Le=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;ke.filter=function(e,t,n){var a=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===a.nodeType?ke.find.matchesSelector(a,e)?[a]:[]:ke.find.matches(e,ke.grep(t,function(e){return 1===e.nodeType}))},ke.fn.extend({find:function(e){var t,n,a=this.length,o=this;if("string"!=typeof e)return this.pushStack(ke(e).filter(function(){for(t=0;t<a;t++)if(ke.contains(o[t],this))return!0}));for(n=this.pushStack([]),t=0;t<a;t++)ke.find(e,o[t],n);return 1<a?ke.uniqueSort(n):n},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&Ae.test(e)?ke(e):e||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var qe,// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
He=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Pe=ke.fn.init=function(e,t,n){var a,o;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
// Handle HTML strings
if(n=n||qe,"string"==typeof e){// Match html or make sure no context is specified for #id
if(a="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:He.exec(e),a&&(a[1]||!t)){// HANDLE: $(html) -> $(array)
if(a[1]){// HANDLE: $(html, props)
if(t=t instanceof ke?t[0]:t,ke.merge(this,ke.parseHTML(a[1],t&&t.nodeType?t.ownerDocument||t:pe,!0)),Le.test(a[1])&&ke.isPlainObject(t))for(a in t)// Properties of context are called as methods if possible
we(this[a])?this[a](t[a]):this.attr(a,t[a]);return this;// HANDLE: $(#id)
}// HANDLE: $(expr, $(...))
return o=pe.getElementById(a[2]),o&&(this[0]=o,this.length=1),this}// HANDLE: $(DOMElement)
return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e)}return e.nodeType?(this[0]=e,this.length=1,this):we(e)?void 0===n.ready?// Execute immediately if ready is not present
e(ke):n.ready(e):ke.makeArray(e,this)};// Give the init function the jQuery prototype for later instantiation
Pe.prototype=ke.fn,qe=ke(pe);var Oe=/^(?:parents|prev(?:Until|All))/,// Methods guaranteed to produce a unique set when starting from a unique set
Me={children:!0,contents:!0,next:!0,prev:!0};ke.fn.extend({has:function(e){var t=ke(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ke.contains(this,t[e]))return!0})},closest:function(e,t){var n,a=0,o=this.length,s=[],r="string"!=typeof e&&ke(e);// Positional selectors never match, since there's no _selection_ context
if(!Ae.test(e))for(;a<o;a++)for(n=this[a];n&&n!==t;n=n.parentNode)// Always skip document fragments
if(11>n.nodeType&&(r?-1<r.index(n):// Don't pass non-elements to Sizzle
1===n.nodeType&&ke.find.matchesSelector(n,e))){s.push(n);break}return this.pushStack(1<s.length?ke.uniqueSort(s):s)},// Determine the position of an element within the set
index:function(e){// No argument, return index in parent
// Locate the position of the desired element
return e?"string"==typeof e?fe.call(ke(e),this[0]):fe.call(this,// If it receives a jQuery object, the first element is used
e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1;// Index in selector
},add:function(e,t){return this.pushStack(ke.uniqueSort(ke.merge(this.get(),ke(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ke.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return De(e,"parentNode")},parentsUntil:function(e,t,n){return De(e,"parentNode",n)},next:function(e){return d(e,"nextSibling")},prev:function(e){return d(e,"previousSibling")},nextAll:function(e){return De(e,"nextSibling")},prevAll:function(e){return De(e,"previousSibling")},nextUntil:function(e,t,n){return De(e,"nextSibling",n)},prevUntil:function(e,t,n){return De(e,"previousSibling",n)},siblings:function(e){return Ee((e.parentNode||{}).firstChild,e)},children:function(e){return Ee(e.firstChild)},contents:function(e){return"undefined"==typeof e.contentDocument?(s(e,"template")&&(e=e.content||e),ke.merge([],e.childNodes)):e.contentDocument;// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
}},function(e,t){ke.fn[e]=function(n,a){var o=ke.map(this,t,n);return"Until"!==e.slice(-5)&&(a=n),a&&"string"==typeof a&&(o=ke.filter(a,o)),1<this.length&&(!Me[e]&&ke.uniqueSort(o),Oe.test(e)&&o.reverse()),this.pushStack(o)}});var Ie=/[^\x20\t\r\n\f]+/g;ke.Callbacks=function(e){e="string"==typeof e?l(e):ke.extend({},e);var// Flag to know if list is currently firing
t,// Last fire value for non-forgettable lists
n,// Flag to know if list was already fired
o,// Flag to prevent firing
i,// Actual callback list
s=[],// Queue of execution data for repeatable lists
r=[],// Index of currently firing callback (modified by add/remove as needed)
d=-1,// Fire callbacks
p=function(){for(i=i||e.once,o=t=!0;r.length;d=-1)for(n=r.shift();++d<s.length;)// Run callback and check for early termination
!1===s[d].apply(n[0],n[1])&&e.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
d=s.length,n=!1);// Forget the data if we're done with it
e.memory||(n=!1),t=!1,i&&(n?s=[]:s="")},// Actual Callbacks object
c={// Add a callback or a collection of callbacks to the list
add:function(){return s&&(n&&!t&&(d=s.length-1,r.push(n)),function t(n){ke.each(n,function(n,o){we(o)?(!e.unique||!c.has(o))&&s.push(o):o&&o.length&&"string"!==a(o)&&t(o)})}(arguments),n&&!t&&p()),this},// Remove a callback from the list
remove:function(){return ke.each(arguments,function(e,t){for(var n;-1<(n=ke.inArray(t,s,n));)s.splice(n,1),n<=d&&d--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?-1<ke.inArray(e,s):0<s.length},// Remove all callbacks from the list
empty:function(){return s&&(s=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return i=r=[],s=n="",this},disabled:function(){return!s},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return i=r=[],n||t||(s=n=""),this},locked:function(){return!!i},// Call all callbacks with the given context and arguments
fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],r.push(n),!t&&p()),this},// Call all the callbacks with the given arguments
fire:function(){return c.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!o}};return c},ke.extend({Deferred:function(t){var n=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",ke.Callbacks("memory"),ke.Callbacks("memory"),2],["resolve","done",ke.Callbacks("once memory"),ke.Callbacks("once memory"),0,"resolved"],["reject","fail",ke.Callbacks("once memory"),ke.Callbacks("once memory"),1,"rejected"]],a="pending",o={state:function(){return a},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return o.then(null,e)},// Keep pipe for back-compat
pipe:function()/* fnDone, fnFail, fnProgress */{var e=arguments;return ke.Deferred(function(t){ke.each(n,function(n,a){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var o=we(e[a[4]])&&e[a[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
s[a[1]](function(){var e=o&&o.apply(this,arguments);e&&we(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[a[0]+"With"](this,o?[e]:arguments)})}),e=null}).promise()},then:function(t,a,o){function i(t,n,a,o){return function(){var r=this,d=arguments,l=function(){var e,l;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(t<s)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if(e=a.apply(r,d),e===n.promise())throw new TypeError("Thenable self-resolution");// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
l=e&&(// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"==typeof e||"function"==typeof e)&&e.then,we(l)?o?l.call(e,i(s,n,p,o),i(s,n,c,o)):(s++,l.call(e,i(s,n,p,o),i(s,n,c,o),i(s,n,p,n.notifyWith))):(a!==p&&(r=void 0,d=[e]),(o||n.resolveWith)(r,d))}},// Only normal processors (resolve) catch and reject exceptions
u=o?l:function(){try{l()}catch(o){ke.Deferred.exceptionHook&&ke.Deferred.exceptionHook(o,u.stackTrace),t+1>=s&&(a!==c&&(r=void 0,d=[o]),n.rejectWith(r,d))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
t?u():(ke.Deferred.getStackHook&&(u.stackTrace=ke.Deferred.getStackHook()),e.setTimeout(u))}}var s=0;return ke.Deferred(function(e){n[0][3].add(i(0,e,we(o)?o:p,e.notifyWith)),n[1][3].add(i(0,e,we(t)?t:p)),n[2][3].add(i(0,e,we(a)?a:c))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null==e?o:ke.extend(e,o)}},s={};// Add list-specific methods
// All done!
return ke.each(n,function(e,t){var i=t[2],r=t[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
o[t[1]]=i.add,r&&i.add(function(){a=r},// rejected_callbacks.disable
// fulfilled_callbacks.disable
n[3-e][2].disable,// rejected_handlers.disable
// fulfilled_handlers.disable
n[3-e][3].disable,// progress_callbacks.lock
n[0][2].lock,// progress_handlers.lock
n[0][3].lock),i.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=i.fireWith}),o.promise(s),t&&t.call(s,s),s},// Deferred helper
when:function(e){var// count of uncompleted subordinates
t=arguments.length,// count of unprocessed arguments
n=t,// subordinate fulfillment data
a=Array(n),o=ue.call(arguments),// the master Deferred
s=ke.Deferred(),// subordinate callback factory
r=function(e){return function(n){a[e]=this,o[e]=1<arguments.length?ue.call(arguments):n,--t||s.resolveWith(a,o)}};// Single- and empty arguments are adopted like Promise.resolve
if(1>=t&&(u(e,s.done(r(n)).resolve,s.reject,!t),"pending"===s.state()||we(o[n]&&o[n].then)))// Use .then() to unwrap secondary thenables (cf. gh-3000)
return s.then();// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)u(o[n],r(n),s.reject);return s.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var Re=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ke.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&Re.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},ke.readyException=function(t){e.setTimeout(function(){throw t})};// The deferred used on DOM ready
var We=ke.Deferred();ke.fn.ready=function(e){return We.then(e)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(e){ke.readyException(e)}),this},ke.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,// Handle when the DOM is ready
ready:function(e){// Abort if there are pending holds or we're already ready
// If there are functions bound, to execute
(!0===e?! --ke.readyWait:!ke.isReady)&&(// If a normal DOM Ready event fired, decrement, and wait if need be
ke.isReady=!0,!0!==e&&0<--ke.readyWait||We.resolveWith(pe,[ke]))}}),ke.ready.then=We.then,"complete"!==pe.readyState&&("loading"===pe.readyState||pe.documentElement.doScroll)?(pe.addEventListener("DOMContentLoaded",h),e.addEventListener("load",h)):e.setTimeout(ke.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var Be=function(e,t,n,o,s,r,d){var l=0,p=e.length,c=null==n;// Sets many values
if("object"===a(n))for(l in s=!0,n)Be(e,t,l,n[l],!0,r,d);// Sets one value
else if(void 0!==o&&(s=!0,we(o)||(d=!0),c&&(d?(t.call(e,o),t=null):(c=t,t=function(e,t,n){return c.call(ke(e),n)})),t))for(;l<p;l++)t(e[l],n,d?o:o.call(e[l],l,t(e[l],n)));return s?e:c?t.call(e):p?t(e[0],n):r;// Gets
},_e=/^-ms-/,Fe=/-([a-z])/g,Ue=function(e){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};// Matches dashed string for camelizing
g.uid=1,g.prototype={cache:function(e){// Check if the owner object already has a cache
var t=e[this.expando];// If not, create one
return t||(t={},Ue(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var a,o=this.cache(e);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)o[f(t)]=n;else// Copy the properties one-by-one to the cache object
for(a in t)o[f(a)]=t[a];return o},get:function(e,t){return void 0===t?this.cache(e):// Always use camelCase key (gh-2257)
e[this.expando]&&e[this.expando][f(t)]},access:function(e,t,n){// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0===n?t:n);// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
// Since the "set" path can have two possible entry points
// return the expected data based on which path was taken[*]
},remove:function(e,t){var n,a=e[this.expando];if(void 0!==a){if(void 0!==t)for(Array.isArray(t)?t=t.map(f):(t=f(t),t=(t in a)?[t]:t.match(Ie)||[]),n=t.length;n--;)delete a[t[n]];// Remove the expando if there's no more data
(void 0===t||ke.isEmptyObject(a))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ke.isEmptyObject(t)}};var Xe=new g,ze=new g,$e=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ve=/[A-Z]/g;//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
ke.extend({hasData:function(e){return ze.hasData(e)||Xe.hasData(e)},data:function(e,t,n){return ze.access(e,t,n)},removeData:function(e,t){ze.remove(e,t)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return Xe.access(e,t,n)},_removeData:function(e,t){Xe.remove(e,t)}}),ke.fn.extend({data:function(e,t){var n,a,o,s=this[0],r=s&&s.attributes;// Gets all values
if(void 0===e){if(this.length&&(o=ze.get(s),1===s.nodeType&&!Xe.get(s,"hasDataAttrs"))){for(n=r.length;n--;)// Support: IE 11 only
// The attrs elements can be null (#14894)
r[n]&&(a=r[n].name,0===a.indexOf("data-")&&(a=f(a.slice(5)),x(s,a,o[a])));Xe.set(s,"hasDataAttrs",!0)}return o}// Sets multiple values
return"object"==typeof e?this.each(function(){ze.set(this,e)}):Be(this,function(t){var n;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
return s&&void 0===t?(n=ze.get(s,e),void 0!==n)?n:(n=x(s,e),void 0===n?void 0:n):void// Set the data...
this.each(function(){ze.set(this,e,t)})},null,t,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){ze.remove(this,e)})}}),ke.extend({queue:function(e,t,n){var a;if(e)return t=(t||"fx")+"queue",a=Xe.get(e,t),n&&(!a||Array.isArray(n)?a=Xe.access(e,t,ke.makeArray(n)):a.push(n)),a||[]},dequeue:function(e,t){t=t||"fx";var n=ke.queue(e,t),a=n.length,o=n.shift(),i=ke._queueHooks(e,t),s=function(){ke.dequeue(e,t)};// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===o&&(o=n.shift(),a--),o&&("fx"===t&&n.unshift("inprogress"),delete i.stop,o.call(e,s,i)),!a&&i&&i.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return Xe.get(e,n)||Xe.access(e,n,{empty:ke.Callbacks("once memory").add(function(){Xe.remove(e,[t+"queue",n])})})}}),ke.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?ke.queue(this[0],e):void 0===t?this:this.each(function(){var n=ke.queue(this,e,t);// Ensure a hooks for this queue
ke._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&ke.dequeue(this,e)})},dequeue:function(e){return this.each(function(){ke.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,a=1,o=ke.Deferred(),s=this,r=this.length,d=function(){--a||o.resolveWith(s,[s])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";r--;)n=Xe.get(s[r],e+"queueHooks"),n&&n.empty&&(a++,n.empty.add(d));return d(),o.promise(t)}});var Ye=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ge=new RegExp("^(?:([+-])=|)("+Ye+")([a-z%]*)$","i"),Qe=["Top","Right","Bottom","Left"],Ke=pe.documentElement,Je=function(e){return ke.contains(e.ownerDocument,e)},Ze={composed:!0};Ke.getRootNode&&(Je=function(e){return ke.contains(e.ownerDocument,e)||e.getRootNode(Ze)===e.ownerDocument});var et=function(e,t){// Inline style trumps all
return e=t||e,"none"===e.style.display||""===e.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
Je(e)&&"none"===ke.css(e,"display")},tt=function(e,t,n,a){var o,i,s={};// Remember the old values, and insert the new ones
for(i in t)s[i]=e.style[i],e.style[i]=t[i];// Revert the old values
for(i in o=n.apply(e,a||[]),t)e.style[i]=s[i];return o},nt={};ke.fn.extend({show:function(){return T(this,!0)},hide:function(){return T(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){et(this)?ke(this).show():ke(this).hide()})}});var at=/^(?:checkbox|radio)$/i,ot=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,it=/^$|^module$|\/(?:java|ecma)script/i,st={// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};// We have to close these tags to support XHTML (#13200)
st.optgroup=st.option,st.tbody=st.tfoot=st.colgroup=st.caption=st.thead,st.th=st.td;var rt=/<|&#?\w+;/;(function(){var e=pe.createDocumentFragment(),t=e.appendChild(pe.createElement("div")),n=pe.createElement("input");// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),Te.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",Te.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue})();var dt=/^key/,lt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,pt=/^([^.]*)(?:\.(.+)|)/;ke.event={global:{},add:function(n,a,o,i,s){var r,d,l,p,c,e,u,h,m,f,g,y=Xe.get(n);// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(y)for(o.handler&&(r=o,o=r.handler,s=r.selector),s&&ke.find.matchesSelector(Ke,s),o.guid||(o.guid=ke.guid++),(p=y.events)||(p=y.events={}),(d=y.handle)||(d=y.handle=function(t){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return"undefined"!=typeof ke&&ke.event.triggered!==t.type?ke.event.dispatch.apply(n,arguments):void 0}),a=(a||"").match(Ie)||[""],c=a.length;c--;)// There *must* be a type, no attaching namespace-only handlers
(l=pt.exec(a[c])||[],m=g=l[1],f=(l[2]||"").split(".").sort(),!!m)&&(u=ke.event.special[m]||{},m=(s?u.delegateType:u.bindType)||m,u=ke.event.special[m]||{},e=ke.extend({type:m,origType:g,data:i,handler:o,guid:o.guid,selector:s,needsContext:s&&ke.expr.match.needsContext.test(s),namespace:f.join(".")},r),(h=p[m])||(h=p[m]=[],h.delegateCount=0,(!u.setup||!1===u.setup.call(n,i,f,d))&&n.addEventListener&&n.addEventListener(m,d)),u.add&&(u.add.call(n,e),!e.handler.guid&&(e.handler.guid=o.guid)),s?h.splice(h.delegateCount++,0,e):h.push(e),ke.event.global[m]=!0);// If event changes its type, use the special event handlers for the changed type
// Caller can pass in an object of custom data in lieu of the handler
},// Detach an event or set of events from an element
remove:function(e,n,a,o,i){var s,r,d,l,p,c,u,h,m,f,g,y=Xe.hasData(e)&&Xe.get(e);if(y&&(l=y.events)){for(n=(n||"").match(Ie)||[""],p=n.length;p--;){// Unbind all events (on this namespace, if provided) for the element
if(d=pt.exec(n[p])||[],m=g=d[1],f=(d[2]||"").split(".").sort(),!m){for(m in l)ke.event.remove(e,m+n[p],a,o,!0);continue}for(u=ke.event.special[m]||{},m=(o?u.delegateType:u.bindType)||m,h=l[m]||[],d=d[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),r=s=h.length;s--;)c=h[s],(i||g===c.origType)&&(!a||a.guid===c.guid)&&(!d||d.test(c.namespace))&&(!o||o===c.selector||"**"===o&&c.selector)&&(h.splice(s,1),c.selector&&h.delegateCount--,u.remove&&u.remove.call(e,c));// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
r&&!h.length&&((!u.teardown||!1===u.teardown.call(e,f,y.handle))&&ke.removeEvent(e,m,y.handle),delete l[m])}// Remove data and the expando if it's no longer used
ke.isEmptyObject(l)&&Xe.remove(e,"handle events")}// Once for each type.namespace in types; type may be omitted
},dispatch:function(e){// Make a writable jQuery.Event from the native event object
var t,n,a,o,s,r,d=ke.event.fix(e),l=Array(arguments.length),p=(Xe.get(this,"events")||{})[d.type]||[],c=ke.event.special[d.type]||{};// Use the fix-ed jQuery.Event rather than the (read-only) native event
for(l[0]=d,t=1;t<arguments.length;t++)l[t]=arguments[t];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(d.delegateTarget=this,!(c.preDispatch&&!1===c.preDispatch.call(this,d))){for(r=ke.event.handlers.call(this,d,p),t=0;(o=r[t++])&&!d.isPropagationStopped();)for(d.currentTarget=o.elem,n=0;(s=o.handlers[n++])&&!d.isImmediatePropagationStopped();)// If the event is namespaced, then each handler is only invoked if it is
// specially universal or its namespaces are a superset of the event's.
(!d.rnamespace||!1===s.namespace||d.rnamespace.test(s.namespace))&&(d.handleObj=s,d.data=s.data,a=((ke.event.special[s.origType]||{}).handle||s.handler).apply(o.elem,l),void 0!==a&&!1===(d.result=a)&&(d.preventDefault(),d.stopPropagation()));// Call the postDispatch hook for the mapped type
return c.postDispatch&&c.postDispatch.call(this,d),d.result}// Determine handlers
},handlers:function(e,t){var n,a,o,s,r,d=[],l=t.delegateCount,p=e.target;// Find delegate handlers
if(l&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
p.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&1<=e.button))for(;p!==this;p=p.parentNode||this)// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===p.nodeType&&("click"!==e.type||!0!==p.disabled)){for(s=[],r={},n=0;n<l;n++)// Don't conflict with Object.prototype properties (#13203)
a=t[n],o=a.selector+" ",void 0===r[o]&&(r[o]=a.needsContext?-1<ke(o,this).index(p):ke.find(o,this,null,[p]).length),r[o]&&s.push(a);s.length&&d.push({elem:p,handlers:s})}// Add the remaining (directly-bound) handlers
return p=this,l<t.length&&d.push({elem:p,handlers:t.slice(l)}),d},addProp:function(e,t){Object.defineProperty(ke.Event.prototype,e,{enumerable:!0,configurable:!0,get:we(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[ke.expando]?e:new ke.Event(e)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Claim the first handler
// Return false to allow normal processing in the caller
return at.test(t.type)&&t.click&&s(t,"input")&&i(t,"click",k),!1},trigger:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Force setup before triggering a click
// Return non-false to allow normal event-path propagation
return at.test(t.type)&&t.click&&s(t,"input")&&i(t,"click"),!0},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(e){var t=e.target;return at.test(t.type)&&t.click&&s(t,"input")&&Xe.get(t,"click")||s(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ke.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ke.Event=function(e,t){// Allow instantiation without the 'new' keyword
return this instanceof ke.Event?void(// Create a timestamp if incoming event doesn't have one
// Mark it as fixed
e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&// Support: Android <=2.3 only
!1===e.returnValue?k:S,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ke.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ke.expando]=!0):new ke.Event(e,t);// Event object
},ke.Event.prototype={constructor:ke.Event,isDefaultPrevented:S,isPropagationStopped:S,isImmediatePropagationStopped:S,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=k,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=k,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=k,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},ke.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;// Add which for key events
return null==e.which&&dt.test(e.type)?null==e.charCode?e.keyCode:e.charCode:!e.which&&void 0!==t&&lt.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which;// Add which for click: 1 === left; 2 === middle; 3 === right
}},ke.event.addProp),ke.each({focus:"focusin",blur:"focusout"},function(e,t){ke.event.special[e]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){// Return false to allow normal processing in the caller
return i(this,e,j),!1},trigger:function(){// Return non-false to allow normal event-path propagation
return i(this,e),!0},delegateType:t}}),ke.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){ke.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,a=this,o=e.relatedTarget,i=e.handleObj;// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return o&&(o===a||ke.contains(a,o))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),ke.fn.extend({on:function(e,t,n,a){return E(this,e,t,n,a)},one:function(e,t,n,a){return E(this,e,t,n,a,1)},off:function(e,t,n){var a,o;if(e&&e.preventDefault&&e.handleObj)return a=e.handleObj,ke(e.delegateTarget).off(a.namespace?a.origType+"."+a.namespace:a.origType,a.selector,a.handler),this;if("object"==typeof e){// ( types-object [, selector] )
for(o in e)this.off(o,t,e[o]);return this}return(!1===t||"function"==typeof t)&&(n=t,t=void 0),!1===n&&(n=S),this.each(function(){ke.event.remove(this,e,n,t)})}});var/* eslint-disable max-len */// See https://github.com/eslint/eslint/issues/3229
ct=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */// Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
ut=/<script|<style|<link/i,// checked="checked" or checked
ht=/checked\s*(?:[^=]|=\s*.checked.)/i,mt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;ke.extend({htmlPrefilter:function(e){return e.replace(ct,"<$1></$2>")},clone:function(e,t,n){var a,o,s,r,d=e.cloneNode(!0),p=Je(e);// Fix IE cloning issues
if(!Te.noCloneChecked&&(1===e.nodeType||11===e.nodeType)&&!ke.isXMLDoc(e))for(r=w(d),s=w(e),(a=0,o=s.length);a<o;a++)P(s[a],r[a]);// Copy the events from the original to the clone
if(t)if(n)for(s=s||w(e),r=r||w(d),(a=0,o=s.length);a<o;a++)H(s[a],r[a]);else H(e,d);// Preserve script evaluation history
// Return the cloned set
return r=w(d,"script"),0<r.length&&C(r,!p&&w(e,"script")),d},cleanData:function(e){for(var t,n,a,o=ke.event.special,s=0;void 0!==(n=e[s]);s++)if(Ue(n)){if(t=n[Xe.expando]){if(t.events)for(a in t.events)o[a]?ke.event.remove(n,a):ke.removeEvent(n,a,t.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Xe.expando]=void 0}n[ze.expando]&&(n[ze.expando]=void 0)}}}),ke.fn.extend({detach:function(e){return M(this,e,!0)},remove:function(e){return M(this,e)},text:function(e){return Be(this,function(e){return void 0===e?ke.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return O(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=A(this,e);t.appendChild(e)}})},prepend:function(){return O(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=A(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return O(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return O(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(// Prevent memory leaks
// Remove any remaining nodes
ke.cleanData(w(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ke.clone(this,e,t)})},html:function(e){return Be(this,function(e){var t=this[0]||{},n=0,a=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!ut.test(e)&&!st[(ot.exec(e)||["",""])[1].toLowerCase()]){e=ke.htmlPrefilter(e);try{for(;n<a;n++)t=this[n]||{},1===t.nodeType&&(ke.cleanData(w(t,!1)),t.innerHTML=e);t=0}catch(t){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];// Make the changes, replacing each non-ignored context element with the new content
return O(this,arguments,function(t){var n=this.parentNode;0>ke.inArray(this,e)&&(ke.cleanData(w(this)),n&&n.replaceChild(t,this))},e)}}),ke.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){ke.fn[e]=function(e){for(var n,a=[],o=ke(e),s=o.length-1,r=0;r<=s;r++)// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
n=r===s?this:this.clone(!0),ke(o[r])[t](n),me.apply(a,n.get());return this.pushStack(a)}});var ft=new RegExp("^("+Ye+")(?!px)[a-z%]+$","i"),gt=function(t){// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},yt=new RegExp(Qe.join("|"),"i");(function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function t(){// This is a singleton, we need to execute it only once
if(l){d.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Ke.appendChild(d).appendChild(l);var t=e.getComputedStyle(l);a="1%"!==t.top,r=12===n(t.marginLeft),l.style.right="60%",s=36===n(t.right),o=36===n(t.width),l.style.position="absolute",i=12===n(l.offsetWidth/3),Ke.removeChild(d),l=null}}function n(e){var t=Math.round;return t(parseFloat(e))}var a,o,i,s,r,d=pe.createElement("div"),l=pe.createElement("div");// Finish early in limited (non-browser) environments
l.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",Te.clearCloneStyle="content-box"===l.style.backgroundClip,ke.extend(Te,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),a},reliableMarginLeft:function(){return t(),r},scrollboxSize:function(){return t(),i}}))})();var xt=["Webkit","Moz","ms"],bt=pe.createElement("div").style,vt={},// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
Tt=/^(none|table(?!-c[ea]).+)/,wt=/^--/,Ct={position:"absolute",visibility:"hidden",display:"block"},Nt={letterSpacing:"0",fontWeight:"400"};ke.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){// We should always get a number back from opacity
var n=I(e,"opacity");return""===n?"1":n}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(e,t,n,a){// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){// Make sure that we're working with the right name
var o,i,s,r=f(t),d=wt.test(t),l=e.style;// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
// Check if we're setting a value
if(d||(t=B(r)),s=ke.cssHooks[t]||ke.cssHooks[r],void 0!==n){// Make sure that null and NaN values aren't set (#7116)
if(i=typeof n,"string"===i&&(o=Ge.exec(n))&&o[1]&&(n=b(e,t,o),i="number"),null==n||n!==n)return;// If a number was passed in, add the unit (except for certain CSS properties)
// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
// "px" to a few hardcoded values.
"number"!==i||d||(n+=o&&o[3]||(ke.cssNumber[r]?"":"px")),Te.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,a))||(d?l.setProperty(t,n):l[t]=n)}else// If a hook was provided get the non-computed value from there
return s&&"get"in s&&void 0!==(o=s.get(e,!1,a))?o:l[t];// Otherwise just get the value from the style object
}},css:function(e,t,n,a){var o,i,s,r=f(t),d=wt.test(t);// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Make numeric if forced or a qualifier was provided and val looks numeric
return d||(t=B(r)),s=ke.cssHooks[t]||ke.cssHooks[r],s&&"get"in s&&(o=s.get(e,!0,n)),void 0===o&&(o=I(e,t,a)),"normal"===o&&t in Nt&&(o=Nt[t]),""===n||n?(i=parseFloat(o),!0===n||isFinite(i)?i||0:o):o}}),ke.each(["height","width"],function(e,t){ke.cssHooks[t]={get:function(e,n,a){if(n)// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return!Tt.test(ke.css(e,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?U(e,t,a):tt(e,Ct,function(){return U(e,t,a)})},set:function(e,n,a){var o,i=gt(e),// Only read styles.position if the test has a chance to fail
// to avoid forcing a reflow.
s=!Te.scrollboxSize()&&"absolute"===i.position// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
,r=(s||a)&&"border-box"===ke.css(e,"boxSizing",!1,i),d=a?F(e,t,a,r,i):0;// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
return r&&s&&(d-=re(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(i[t])-F(e,t,"border",!1,i)-.5)),d&&(o=Ge.exec(n))&&"px"!==(o[3]||"px")&&(e.style[t]=n,n=ke.css(e,t)),_(e,n,d)}}}),ke.cssHooks.marginLeft=R(Te.reliableMarginLeft,function(e,t){if(t)return(parseFloat(I(e,"marginLeft"))||e.getBoundingClientRect().left-tt(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ke.each({margin:"",padding:"",border:"Width"},function(e,t){ke.cssHooks[e+t]={expand:function(n){for(var a=0,o={},// Assumes a single number if not a string
s="string"==typeof n?n.split(" "):[n];4>a;a++)o[e+Qe[a]+t]=s[a]||s[a-2]||s[0];return o}},"margin"!==e&&(ke.cssHooks[e+t].set=_)}),ke.fn.extend({css:function(e,t){return Be(this,function(e,t,n){var a,o,s={},r=0;if(Array.isArray(t)){for(a=gt(e),o=t.length;r<o;r++)s[t[r]]=ke.css(e,t[r],!1,a);return s}return void 0===n?ke.css(e,t):ke.style(e,t,n)},e,t,1<arguments.length)}}),ke.Tween=X,X.prototype={constructor:X,init:function(e,t,n,a,o,i){this.elem=e,this.prop=n,this.easing=o||ke.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=a,this.unit=i||(ke.cssNumber[n]?"":"px")},cur:function(){var e=X.propHooks[this.prop];return e&&e.get?e.get(this):X.propHooks._default.get(this)},run:function(e){var t,n=X.propHooks[this.prop];return this.pos=this.options.duration?t=ke.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):X.propHooks._default.set(this),this}},X.prototype.init.prototype=X.prototype,X.propHooks={_default:{get:function(e){var t;// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ke.css(e.elem,e.prop,""),t&&"auto"!==t?t:0);// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
// Empty strings, null, undefined and "auto" are converted to 0.
},set:function(e){ke.fx.step[e.prop]?ke.fx.step[e.prop](e):1===e.elem.nodeType&&(ke.cssHooks[e.prop]||null!=e.elem.style[B(e.prop)])?ke.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},X.propHooks.scrollTop=X.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ke.easing={linear:function(e){return e},swing:function(e){var t=Math.cos,n=Math.PI;return .5-t(e*n)/2},_default:"swing"},ke.fx=X.prototype.init,ke.fx.step={};var kt,St,jt=/^(?:toggle|show|hide)$/,Dt=/queueHooks$/;ke.Animation=ke.extend(K,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return b(n.elem,e,Ge.exec(t),n),n}]},tweener:function(e,t){we(e)?(t=e,e=["*"]):e=e.match(Ie);for(var n,a=0,o=e.length;a<o;a++)n=e[a],K.tweeners[n]=K.tweeners[n]||[],K.tweeners[n].unshift(t)},prefilters:[G],prefilter:function(e,t){t?K.prefilters.unshift(e):K.prefilters.push(e)}}),ke.speed=function(e,t,n){var a=e&&"object"==typeof e?ke.extend({},e):{complete:n||!n&&t||we(e)&&e,duration:e,easing:n&&t||t&&!we(t)&&t};// Go to the end state if fx are off
return ke.fx.off?a.duration=0:"number"!=typeof a.duration&&(a.duration in ke.fx.speeds?a.duration=ke.fx.speeds[a.duration]:a.duration=ke.fx.speeds._default),(null==a.queue||!0===a.queue)&&(a.queue="fx"),a.old=a.complete,a.complete=function(){we(a.old)&&a.old.call(this),a.queue&&ke.dequeue(this,a.queue)},a},ke.fn.extend({fadeTo:function(e,t,n,a){// Show any hidden elements after setting opacity to 0
return this.filter(et).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:t},e,n,a)},animate:function(e,t,n,a){var o=ke.isEmptyObject(e),i=ke.speed(t,n,a),s=function(){// Operate on a copy of prop so per-property easing won't be lost
var t=K(this,ke.extend({},e),i);// Empty animations, or finishing resolves immediately
(o||Xe.get(this,"finish"))&&t.stop(!0)};return s.finish=s,o||!1===i.queue?this.each(s):this.queue(i.queue,s)},stop:function(e,t,n){var a=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",i=ke.timers,s=Xe.get(this);if(o)s[o]&&s[o].stop&&a(s[o]);else for(o in s)s[o]&&s[o].stop&&Dt.test(o)&&a(s[o]);for(o=i.length;o--;)i[o].elem===this&&(null==e||i[o].queue===e)&&(i[o].anim.stop(n),t=!1,i.splice(o,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
(t||!n)&&ke.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=Xe.get(this),a=n[e+"queue"],o=n[e+"queueHooks"],i=ke.timers,s=a?a.length:0;// Enable finishing flag on private data
// Look for any active animations, and finish them
for(n.finish=!0,ke.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=i.length;t--;)i[t].elem===this&&i[t].queue===e&&(i[t].anim.stop(!0),i.splice(t,1));// Look for any animations in the old queue and finish them
for(t=0;t<s;t++)a[t]&&a[t].finish&&a[t].finish.call(this);// Turn off finishing flag
delete n.finish})}}),ke.each(["toggle","show","hide"],function(e,t){var n=ke.fn[t];ke.fn[t]=function(e,a,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(V(t,!0),e,a,o)}}),ke.each({slideDown:V("show"),slideUp:V("hide"),slideToggle:V("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){ke.fn[e]=function(e,n,a){return this.animate(t,e,n,a)}}),ke.timers=[],ke.fx.tick=function(){var e,t=0,n=ke.timers;for(kt=Date.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||ke.fx.stop(),kt=void 0},ke.fx.timer=function(e){ke.timers.push(e),ke.fx.start()},ke.fx.interval=13,ke.fx.start=function(){St||(St=!0,z())},ke.fx.stop=function(){St=null},ke.fx.speeds={slow:600,fast:200,// Default speed
_default:400},ke.fn.delay=function(t,n){return t=ke.fx?ke.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,a){var o=e.setTimeout(n,t);a.stop=function(){e.clearTimeout(o)}})},function(){var e=pe.createElement("input"),t=pe.createElement("select"),n=t.appendChild(pe.createElement("option"));e.type="checkbox",Te.checkOn=""!==e.value,Te.optSelected=n.selected,e=pe.createElement("input"),e.value="t",e.type="radio",Te.radioValue="t"===e.value}();var Et,At=ke.expr.attrHandle;ke.fn.extend({attr:function(e,t){return Be(this,ke.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ke.removeAttr(this,e)})}}),ke.extend({attr:function(e,t,n){var a,o,i=e.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==i&&8!==i&&2!==i)// Fallback to prop when attributes are not supported
return"undefined"==typeof e.getAttribute?ke.prop(e,t,n):(1===i&&ke.isXMLDoc(e)||(o=ke.attrHooks[t.toLowerCase()]||(ke.expr.match.bool.test(t)?Et:void 0)),void 0!==n)?null===n?void ke.removeAttr(e,t):o&&"set"in o&&void 0!==(a=o.set(e,n,t))?a:(e.setAttribute(t,n+""),n):o&&"get"in o&&null!==(a=o.get(e,t))?a:(a=ke.find.attr(e,t),null==a?void 0:a);// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
// Non-existent attributes return null, we normalize to undefined
},attrHooks:{type:{set:function(e,t){if(!Te.radioValue&&"radio"===t&&s(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,a=0,// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
o=t&&t.match(Ie);if(o&&1===e.nodeType)for(;n=o[a++];)e.removeAttribute(n)}}),Et={set:function(e,t,n){return!1===t?ke.removeAttr(e,n):e.setAttribute(n,n),n}},ke.each(ke.expr.match.bool.source.match(/\w+/g),function(e,t){var n=At[t]||ke.find.attr;At[t]=function(e,t,a){var o,i,s=t.toLowerCase();return a||(i=At[s],At[s]=o,o=null==n(e,t,a)?null:s,At[s]=i),o}});var Lt=/^(?:input|select|textarea|button)$/i,qt=/^(?:a|area)$/i;ke.fn.extend({prop:function(e,t){return Be(this,ke.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ke.propFix[e]||e]})}}),ke.extend({prop:function(e,t,n){var a,o,i=e.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==i&&8!==i&&2!==i)return 1===i&&ke.isXMLDoc(e)||(t=ke.propFix[t]||t,o=ke.propHooks[t]),void 0===n?o&&"get"in o&&null!==(a=o.get(e,t))?a:e[t]:o&&"set"in o&&void 0!==(a=o.set(e,n,t))?a:e[t]=n},propHooks:{tabIndex:{get:function(e){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var t=ke.find.attr(e,"tabindex");return t?parseInt(t,10):Lt.test(e.nodeName)||qt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),Te.optSelected||(ke.propHooks.selected={get:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ke.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ke.propFix[this.toLowerCase()]=this}),ke.fn.extend({addClass:function(e){var t,n,a,o,s,r,d,l=0;if(we(e))return this.each(function(t){ke(this).addClass(e.call(this,t,Z(this)))});if(t=ee(e),t.length)for(;n=this[l++];)if(o=Z(n),a=1===n.nodeType&&" "+J(o)+" ",a){for(r=0;s=t[r++];)0>a.indexOf(" "+s+" ")&&(a+=s+" ");// Only assign if different to avoid unneeded rendering.
d=J(a),o!==d&&n.setAttribute("class",d)}return this},removeClass:function(e){var t,n,a,o,s,r,d,l=0;if(we(e))return this.each(function(t){ke(this).removeClass(e.call(this,t,Z(this)))});if(!arguments.length)return this.attr("class","");if(t=ee(e),t.length)for(;n=this[l++];)if(o=Z(n),a=1===n.nodeType&&" "+J(o)+" ",a){for(r=0;s=t[r++];)// Remove *all* instances
for(;-1<a.indexOf(" "+s+" ");)a=a.replace(" "+s+" "," ");// Only assign if different to avoid unneeded rendering.
d=J(a),o!==d&&n.setAttribute("class",d)}return this},toggleClass:function(e,t){var n=typeof e,a="string"==n||Array.isArray(e);return"boolean"==typeof t&&a?t?this.addClass(e):this.removeClass(e):we(e)?this.each(function(n){ke(this).toggleClass(e.call(this,n,Z(this),t),t)}):this.each(function(){var t,o,s,r;if(a)for(o=0,s=ke(this),r=ee(e);t=r[o++];)// Check each className given, space separated list
s.hasClass(t)?s.removeClass(t):s.addClass(t);// Toggle whole class name
else(void 0===e||"boolean"==n)&&(t=Z(this),t&&Xe.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Xe.get(this,"__className__")||""))})},hasClass:function(e){var t,n,a=0;for(t=" "+e+" ";n=this[a++];)if(1===n.nodeType&&-1<(" "+J(Z(n))+" ").indexOf(t))return!0;return!1}});var Ht=/\r/g;ke.fn.extend({val:function(e){var t,n,a,o=this[0];return arguments.length?(a=we(e),this.each(function(n){var o;1!==this.nodeType||(o=a?e.call(this,n,ke(this).val()):e,null==o?o="":"number"==typeof o?o+="":Array.isArray(o)&&(o=ke.map(o,function(e){return null==e?"":e+""})),t=ke.valHooks[this.type]||ke.valHooks[this.nodeName.toLowerCase()],(!t||!("set"in t)||void 0===t.set(this,o,"value"))&&(this.value=o))})):o?(t=ke.valHooks[o.type]||ke.valHooks[o.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(o,"value")))?n:(n=o.value,"string"==typeof n?n.replace(Ht,""):null==n?"":n):void 0}}),ke.extend({valHooks:{option:{get:function(e){var t=ke.find.attr(e,"value");return null==t?// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
J(ke.text(e)):t}},select:{get:function(e){var t,n,a,o=e.options,r=e.selectedIndex,d="select-one"===e.type,l=d?null:[],p=d?r+1:o.length;// Loop through all the selected options
for(a=0>r?p:d?r:0;a<p;a++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(n=o[a],(n.selected||a===r)&&// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!s(n.parentNode,"optgroup"))){// We don't need an array for one selects
if(t=ke(n).val(),d)return t;// Multi-Selects return an array
l.push(t)}return l},set:function(e,t){for(var n,a,o=e.options,s=ke.makeArray(t),r=o.length;r--;)a=o[r],(a.selected=-1<ke.inArray(ke.valHooks.option.get(a),s))&&(n=!0);// Force browsers to behave consistently when non-matching value is set
return n||(e.selectedIndex=-1),s}}}}),ke.each(["radio","checkbox"],function(){ke.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ke.inArray(ke(e).val(),t)}},Te.checkOn||(ke.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),Te.focusin="onfocusin"in e;var Pt=/^(?:focusinfocus|focusoutblur)$/,Ot=function(t){t.stopPropagation()};ke.extend(ke.event,{trigger:function(t,n,a,o){var s,r,d,l,p,c,u,h,m=[a||pe],f=xe.call(t,"type")?t.type:t,g=xe.call(t,"namespace")?t.namespace.split("."):[];// Don't do events on text and comment nodes
if((r=h=d=a=a||pe,3!==a.nodeType&&8!==a.nodeType)&&!Pt.test(f+ke.event.triggered)&&(-1<f.indexOf(".")&&(g=f.split("."),f=g.shift(),g.sort()),p=0>f.indexOf(":")&&"on"+f,t=t[ke.expando]?t:new ke.Event(f,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=g.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=a),n=null==n?[t]:ke.makeArray(n,[t]),u=ke.event.special[f]||{},o||!u.trigger||!1!==u.trigger.apply(a,n)))// focus/blur morphs to focusin/out; ensure we're not firing them right now
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
// Fire handlers on the event path
{if(!o&&!u.noBubble&&!Ce(a)){for(l=u.delegateType||f,Pt.test(l+f)||(r=r.parentNode);r;r=r.parentNode)m.push(r),d=r;// Only add window if we got to document (e.g., not plain obj or detached DOM)
d===(a.ownerDocument||pe)&&m.push(d.defaultView||d.parentWindow||e)}for(s=0;(r=m[s++])&&!t.isPropagationStopped();)// jQuery handler
// Native handler
h=r,t.type=1<s?l:u.bindType||f,c=(Xe.get(r,"events")||{})[t.type]&&Xe.get(r,"handle"),c&&c.apply(r,n),c=p&&r[p],c&&c.apply&&Ue(r)&&(t.result=c.apply(r,n),!1===t.result&&t.preventDefault());return t.type=f,o||t.isDefaultPrevented()||u._default&&!1!==u._default.apply(m.pop(),n)||!Ue(a)||!p||!we(a[f])||Ce(a)||(d=a[p],d&&(a[p]=null),ke.event.triggered=f,t.isPropagationStopped()&&h.addEventListener(f,Ot),a[f](),t.isPropagationStopped()&&h.removeEventListener(f,Ot),ke.event.triggered=void 0,d&&(a[p]=d)),t.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(t,n,a){var o=ke.extend(new ke.Event,a,{type:t,isSimulated:!0});ke.event.trigger(o,null,n)}}),ke.fn.extend({trigger:function(e,t){return this.each(function(){ke.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ke.event.trigger(e,t,n,!0)}}),Te.focusin||ke.each({focus:"focusin",blur:"focusout"},function(e,t){// Attach a single capturing handler on the document while someone wants focusin/focusout
var n=function(e){ke.event.simulate(t,e.target,ke.event.fix(e))};ke.event.special[t]={setup:function(){var a=this.ownerDocument||this,o=Xe.access(a,t);o||a.addEventListener(e,n,!0),Xe.access(a,t,(o||0)+1)},teardown:function(){var a=this.ownerDocument||this,o=Xe.access(a,t)-1;o?Xe.access(a,t,o):(a.removeEventListener(e,n,!0),Xe.remove(a,t))}}});var Mt=e.location,It=Date.now(),Rt=/\?/;ke.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{n=new e.DOMParser().parseFromString(t,"text/xml")}catch(t){n=void 0}return(!n||n.getElementsByTagName("parsererror").length)&&ke.error("Invalid XML: "+t),n};var Wt=/\[\]$/,Bt=/\r?\n/g,_t=/^(?:submit|button|image|reset|file)$/i,Ft=/^(?:input|select|textarea|keygen)/i;ke.param=function(e,t){var n,a=[],o=function(e,t){// If value is a function, invoke it and use its return value
var n=we(t)?t():t;a[a.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!ke.isPlainObject(e))ke.each(e,function(){o(this.name,this.value)});else// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(n in e)te(n,e[n],t,o);// Return the resulting serialization
return a.join("&")},ke.fn.extend({serialize:function(){return ke.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var e=ke.prop(this,"elements");return e?ke.makeArray(e):this}).filter(function(){var e=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!ke(this).is(":disabled")&&Ft.test(this.nodeName)&&!_t.test(e)&&(this.checked||!at.test(e))}).map(function(e,t){var n=ke(this).val();return null==n?null:Array.isArray(n)?ke.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}});var Ut=/%20/g,Xt=/#.*$/,zt=/([?&])_=[^&]*/,$t=/^(.*?):[ \t]*([^\r\n]*)$/mg,// #7653, #8125, #8152: local protocol detection
Vt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Yt=/^(?:GET|HEAD)$/,Gt=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */Qt={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */Kt={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
Jt="*/".concat("*"),// Anchor tag for parsing the document origin
Zt=pe.createElement("a");Zt.href=Mt.href,ke.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:Mt.href,type:"GET",isLocal:Vt.test(Mt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":"*/*",text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":ke.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?// Building a settings object
oe(oe(e,ke.ajaxSettings),t):// Extending ajaxSettings
oe(ke.ajaxSettings,e)},ajaxPrefilter:ne(Qt),ajaxTransport:ne(Kt),// Main method
ajax:function(t,n){// Callback for when everything is done
function a(t,n,a,i){var l,c,m,f,T,w=n;// Ignore repeat invocations
u||(// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
// Cache response headers
// Set readyState
// Determine if successful
// Convert no matter what (that way responseXXX fields are always set)
// Set data for the fake xhr object
// Status-dependent callbacks
// Complete
u=!0,p&&e.clearTimeout(p),o=void 0,d=i||"",N.readyState=0<t?4:0,l=200<=t&&300>t||304===t,a&&(f=ie(g,N,a)),f=se(g,f,N,l),l?(g.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(ke.lastModified[r]=T),T=N.getResponseHeader("etag"),T&&(ke.etag[r]=T)),204===t||"HEAD"===g.type?w="nocontent":304===t?w="notmodified":(w=f.state,c=f.data,m=f.error,l=!m)):(m=w,(t||!w)&&(w="error",0>t&&(t=0))),N.status=t,N.statusText=(n||w)+"",l?x.resolveWith(s,[c,w,N]):x.rejectWith(s,[N,w,m]),N.statusCode(v),v=void 0,h&&y.trigger(l?"ajaxSuccess":"ajaxError",[N,g,l?c:m]),b.fireWith(s,[N,w]),h&&(y.trigger("ajaxComplete",[N,g]),! --ke.active&&ke.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var o,// URL without anti-cache param
r,// Response headers
d,l,// timeout handle
p,// Url cleanup var
c,// Request state (becomes false upon send and true upon completion)
u,// To know if global events are to be dispatched
h,// Loop variable
m,// uncached part of the url
f,// Create the final options object
g=ke.ajaxSetup({},n),// Callbacks context
s=g.context||g,// Context for global events is callbackContext if it is a DOM node or jQuery collection
y=g.context&&(s.nodeType||s.jquery)?ke(s):ke.event,// Deferreds
x=ke.Deferred(),b=ke.Callbacks("once memory"),// Status-dependent callbacks
v=g.statusCode||{},// Headers (they are sent all at once)
T={},w={},// Default abort message
C="canceled",// Fake xhr
N={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(u){if(!l)for(l={};t=$t.exec(d);)l[t[1].toLowerCase()+" "]=(l[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=l[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},// Raw string
getAllResponseHeaders:function(){return u?d:null},// Caches the header
setRequestHeader:function(e,t){return null==u&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,T[e]=t),this},// Overrides response content-type header
overrideMimeType:function(e){return null==u&&(g.mimeType=e),this},// Status-dependent callbacks
statusCode:function(e){if(e)if(u)N.always(e[N.status]);else// Lazy-add the new callbacks in a way that preserves old ones
for(var t in e)v[t]=[v[t],e[t]];return this},// Cancel the request
abort:function(e){var t=e||C;return o&&o.abort(t),a(0,t),this}};// Attach deferreds
// A cross-domain request is in order when the origin doesn't match the current origin.
if(x.promise(N),g.url=((t||g.url||Mt.href)+"").replace(Gt,Mt.protocol+"//"),g.type=n.method||n.type||g.method||g.type,g.dataTypes=(g.dataType||"*").toLowerCase().match(Ie)||[""],null==g.crossDomain){c=pe.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{c.href=g.url,c.href=c.href,g.crossDomain=Zt.protocol+"//"+Zt.host!=c.protocol+"//"+c.host}catch(t){g.crossDomain=!0}}// Convert data if not already a string
// If request was aborted inside a prefilter, stop there
if(g.data&&g.processData&&"string"!=typeof g.data&&(g.data=ke.param(g.data,g.traditional)),ae(Qt,g,n,N),u)return N;// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
// Check for headers option
for(m in h=ke.event&&g.global,h&&0==ke.active++&&ke.event.trigger("ajaxStart"),g.type=g.type.toUpperCase(),g.hasContent=!Yt.test(g.type),r=g.url.replace(Xt,""),g.hasContent?g.data&&g.processData&&0===(g.contentType||"").indexOf("application/x-www-form-urlencoded")&&(g.data=g.data.replace(Ut,"+")):(f=g.url.slice(r.length),g.data&&(g.processData||"string"==typeof g.data)&&(r+=(Rt.test(r)?"&":"?")+g.data,delete g.data),!1===g.cache&&(r=r.replace(zt,"$1"),f=(Rt.test(r)?"&":"?")+"_="+It++ +f),g.url=r+f),g.ifModified&&(ke.lastModified[r]&&N.setRequestHeader("If-Modified-Since",ke.lastModified[r]),ke.etag[r]&&N.setRequestHeader("If-None-Match",ke.etag[r])),(g.data&&g.hasContent&&!1!==g.contentType||n.contentType)&&N.setRequestHeader("Content-Type",g.contentType),N.setRequestHeader("Accept",g.dataTypes[0]&&g.accepts[g.dataTypes[0]]?g.accepts[g.dataTypes[0]]+("*"===g.dataTypes[0]?"":", */*; q=0.01"):g.accepts["*"]),g.headers)N.setRequestHeader(m,g.headers[m]);// Allow custom headers/mimetypes and early abort
if(g.beforeSend&&(!1===g.beforeSend.call(s,N,g)||u))// Abort if not done already and return
return N.abort();// Aborting is no longer a cancellation
// If no transport, we auto-abort
if(C="abort",b.add(g.complete),N.done(g.success),N.fail(g.error),o=ae(Kt,g,n,N),!o)a(-1,"No Transport");else{// If request was aborted inside ajaxSend, stop there
if(N.readyState=1,h&&y.trigger("ajaxSend",[N,g]),u)return N;// Timeout
g.async&&0<g.timeout&&(p=e.setTimeout(function(){N.abort("timeout")},g.timeout));try{u=!1,o.send(T,a)}catch(t){// Rethrow post-completion exceptions
if(u)throw t;// Propagate others as results
a(-1,t)}}return N},getJSON:function(e,t,n){return ke.get(e,t,n,"json")},getScript:function(e,t){return ke.get(e,void 0,t,"script")}}),ke.each(["get","post"],function(e,t){ke[t]=function(e,n,a,o){// The url can be an options object (which then must have .url)
return we(n)&&(o=o||a,a=n,n=void 0),ke.ajax(ke.extend({url:e,type:t,dataType:o,data:n,success:a},ke.isPlainObject(e)&&e))}}),ke._evalUrl=function(e,t){return ke.ajax({url:e,// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(e){ke.globalEval(e,t)}})},ke.fn.extend({wrapAll:function(e){var t;return this[0]&&(we(e)&&(e=e.call(this[0])),t=ke(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return we(e)?this.each(function(t){ke(this).wrapInner(e.call(this,t))}):this.each(function(){var t=ke(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=we(e);return this.each(function(n){ke(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ke(this).replaceWith(this.childNodes)}),this}}),ke.expr.pseudos.hidden=function(e){return!ke.expr.pseudos.visible(e)},ke.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ke.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(t){}};var en={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},tn=ke.ajaxSettings.xhr();Te.cors=!!tn&&"withCredentials"in tn,Te.ajax=tn=!!tn,ke.ajaxTransport(function(t){var n,a;// Cross domain only allowed if supported through XMLHttpRequest
if(Te.cors||tn&&!t.crossDomain)return{send:function(o,s){var r,d=t.xhr();// Apply custom fields if provided
if(d.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(r in t.xhrFields)d[r]=t.xhrFields[r];// Override mime type if needed
// Set headers
for(r in t.mimeType&&d.overrideMimeType&&d.overrideMimeType(t.mimeType),t.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest"),o)d.setRequestHeader(r,o[r]);// Callback
n=function(e){return function(){n&&(n=a=d.onload=d.onerror=d.onabort=d.ontimeout=d.onreadystatechange=null,"abort"===e?d.abort():"error"===e?"number"==typeof d.status?s(// File: protocol always yields status 0; see #8605, #14207
d.status,d.statusText):s(0,"error"):s(en[d.status]||d.status,d.statusText,// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(d.responseType||"text")||"string"!=typeof d.responseText?{binary:d.response}:{text:d.responseText},d.getAllResponseHeaders()))}},d.onload=n(),a=d.onerror=d.ontimeout=n("error"),void 0===d.onabort?d.onreadystatechange=function(){4===d.readyState&&e.setTimeout(function(){n&&a()})}:d.onabort=a,n=n("abort");try{d.send(t.hasContent&&t.data||null)}catch(t){// #14683: Only rethrow if this hasn't been notified as an error yet
if(n)throw t}},abort:function(){n&&n()}}}),ke.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ke.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ke.globalEval(e),e}}}),ke.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ke.ajaxTransport("script",function(e){// This transport only deals with cross domain or forced-by-attrs requests
if(e.crossDomain||e.scriptAttrs){var t,n;return{send:function(a,o){t=ke("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),pe.head.appendChild(t[0])},abort:function(){n&&n()}}}});var nn=[],an=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
ke.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=nn.pop()||ke.expando+"_"+It++;return this[e]=!0,e}}),ke.ajaxPrefilter("json jsonp",function(t,n,a){var o,i,s,r=!1!==t.jsonp&&(an.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&an.test(t.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(r||"jsonp"===t.dataTypes[0])// Delegate to script
return o=t.jsonpCallback=we(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,r?t[r]=t[r].replace(an,"$1"+o):!1!==t.jsonp&&(t.url+=(Rt.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return s||ke.error(o+" was not called"),s[0]},t.dataTypes[0]="json",i=e[o],e[o]=function(){s=arguments},a.always(function(){void 0===i?ke(e).removeProp(o):e[o]=i,t[o]&&(t.jsonpCallback=n.jsonpCallback,nn.push(o)),s&&we(i)&&i(s[0]),s=i=void 0}),"script"}),Te.createHTMLDocument=function(){var e=pe.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),ke.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var a,o,i;// Single tag
return(t||(Te.createHTMLDocument?(t=pe.implementation.createHTMLDocument(""),a=t.createElement("base"),a.href=pe.location.href,t.head.appendChild(a)):t=pe),o=Le.exec(e),i=!n&&[],o)?[t.createElement(o[1])]:(o=N([e],t,i),i&&i.length&&ke(i).remove(),ke.merge([],o.childNodes))},ke.fn.load=function(e,t,n){var a,o,i,s=this,r=e.indexOf(" ");return-1<r&&(a=J(e.slice(r)),e=e.slice(0,r)),we(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),0<s.length&&ke.ajax({url:e,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:o||"GET",dataType:"html",data:t}).done(function(e){i=arguments,s.html(a?// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
ke("<div>").append(ke.parseHTML(e)).find(a):// Otherwise use the full result
e)}// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
).always(n&&function(e,t){s.each(function(){n.apply(this,i||[e.responseText,t,e])})}),this},ke.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ke.fn[t]=function(e){return this.on(t,e)}}),ke.expr.pseudos.animated=function(e){return ke.grep(ke.timers,function(t){return e===t.elem}).length},ke.offset={setOffset:function(e,t,n){var a,o,i,s,r,d,l,p=ke.css(e,"position"),c=ke(e),u={};// Set position first, in-case top/left are set even on static elem
"static"===p&&(e.style.position="relative"),r=c.offset(),i=ke.css(e,"top"),d=ke.css(e,"left"),l=("absolute"===p||"fixed"===p)&&-1<(i+d).indexOf("auto"),l?(a=c.position(),s=a.top,o=a.left):(s=parseFloat(i)||0,o=parseFloat(d)||0),we(t)&&(t=t.call(e,n,ke.extend({},r))),null!=t.top&&(u.top=t.top-r.top+s),null!=t.left&&(u.left=t.left-r.left+o),"using"in t?t.using.call(e,u):c.css(u)}},ke.fn.extend({// offset() relates an element's border box to the document origin
offset:function(e){// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){ke.offset.setOffset(this,e,t)});var t,n,a=this[0];if(a)// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
return a.getClientRects().length?(t=a.getBoundingClientRect(),n=a.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0};// Get document-relative position by adding viewport scroll to viewport-relative gBCR
},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,a=this[0],o={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===ke.css(a,"position"))t=a.getBoundingClientRect();else{for(t=this.offset(),n=a.ownerDocument,e=a.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===ke.css(e,"position");)e=e.parentNode;e&&e!==a&&1===e.nodeType&&(o=ke(e).offset(),o.top+=ke.css(e,"borderTopWidth",!0),o.left+=ke.css(e,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:t.top-o.top-ke.css(a,"marginTop",!0),left:t.left-o.left-ke.css(a,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===ke.css(e,"position");)e=e.offsetParent;return e||Ke})}}),ke.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;ke.fn[e]=function(a){return Be(this,function(e,a,o){// Coalesce documents and windows
var i;return Ce(e)?i=e:9===e.nodeType&&(i=e.defaultView),void 0===o?i?i[t]:e[a]:void(i?i.scrollTo(n?i.pageXOffset:o,n?o:i.pageYOffset):e[a]=o)},e,a,arguments.length)}}),ke.each(["top","left"],function(e,t){ke.cssHooks[t]=R(Te.pixelPosition,function(e,n){if(n)// If curCSS returns percentage, fallback to offset
return n=I(e,t),ft.test(n)?ke(e).position()[t]+"px":n})}),ke.each({Height:"height",Width:"width"},function(e,t){ke.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,a){ke.fn[a]=function(o,i){var s=arguments.length&&(n||"boolean"!=typeof o),r=n||(!0===o||!0===i?"margin":"border");return Be(this,function(t,n,o){var i;return Ce(t)?0===a.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,de(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===o?// Get width or height on the element, requesting but not forcing parseFloat
ke.css(t,n,r):// Set width or height on the element
ke.style(t,n,o,r);// Get document width or height
},t,s?o:void 0,s)}})}),ke.each(["blur","focus","focusin","focusout","resize","scroll","click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","mouseenter","mouseleave","change","select","submit","keydown","keypress","keyup","contextmenu"],function(e,t){ke.fn[t]=function(e,n){return 0<arguments.length?this.on(t,null,e,n):this.trigger(t)}}),ke.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),ke.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,a){return this.on(t,e,n,a)},undelegate:function(e,t,n){// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),ke.proxy=function(e,t){var n,a,o;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),!!we(e))return a=ue.call(arguments,2),o=function(){return e.apply(t||this,a.concat(ue.call(arguments)))},o.guid=e.guid=e.guid||ke.guid++,o;// Simulated bind
},ke.holdReady=function(e){e?ke.readyWait++:ke.ready(!0)},ke.isArray=Array.isArray,ke.parseJSON=JSON.parse,ke.nodeName=s,ke.isFunction=we,ke.isWindow=Ce,ke.camelCase=f,ke.type=a,ke.now=Date.now,ke.isNumeric=function(e){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=ke.type(e);return("number"===t||"string"===t)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ke});var// Map over jQuery in case of overwrite
on=e.jQuery,// Map over the $ in case of overwrite
sn=e.$;return ke.noConflict=function(t){return e.$===ke&&(e.$=sn),t&&e.jQuery===ke&&(e.jQuery=on),ke},t||(e.jQuery=e.$=ke),ke})},{}],2:[function(e,t){var n=e("jquery");t.exports=class{constructor(){n(document).ready(()=>{this.modal=n("#modal"),this.closeButton=n("#modalClose"),this.closeButton.click(this.closeModal),this.modalContent=n("#modalContent")})}closeModal(){this.modal.hide()}}},{jquery:1}],3:[function(e,t){var n=e("jquery");t.exports=class{constructor(){n(document).ready(()=>{this.breadcrumbs=n("#breadcrumbs")})}initView(){this.render("> \xFCbersicht")}render(e){this.breadcrumbs=e}}},{jquery:1}],4:[function(e){let t=e("./View"),n=e("./Modal"),a=new t,o=new n},{"./Modal":2,"./View":3}]},{},[4]);
