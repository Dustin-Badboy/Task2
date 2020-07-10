 function loadjson(file,callback) {
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json")
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState === 4 && xhr.status == "200"){
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}
loadjson('data.json',function(text){
	var data=JSON.parse(text); //serialised data
	console.log(data);
	first(data.data);
	second(data.data);
})


var child1 = document.querySelector(".child1")
function first(lok){
	var image= document.createElement("img");
	image.src="images/colorprofile.jpg";
	child1.appendChild(image);

	var name=document.createElement("h3");
	name.textContent=lok.name;
	child1.appendChild(name);

	var email=document.createElement("h4");
	email.textContent=lok.email;
	child1.appendChild(email); 

	var submit=document.createElement("input")
	submit.type="submit";
	submit.value="Static";
	submit.setAttribute('id','submit')
	submit.setAttribute('onclick','document.location="task1.html"')
	child1.appendChild(submit);
	}

var child2 = document.querySelector(".child2")
function second(loke){
	var image= document.createElement("img");
	image.src="images/colorprofile.jpg";
	child2.appendChild(image);

	var name=document.createElement("h3");
	name.textContent=loke.name;
	child2.appendChild(name);

	var email=document.createElement("h4");
	email.textContent=loke.email;
	child2.appendChild(email); 

	var submit=document.createElement("input")
	submit.type="submit";
	submit.value="Dynamic";
	submit.setAttribute('id','submit')
	submit.setAttribute('onclick','document.location="project/index.html"')
	child2.appendChild(submit);
}
 
function lokesh(){

}