require(['https://cdn.firebase.com/js/client/2.4.2/firebase.js'], function (firebase) {});

var temp = rootRef.child("filler");

$(document).ready(function () {
	temp.set({title: "", text: ""});
	console.log("temp set");
});

rootRef.limitToLast(50).on("value", function (snapshot) {
  var data = snapshot.val();
  var title = data.title;
  var text = data.text;
  var textElement = $("<span>");
  var titleElement = $("<h3>")
  titleElement.text(title);
  textElement.text(text).prepend(titleElement);
  $("#blogposts").prepend(textElement);
});

rootRef.limitToLast(50).on("child_added", function (snapshot) {
  var data = snapshot.val();
  var title = data.title;
  var text = data.text;
  var textElement = $("<span>");
  var titleElement = $("<h3>")
  titleElement.text(title);
  textElement.text(text).prepend(titleElement);
  $("#blogposts").prepend(textElement);
});

var studentInput = $("#issueForm");
var textField = $("#textinput");

$("#issueForm").on("submit", function (e) {
  var title = titleField.val();
  var text = textField.val();
  ref.push({title: title, text: text});
  titleField.val('');
  textField.val('');
  $("#logincontainer")[0].style.visibility="hidden";
  $("#postcontainer")[0].style.visibility="visible";
  e.preventDefault();
  $("#successmessage")[0].style.visibility="visible";
});
