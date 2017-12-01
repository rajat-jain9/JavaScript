function myFunction() {
	var arr = ["Rajat", "Vijay",
	"Parveen", "Pankaj",
	"Sushant","Shubham",
	"Rajiv", "Pawan",
	"Sandeep", "Mohit",
	"Gopil", "Rishi"];
	var input = document.getElementById("myInput").value;
	var res = printList(input,arr);

	function register() {
		var printThis = "";
		for(var i = 0; i < res.length; i++) {
			printThis += res[i];
		}
		return printThis;
	}
	document.getElementById('result').value = register();
}

function printList(input,arr) {
		var l = 0;
		var res = [];
	for(var i = 0; i < arr.length; i++) {
		var flag = 1;
		for(var k = 0; k < input.length; k++) {
			if(input.charAt(k) == arr[i].charAt(k))
				continue;
			else {
				flag = 0;
				break;
			}
		}
		if(flag == 0)
			console.log("");
		else {
			console.log(arr[i]);
			 res[l] = arr[i];
			l++;
		}
	}
	return res;
}

