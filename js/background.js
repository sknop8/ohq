 var queue = [];
$(document).ready(function () {
  // queue = [];
});


var getNextStudent = function () {
	if (queue.length > 0) {
		return queue.pop();
	}
};