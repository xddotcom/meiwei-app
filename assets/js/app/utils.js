MeiweiApp.showConfirmDialog = function(title, content, onConfirm) {
	if (navigator.notification && _.isFunction(navigator.notification.confirm)) {
		var callback = function(button) { if (button == 2 && onConfirm) onConfirm(); };
		navigator.notification.confirm(content, callback, title, [MeiweiApp._('Cancel'), MeiweiApp._('Confirm')]);
	} else {
		if (confirm(title) == true) onConfirm();
	}
}

MeiweiApp.sendWeixinMsg = function(content) {
    var command = [content];
    var success = function() {}, fail = function() {};
    if (window.Cordova) {
        Cordova.exec(success, fail, "Weixin", "sendTextContent", command);
    }
}

MeiweiApp.shareToMoments = function(url, content, pic) {
    var command = [url, content, content, pic];
    var success = function() {};
    var fail = function() {};
    if (window.Cordova) {
        Cordova.exec(success, fail, "Weixin", "sendAppContent", command);
    }
}