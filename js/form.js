var name, issue, type;
$('#submit').click(function(){
  	var $form = $('#issueForm');
  	var info = $form.serializeArray();
  	name = info.name;
  	issue = info.issue;
  	type = info.type;
  	var stud = new Student(name, issue, type);
  	stud.addToQueue();
  	console.log(stud);
});



