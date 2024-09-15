$(document).ready(function(){
	
	$('.stopbutton').click(function(){
		
		createCookie('time1','burat',1);
		
		
	});
	
	$('.resumebutton').click(function(){
		
		var valuehere = readCookie('test1');
		alert(valuehere);
		
	});
	
	function createCookie(xvar,xval,day)
	{
		var expires = "";
		
		if(day)
		{
			var date = new Date();
			var d=date.setTime(date.getTime() + day * 60 * 60 * 1000);
			expires = ";expires="+date.toGMTString();
		}
		document.cookie = encodeURIComponent(xvar) + "=" + encodeURIComponent(xval) + expires + ";path=/";
	}
	
	function readCookie(xvar)
	{
		var nameEQ = encodeURIComponent(xvar) + "=";
		var ca = document.cookie.split(';');
		
		for(var i=0;i<ca.length;i++)
		{
			var c = ca[i];
			
			while(c.charAt(0) === '')
			c = c.substring(1, c.length);
				
			if(c.indexOf(nameEQ) === 0)
			return decodeURIComponent(c.substring(nameEQ.length, c.length));
		}
		
		return null;
	}
	
	
});

	
	


