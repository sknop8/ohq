var queue = [];
$(document).ready(function () {
	console.log("document ready");
});


var getNextStudent = function () {
	if (queue.length > 0) {
		return queue.pop();  
	}
};