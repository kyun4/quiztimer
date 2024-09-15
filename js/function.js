$(function(){
	
	var min = 0;
	var sec = 59;
	var ms = 100;	
	var x = '';
	var millis = 0;
	var counter = 99;
	var mstr = 0;
	var startTime = Date.now();
	
	var stopTime  = 0;
	var stimer = false;
	
	var tick = document.getElementById('tick');
	var tickbomb = document.getElementById('tickbomb');
	
	
	$('.startbutton').click(function(){
		var oras = $(this).attr('rel');
		
		if(stimer == false)
		{
			stimer = true;
			startTimer(oras);
			$('.stopbutton').css('display','block');
			$('.resetbutton').css('display','block');
			$('.startbutton').css('display','none');
		}
	});
	
	
		
		
	function startTimer(oras)
	{
		tick.play();
	
		switch(oras)
		{
			case '30S':sec=30; $('.timeselected').html('30 Seconds');break;
			case '1M':min=1;sec=0; $('.timeselected').html('1 Minute');break;
			case '2M':min=2;sec=0; $('.timeselected').html('2 Minutes');break;
			case '3M':min=3;sec=0; $('.timeselected').html('3 Minutes');break;
		}
		x = setInterval(timer,100);
		
		$(window).keypress(function(e){
		
			if(e.keyCode == 115 || e.keyCode == 83 || e.which == 115 || e.which == 83)
			{
				stop();
			}
			
			if(stopTime == 1)
			{
				if(e.keyCode == 13 || e.which == 13)
				{				
					x = setInterval(timer,100);		
					$('.stopbutton').css('display','block');
					$('.resumebutton').css('display','none');
					stopTime = 0;
				}
			}
			
			if(e.keyCode == 114 || e.keyCode == 82 || e.which == 114 || e.which == 82)
			{
				window.location.href = "";
			}
			
		});
	}
	
	$('.stopbutton').click(function(){
		stop();
	});
	
	function stop()
	{
		clearTimeout(x);
	
		sec = $('.sec').html();
		min = $('.min').html();
		ms = $('.ms').html();
		
		$('.stopbutton').css('display','none');
		$('.resumebutton').css('display','block');
		
		stopTime = 1;
		
		tick.pause();
	}
	
	$('.resumebutton').click(function(){	
		x = setInterval(timer,100);
		
		$('.stopbutton').css('display','block');
		$('.resumebutton').css('display','none');
	});
	
	$('.resetbutton').click(function(){
		window.location.href = "";
	});

	function bombfade()
	{
		$('.bombhere').fadeOut(200);
	}
	
	function timer()
	{

		var elapsedTime = startTime - Date.now();
		
		ms = (elapsedTime/1000).toFixed(2);
		
		var arr = new Array();
		arr = ms.toString().split('.');		
		millis = arr[1];
		
		if(parseInt(millis) >= 90)
		{
			sec--;
		}
		
		if(sec<0)
		{
			min--;
			sec = 59;
		}
		
		if(min == 0 && sec <= 10)
		{
			$('.timertext').css('color','red');
			$('.timertext').fadeIn(1000);
			$('.timertext').fadeOut(1000);
		}
		
		if(min == 0 && sec <= 2.5)
		{
			$('.bombhere').css('display','block');
		}
		
		
		if(min == 0 && sec <= 5)
		{
			if(ms <= -32.58)
			{
				tickbomb.play();
				
			}
		}
		
		
		if(min == 0 && sec == 0)
		{
			clearInterval(x);
			$('.opbuttons').css('display','none');
			$('.endReset').css('display','block');
			$('.ms').html('00');
			
			$('.timertext').stop().fadeIn();
			$('.timertext').stop().fadeOut();
			
			bomba = setTimeout(bombfade,500);
			
			tick.pause();
			
			
		}
		else
		{
			mstr = 99-millis;
			if(mstr.toString().length<2)
			{
				//$('.ms').html('0'+millis);
				$('.ms').html('0'+mstr);
			}
			else
			{
				//$('.ms').html(millis);
				$('.ms').html(mstr);
			}
	
		}
		
		
		if(sec.toString().length<2)
		{
			$('.sec').html('0'+sec);
		}
		else
		{
			$('.sec').html(sec);
		}
		
		if(min.toString().length<2)
		{
			$('.min').html('0'+min);
		}
		else
		{
			$('.min').html(min);
		}
	
		
		
	} // timer
	
	$(window).on('keypress',function(e){
		
		
			if(stimer == false)
			{
				stimer = true;
				
				if(e.keyCode == 49 || e.which == 49)
				{
					startTimer('1M');
					hideTimeButtons();
				}
				else if(e.keyCode == 50 || e.which == 50)
				{
					startTimer('2M');
					hideTimeButtons();
				}
				else if(e.keyCode == 51 || e.which == 51)
				{
					startTimer('3M');
					hideTimeButtons();
				}
				else if(e.keyCode == 48 || e.which == 48)
				{
					startTimer('30S');
					hideTimeButtons();
				}
				else
				{
					
					stimer = false;
				}
				
				
			}
	
	}); // end of window keypress
	
	function hideTimeButtons()
	{
		$('.stopbutton').css('display','block');
		$('.resetbutton').css('display','block');
		$('.startbutton').css('display','none');
	}
});