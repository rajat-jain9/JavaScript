function basicInformation() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("mailid").value;
	var fName = document.getElementById("fName").value;
	var phone = document.getElementById("phone").value;
	var gender = document.getElementsByName("gender");
	var len = gender.length;
	var value;
	var qual = document.getElementsByName("qualification");
	var len1 = qual.length;
	var maxQual;
	for(var i = 0; i < len; i++) {
		if(gender[i].checked) {
			value = gender[i].value;
		}
	}

	for(var i = 0; i < len1; i++) {
		if(qual[i].checked) {
			maxQual = qual[i].value;
		}
	}
	alert("Name: " +name +"\n" +"Father's Name: " +fName +"\n" +"Email: " +email +"\n"
		+"Phone: " +phone +"\n" +"gender: " +value +"\n" +"Qualification: " +maxQual);
}