require(['https://cdn.firebase.com/js/client/2.4.2/firebase.js'], function (firebase) {});

// var ref = new Firebase("https://queue-26963.firebaseio.com/");
var temp = rootRef.child("filler");

var Student = function Student(name, issue, type) {
	this.name = name;
    this.issue = issue;
    this.type = type;
    this.state = "WAITING";
    this.timeEntered = 0;
};

Student.prototype.addToQueue = function () {
    queue.push(this);
    this.timeEntered = Date.now();
};

function addToQueue(name, problem, category) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

Student.prototype.helpStudent = function () {
	this.state = "BEING_HELPED";
};

Student.prototype.putOnTop = function () {
	queue.unshift(this);
	this.state = "WAITING";
};
