// function loadjson(file,callback) {
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json")
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState === 4 && xhr.status == "200"){
// 			callback(xhr.responseText);
// 		}
// 	};
// 	xhr.send(null);
// }
// loadjson('data.json',function(text){
// 	var data=JSON.parse(text); //serialised data
// 	console.log(data);
	// basic(data.details);
	// careerinfo(data.careerobjective);
	// education(data.educationalqualification);
	// skills(data.technicalskills);

// })


function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}

var newfile=loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basic(data.details);
	careerinfo(data.careerobjective);
	education(data.educationalqualification);
	skills(data.technicalskills);

})
















var child1 = document.querySelector('.child1');
function basic(det){

 	var image= document.createElement("img");
	image.src="profile1.PNG";
	child1.appendChild(image);

	var name=document.createElement("h4");
	name.textContent=det.name;
	child1.appendChild(name);

	var email = document.createElement('a');
	email.href="mailto:lokeshgudla5680@gmail.com";
	email.textContent=det.email;
	child1.appendChild(email);

	var num =document.createElement('h4');
	num.textContent=det.number;
	child1.appendChild(num);

	var add=document.createElement('h2');
	// add.li="bhimavaram";
	add.textContent="Address:";
	child1.appendChild(add);

	child1.appendChild(document.createElement("hr"));
	 var add1=document.createElement("p");
	 add1.textContent=det.address;
	 child1.appendChild(add1);	
}
var child2 = document.querySelector(".child2");
function careerinfo(info1){
	var heading = document.createElement("h2");
	heading.textContent="CareerObjective";
	child2.appendChild(heading);

	child2.appendChild(document.createElement('hr'));
	var p=document.createElement('p');
	p.textContent=info1.info;
	child2.appendChild(p);
}
function education(edu){
	var heading1 = document.querySelector('h2');
	heading1.textContent="Educational Qualification";
	child2.appendChild(heading1);

	child2.appendChild(document.createElement("hr"));

	var table1 =document.createElement("table");
	table1.border='1';
	child2.appendChild(table1);

	tabledata="";
	for(i=0;i<edu.length;i++){
		tabledata+='<tr><td>'+edu[i].institute+"</td><td>"+edu[i].Group+"</td><td>"+edu[i].passedoutyear+"</td><td>"+edu[i].percentage+"</td></tr>";
	}
	table1.innerHTML=tabledata;
}
function skills(skillinfo){
	var hd=document.createElement("h2");
	hd.textContent="Technical skills";
	child2.appendChild(hd);

	child2.appendChild(document.createElement("hr"));



	for(i=0;i<skillinfo.length;i++){
		var title = document.createElement("h4");
		title.textContent=skillinfo[i].title;
		child2.appendChild(title);

		var  skillul=document.createElement("ul");
		var skillli=document.createElement("li");
		skillli.textContent=skillinfo[i].info;
		skillul.appendChild(skillli);
		child2.appendChild(skillul);

	}
}