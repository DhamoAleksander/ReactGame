var conta=0;
var max=0;
document.getElementById("insert").innerHTML = conta;
document.getElementById("record").innerHTML = max;
var timeleft = 10;
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft;
  timeleft -= 1;
  if(timeleft == 0){
	clearInterval(downloadTimer);
	document.getElementById("countdown").innerHTML = "TEMPO SCADUTO"
	alert("HAI FINITO IL TEMPO MI DISPIACE");
	conta=0;
	document.getElementById("insert").innerHTML = 0;
  }
}, 1000);

function premiVincente(){
	conta++;
	document.getElementById("insert").innerHTML = conta;
	if(conta<50){
		timeleft=10;
	}
	if(conta>=50){
		timeleft=7;
	}
	if(conta>=80){
		timeleft=5;
	}
	if(conta>=100){
		timeleft=4;
	}
	if(conta>=150){
		timeleft=3;
	}
	if(conta>=200){
		timeleft=1;
	}
	creaVincitore();
}
function premiPerdente(){
	if(conta>max){
		max=conta;
		document.getElementById("record").innerHTML = max-1;
	}
	
	alert("HAI CLICCATO IL PULSANTE SBAGLIATO");
	conta=0;
	timeleft=10;
	document.getElementById("insert").innerHTML = 0;
}


function creaVincitore(){
  if(conta<=50)
  {
	var win=document.getElementsByClassName('vincente');
	if (win.length==1)
	{
	win[0].classList.remove("vincente");
	}
	  
  }
  
  if(conta>50)
  {
	var win=document.getElementsByClassName('vincente');
	var lost=document.getElementsByClassName('perdente');
	if (win.length==1){
	  win[0].classList.remove("vincente");
	  lost[0].classList.remove("perdente");
	}
  
  
}

var bottoni=document.getElementsByClassName('bottone');

for(let i=0;i<bottoni.length;i++)
{
	bottoni[i].addEventListener('click',premiPerdente);
}
	if(conta<50)
	{
		var index=Math.floor(Math.random()*bottoni.length);
		bottoni[index].classList.add("vincente");
		bottoni[index].removeEventListener('click',premiPerdente);
		bottoni[index].addEventListener('click',premiVincente);
	}
	else if(conta>=50)
	{
		var index=Math.floor(Math.random()*bottoni.length);
		bottoni[index].classList.add("vincente");
		bottoni[index].removeEventListener('click',premiPerdente);
		bottoni[index].addEventListener('click',premiVincente);
        var idx=Math.floor(Math.random()*bottoni.length);
		bottoni[idx].classList.add("perdente");
	}
}

creaVincitore();