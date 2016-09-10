require(['https://cdn.firebase.com/js/client/2.4.2/firebase.js'], function (firebase) {});

 var queue = [];
$(document).ready(function () {
	console.log("document ready");
	ref = new Firebase("https://queue-26963.firebaseio.com/");

  // queue = [];
});


var getNextStudent = function () {
	if (queue.length > 0) {
		return queue.pop();  
	}
};