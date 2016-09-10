require(['https://cdn.firebase.com/js/client/2.4.2/firebase.js'], function (firebase) {});

var Queue;
var ref;
$(document).ready(function () {
  Queue = [];
  ref = new Firebase("https://queue-26963.firebaseio.com/");
});