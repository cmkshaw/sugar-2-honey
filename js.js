// JavaScript Document

function calculate()
{
	//getting values from form (text input and DDL)
	var value1 = document.getElementById('x').value;
	var measure = document.getElementById('equation').value;
	
	//if the value is null, empty or not a number - alert the user
	if (value1==null || value1=="" || isNaN(value1))
	{
	  alert("Please enter a number");
	  return false;
	}

	//if the user chooses cups
	if (measure == "cups")
	{
		cupstohoney(value1);
	}

	//otherwise, tablespoons!
	else if (measure == "tablespoons")
	{	
		tablespoonstohoney(value1);
	}
	
	//Multiply by 158ml, insert calculation into result div
	function cupstohoney(a,b)
	{ 	
		var result = a*158;
		document.getElementById('result').innerHTML= result;
	}
	
	//Multiply by 10
	function tablespoonstohoney(a,b)
	{ 
		var result = a*10;
		document.getElementById('result').innerHTML= result;
	}


	//global variable result, created to use this value in the switch statement
	var result = document.getElementById('result').innerHTML

	//Function creating element IMG
	function show_image(src) 
	{
    var img = document.createElement("img");
    img.src = src;
    document.body.appendChild(img);
	}

	//Will define how many honeypots display
	function honeypot(a)
	{
	  for(x=0; x<a; x++ )
	  {
	    show_image('honeypot.jpg');
	  }

	}

	//Switch statement for the possible honeypot image results
	switch(true)
	{
	  case(result < 1):
	    honeypot(0);
	  break;
	  case(result < 11):
	    honeypot(1);
	  break;
	  case(result > 10 && result < 29):
	    honeypot(2);
	  break;
	  case(result > 28 && result < 39):
	    honeypot(3);
	  break;
	  case(result > 39 && result < 50):
	    honeypot(4);
	    break;
	    case(result > 49):
	    honeypot(5);
	    break;
	  default:
	    alert(result);
	  break;
	}
	

}

//Reset button!
function reset(){
   window.location.reload();
}



