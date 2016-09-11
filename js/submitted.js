require(['https://cdn.firebase.com/js/client/2.4.2/firebase.js'], function (firebase) {});
var count = 0;
rootRef.child("students").once("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      count++;
      console.log("doing");
});
$("#peopleInFront").html(count);