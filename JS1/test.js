function isSubstring() {
	var s1 = document.getElementById("string1").value;
	var s2 = document.getElementById("string2").value;
	var s3 = s1.includes(s2) ;
	if(s1 == "" || s2 == "") {
		s3 = "";
		alert("Fields Can't be empty.")
	}
	document.getElementById("result").value = s3;
}
function resetFields() {
	document.getElementById("string1").value = "";
	document.getElementById("string2").value = "";
	document.getElementById("result").value = "";
}