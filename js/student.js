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

Student.prototype.helpStudent = function () {
	this.state = "BEING_HELPED";
};

Student.prototype.putOnTop = function () {
	queue.unshift(this);
	this.state = "WAITING";
};
