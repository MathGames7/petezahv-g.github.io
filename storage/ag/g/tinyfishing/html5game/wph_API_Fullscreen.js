(() => {
	var isCommonjs = typeof module !== "undefined" && module.exports;
	var keyboardAllowed =
		typeof Element !== "undefined" && "ALLOW_KEYBOARD_INPUT" in Element;

	var fn = (() => {
		var val;
		var valLength;

		var fnMap = [
			[
				"requestFullscreen",
				"exitFullscreen",
				"fullscreenElement",
				"fullscreenEnabled",
				"fullscreenchange",
				"fullscreenerror",
			],
			// new WebKit
			[
				"webkitRequestFullscreen",
				"webkitExitFullscreen",
				"webkitFullscreenElement",
				"webkitFullscreenEnabled",
				"webkitfullscreenchange",
				"webkitfullscreenerror",
			],
			// old WebKit (Safari 5.1)
			[
				"webkitRequestFullScreen",
				"webkitCancelFullScreen",
				"webkitCurrentFullScreenElement",
				"webkitCancelFullScreen",
				"webkitfullscreenchange",
				"webkitfullscreenerror",
			],
			[
				"mozRequestFullScreen",
				"mozCancelFullScreen",
				"mozFullScreenElement",
				"mozFullScreenEnabled",
				"mozfullscreenchange",
				"mozfullscreenerror",
			],
			[
				"msRequestFullscreen",
				"msExitFullscreen",
				"msFullscreenElement",
				"msFullscreenEnabled",
				"MSFullscreenChange",
				"MSFullscreenError",
			],
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0, valLength = val.length; i < valLength; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var screenfull = {
		request: (elem) => {
			var request = fn.requestFullscreen;

			elem = elem || document.documentElement;

			// Work around Safari 5.1 bug: reports support for
			// keyboard in fullscreen even though it doesn't.
			// Browser sniffing, since the alternative with
			// setTimeout is even worse.
			if (/5\.1[\.\d]* Safari/.test(navigator.userAgent)) {
				elem[request]();
			} else {
				elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
			}
		},
		exit: () => {
			document[fn.exitFullscreen]();
		},
		toggle: function (elem) {
			if (this.isFullscreen) {
				this.exit();
			} else {
				this.request(elem);
			}
		},
		raw: fn,
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.screenfull = false;
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: () => Boolean(document[fn.fullscreenElement]),
		},
		element: {
			enumerable: true,
			get: () => document[fn.fullscreenElement],
		},
		enabled: {
			enumerable: true,
			get: () => {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			},
		},
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();

function js_isFullscreenEnabled() {
	if (window.innerHeight == screen.height) {
		// browser is fullscreen
		return true;
	} else return false;
	//return screenfull.isFullscreen;
}

function js_isFullscreenAvaliable() {
	return screenfull.enabled;
}
