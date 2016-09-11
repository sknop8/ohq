require(['https://cdn.firebase.com/js/client/2.4.2/firebase.js'], function (firebase) {});

var temp = rootRef.child("filler");

$(document).ready(function () {
	temp.set({count: 0});
	console.log("temp set");
});



var func = function (snapshot) {
  var data = snapshot.val();
  var name = data.studentname;
  var issue = data.issue;
  var time = Math.floor((Date.now() - data.timestamp) / 60000);
  var category = data.category;
  var rowElem = $("<tr>");
  var nameElem = $("<td>");
  var categoryElem = $("<td>");
  var issueElem = $("<td>");
  var timeElem = $("<td>");
  var doneButtonContainer = $("<span class='lilButtons'></span>");//<button type=\"button\" class=\"btn btn-default\">");
  var doneButton = $("<img  src=img/DoneOff.png width=\"25px\"/>");
  doneButton.click(function(e) {
    rootRef.child(name).remove();
    location.reload();
  });
  doneButton.mousedown(function(){
    $(this).attr("src", "img/DoneOn.png");
  });
  doneButtonContainer.append(doneButton);
  if (data.state==="waiting") {
  var helpButtonContainer = $("<span  class='lilButtons'></span>");//<button type=\"button\" class=\"btn btn-default\">");
  var helpButton = $("<img src=img/HelpOff.png width=\"25px\"/>");
  helpButton.click(function(){
    var img = $(this).attr("src");
    if (img === "img/HelpOff.png") {
      $(this).attr("src","img/HelpOn.png");
    } else {
      $(this).attr("src", "img/HelpOff.png");
    }
  });
} else {
  var helpButtonContainer = $("<span  class='lilButtons'></span>");//<button type=\"button\" class=\"btn btn-default\">");
  var helpButton = $("<img src=img/HelpOn.png width=\"25px\"/>");
  helpButton.click(function(){
    var img = $(this).attr("src");
    if (img === "img/HelpOff.png") {
      $(this).attr("src","img/HelpOn.png");
    } else {
      $(this).attr("src", "img/HelpOff.png");
    }
  });
}
  helpButtonContainer.append(helpButton);
  nameElem.text(name);
  categoryElem.text(category);
  issueElem.text(issue);
  timeElem.text(time + " minutes");
  rowElem.append(nameElem);
  rowElem.append(categoryElem);
  rowElem.append(issueElem);
  rowElem.append(timeElem);
  rowElem.append(helpButtonContainer);
  rowElem.append(doneButtonContainer);
  if (time) {
    $("#queueElem").last().append(rowElem);
  }
};

rootRef.limitToLast(50).on("child_added", func);

rootRef.limitToLast(50).on("value", func);

// rootRef.limitToLast(50).on("child_removed", func);


var nameField = $("#nameInput");
var issueField = $("#issueInput");
var otherDescrip = $("#otherDescrip");

$("#issueForm").on("submit", function (e) {
  var name = nameField.val();
  var issue = issueField.val();
  var category = otherDescrip.val();
  rootRef.child(name).set({studentname: name, issue: issue, category: category, timestamp: Date.now(), state: waiting});
  nameField.val('');
  issueField.val('');
  otherDescrip.val('');
  technical.prop('checked', false);
  conceptual.prop('checked', false);
  other.prop('checked', false);
  e.preventDefault();
});



$("#button").click(function() {
  $("#issueForm").submit();
});


 $("#ohq").click(function(){
  window.location.href="index.html";

 });


$(".btn-primary").mousedown(function(){
  this.css("border", "solid 4px var(--accent-color)");
});

$(".btn-primary").click(function(){
  this.css("border", "solid 4px var(--accent-color)");
});
