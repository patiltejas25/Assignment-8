/*eslint-env browser*/

var errorMessage = "Required Field";

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

var employees = [
		["Sally Smith", "Quality Assurance", 3423],
		["Mark Martin", "VP Sales", 3346],
		["John Johnson", "Marketing", 3232],
		["Mark Smith", "Tester", 3399],
		["John Martin", "Developer", 3456],
]

function init(){
	displayEmp();
	$("submit").addEventListener("click", validateAndDisplay);
}

function createErrorElement(){
	var errorElement = document.createElement('SPAN');
	errorElement.setAttribute("class","error");
	errorElement.innerHTML = errorMessage;
	return errorElement;
}

function validateAndDisplay(){

	var name = $("name").value;
	var title = $("title").value;
	var ext = $("extension").value;

	if(!(name)){
		 if($("nameDiv").lastElementChild.innerHTML != errorMessage){
			$("nameDiv").appendChild(createErrorElement());
		 }
	}else{
		 if($("nameDiv").childNodes.length == 6){
			$("nameDiv").removeChild($("nameDiv").childNodes[5]);
		 }
	}

	if(!title){
		 if($("titleDiv").lastElementChild.innerHTML != errorMessage){
			$("titleDiv").appendChild(createErrorElement());
		 }
	}else{
		if($("titleDiv").childNodes.length == 6){
			$("titleDiv").removeChild($("titleDiv").childNodes[5]);
		}
	}

	if(!ext){
		 if($("extensionDiv").lastElementChild.innerHTML != errorMessage){
			 $("extensionDiv").appendChild(createErrorElement());
		 }
	}else{
		if($("extensionDiv").childNodes.length >= 6){
			$("extensionDiv").removeChild($("extensionDiv").childNodes[5]);
		}
		
	}

	if (name && title && ext){
		employees.push([name, title, ext]);
	}

	displayEmp();
}

function displayEmp() {
	var html = "<tr> <td>Name</td> <td>Title</td> <td>Extension</td> <td></td> </tr></<tr>";
	for (let i = 0; i < employees.length; i++) {
		var employee = employees[i];
		html = html + '<tr><td>' + employee[0] + '</td><td>' + employee[1] + '</td><td>' + employee[2] 
		+ '</td><td><button class="del-btn" onclick="deleteEmp(' + i + ')">Delete</button></td></tr>';
	}

	$("empTable").innerHTML = html;
	$("noOfEmp").innerHTML = employees.length;
}



function deleteEmp(n) {
	employees.splice(n, 1);
	displayEmp();
}

window.addEventListener("load",init);

