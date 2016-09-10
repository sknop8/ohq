require(['https://cdn.firebase.com/js/client/2.4.2/firebase.js'], function (firebase) {});

var temp = rootRef.child("filler");

$(document).ready(function () {
	temp.set({title: "", text: ""});
	console.log("temp set");
});

rootRef.limitToLast(50).on("value", function (snapshot) {
  var data = snapshot.val();
  var name = data.name;
  var issue = data.issue;
  var category = data.category;
  var rowElem = $("<row>");
  var nameElem = $("<col-md-4>");
  var categoryElem = $("<col-md-4>");
  var issueElem = $("<col-md-4>");
  nameElem.text(name);
  categoryElem.text(category);
  issueElem.text(issue);
  categoryElem.prepend(issueElem);
  nameElem.prepend(categoryElem);
  rowElem.prepend(nameElem);
  $("#queueElem").prepend(rowElem);
});

rootRef.limitToLast(50).on("child_added", function (snapshot) {
  var data = snapshot.val();
  var title = data.title;
  var text = data.text;
  var textElement = $("<span>");
  var titleElement = $("<h3>")
  titleElement.text(title);
  textElement.text(text).prepend(titleElement);
  $("#queueElem").prepend(textElement);
});

var nameField = $("#nameInput");
var issueField = $("#issueInput");
var technical = $("#technical");
var conceptual = $("#conceptual");
var other = $("#other");
var otherDescrip = $("#otherDescrip");

$("#issueForm").on("submit", function (e) {
  var name = nameField.val();
  var issue = issueField.val(); 
  if (technical.checked) {
    rootRef.push({name: name, issue: issue, category: "technical"});
  } else if (conceptual.checked) {
    rootRef.push({name: name, issue: issue, category: "conceptual"});
  } else {
    rootRef.push({name: name, issue: issue, category: otherDescrip.val()});
  }
  nameField.val('');
  issueField.val('');
  technical.prop('checked', false);
  conceptual.prop('checked', false);
  other.prop('checked', false);
  e.preventDefault();
  window.location = "studentSubmitted.html"
});
