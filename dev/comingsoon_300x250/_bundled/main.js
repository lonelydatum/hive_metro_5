(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power3.easeInOut;

function start() {
	var type = arguments.length <= 0 || arguments[0] === undefined ? "COMING_SOON" : arguments[0];

	var t2Time = type === "COMING_SOON" ? 1 : .6;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	tl.from(".t1", .3, { opacity: 0 });
	tl.to(".t1", .3, { opacity: 0 }, "+=1.8");

	tl.from(".t2", .3, { opacity: 0 });
	tl.from(".t2a", .3, { opacity: 0 }, "+=" + t2Time);
	tl.to(".t2a", .3, { opacity: 0 }, "+=3");
	tl.from(".t2b", .3, { opacity: 0 });
}

exports.size = size;
exports.start = start;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require("../../_common/js/common.js");

(0, _commonJsCommonJs.start)("COMING_SOON");

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
