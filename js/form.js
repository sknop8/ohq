var name, issue, type;
$('#submit').click(function(){
  	var $form = $('#issueForm');
  	var info = $form.serializeArray();
  	name = info.name;
  	issue = info.issue;
  	type = info.type;
  	// $form.submit();
  	console.log(info);
});



