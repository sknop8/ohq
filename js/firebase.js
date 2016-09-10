require(['https://cdn.firebase.com/js/client/2.4.2/firebase.js'], function (firebase) {});

var ref = new Firebase("https://queue-26963.firebaseio.com/");

var temp = ref.child("filler");

$(document).ready(function () {
	temp.set({title: "", text: ""});
	console.log("temp set");
});

ref.limitToLast(50).on("value", function (snapshot) {
  var data = snapshot.val();
  var title = data.title;
  var text = data.text;
  var textElement = $("<span>");
  var titleElement = $("<h3>")
  titleElement.text(title);
  textElement.text(text).prepend(titleElement);
  $("#blogposts").prepend(textElement);
});

ref.limitToLast(50).on("child_added", function (snapshot) {
  var data = snapshot.val();
  var title = data.title;
  var text = data.text;
  var textElement = $("<span>");
  var titleElement = $("<h3>")
  titleElement.text(title);
  textElement.text(text).prepend(titleElement);
  $("#blogposts").prepend(textElement);
});