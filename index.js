function method()
		{
			var x = document.getElementById("accessToken").value;
	        var xmlhttp = new XMLHttpRequest();
	        xmlhttp.open("POST", "/Jasmine", true);
	        xmlhttp.onreadystatechange = function() 
	        {
	            if (xmlhttp.readyState == 4) 
	            {
	                if (xmlhttp.status == 200)
	                {
	                    document.getElementById("id").innerHTML = xmlhttp.responseText;
	                }
	                else
	                {
	                    alert("Something is wrong !!");
	                }
	            }
	        };  
	       xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
	       xmlhttp.send("accessToken="+x);
		}
