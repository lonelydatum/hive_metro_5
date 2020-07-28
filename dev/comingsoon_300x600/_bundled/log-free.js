(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power3.easeInOut;
var date = new Date();
var tl = new TimelineMax({ repeat: 1, repeatDelay: 2 });

function lb() {

	tl.set(".frame1", { opacity: 1 });
	tl.from([".t1", ".t1a"], .3, { opacity: 0 });

	tl.to(".t1a", .3, { opacity: 0 }, "+=1.8");
	tl.from(".t1b", .3, { opacity: 0 });

	tl.to(".t1b", .3, { opacity: 0 }, "+=1");
	tl.from(".t1c", .3, { opacity: 0 });

	tl.to(".t1c", .3, { opacity: 0 }, "+=1");
	tl.from(".t1d", .3, { opacity: 0 });

	tl.to(".frame1", .3, { opacity: 0 }, "+=1");
	tl.to(".frame2", .3, { opacity: 1 });
	// tl.to(".frame1", .3, {opacity:0})
}

function bb() {
	var type = arguments.length <= 0 || arguments[0] === undefined ? "COMING_SOON" : arguments[0];

	var t2Time = type === "COMING_SOON" ? 1 : .6;

	tl.set(".frame1", { opacity: 1 });
	tl.from(".t1", .3, { opacity: 0 });
	tl.to(".t1", .3, { opacity: 0 }, "+=1.8");

	tl.from([".t2", ".t2a"], .3, { opacity: 0 });
	// tl.from(".t2a", .3, {opacity:0}, `+=${t2Time}`)
	tl.to(".t2a", .3, { opacity: 0 }, "+=2.7");
	tl.from(".t2b", .3, { opacity: 0 });
}

function dbb() {
	var type = arguments.length <= 0 || arguments[0] === undefined ? "COMING_SOON" : arguments[0];

	var t2Time = type === "COMING_SOON" ? 1 : .6;

	tl.set(".frame1", { opacity: 1 });

	var delay = 2;
	var time = .5;

	tl.add("f1");
	tl.to(".bg1", time, { opacity: 1 }, "f1");
	tl.to([".bg2", ".bg3"], time, { opacity: 0 }, "f1");

	tl.add("f2", "+=" + delay);
	tl.to(".bg2", time, { opacity: 1 }, "f2");
	tl.to([".bg1", ".bg3"], time, { opacity: 0 }, "f2");

	tl.add("f3", "+=" + delay);
	tl.to(".bg3", time, { opacity: 1 }, "f3");
	tl.to([".bg1", ".bg2"], time, { opacity: 0 }, "f3");
}

exports.size = size;
exports.bb = bb;
exports.dbb = dbb;
exports.lb = lb;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require("../../_common/js/common.js");

(0, _commonJsCommonJs.dbb)();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
