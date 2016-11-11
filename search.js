var response
function handle () {
	var httpRequest = new XMLHttpRequest();
	var q;
	response = document.getElementById("result");
	response.innerHTML = "processing...";
	q = document.getElementsByName("q")[0].value;
	console.log(q);

	
	//var url = "request.php";
	httpRequest.open("GET", "request.php?q=" + q, true);
	
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
			if(httpRequest.status == 200) {
			response = httpRequest.responseText;
			console.log(response);
			document.getElementById("result").innerHTML = response;
			}
		}
  	};
  
	httpRequest.send();	
	
}
		
function handleAll() {
	var httpRequest = new XMLHttpRequest();
	
	httpRequest.onreadystatechange = function(){
		
		if(httpRequest.readyState === XMLHttpRequest.DONE) {
			if(httpRequest.status === 200) {
				var response = httpRequest.responseXML;
				var resultTag = document.getElementById("result");
				resultTag.innerHTML= "";
				var space = document.querySelector('#result');
				var definitions = response.getElementsByTagName('definition');
				
				var list = document.createElement('ol');
				space.appendChild(list);
				
				for(var i = 0; i< definitions.length; i++) {
					var heading = document.createElement('h2');
					var footer = document.createElement('p');
					var term = document.createTextNode(definitions[i].getAttribute("name"));
					var author = document.createTextNode(definitions[i].getAttribute("author"));
					heading.appendChild(term);
					footer.appendChild(author);
					
					var definition = document.createElement('li');
					var text = document.createTextNode(definitions[i].childNodes[0].nodeValue);
					definition.appendChild(text);
					list.appendChild(heading);
					list.appendChild(definition);
					list.appendChild(footer);
				}
			}else {
				alert('Error request');
			}
		}
	};
	httpRequest.open("GET", "request.php?q=&all=true")
	httpRequest.send();
}
