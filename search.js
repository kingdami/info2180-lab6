function handle () {
	var httpRequest = new XMLHttpRequest();
	var q;
	response = document.getElementById("result");
	response.innerHTML = "processing...";
	q = document.getElementsByName("q")[0].value;
	console.log(q);

	
	//var url = "request.php";
	httpRequest.open("GET", "request.php?q=definition" + q, true);
	
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
			if(httpRequest.status == 200) {
			response = httpRequest.responseText;
			console.log(response);
			alert(response);
			}
		}
  	};
  
	httpRequest.send();	
	
}