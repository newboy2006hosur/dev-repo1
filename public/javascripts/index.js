// Start point of execution
$(document).ready(function(){
	try
	{
		var objects = {
			'login' : new Login()
		};
		var currObj;
		var currService = 'login';
		$('#page').css('min-height',document.body.clientHeight);
		
		//Check if user is logged in
		if(false)//x_checkCookie('_loggedin','yes'))
		{
			$('#page').load('/public/views/home/home.html',function(){
				$('#page .content-wrapper').height(document.body.clientHeight-($('#page #header').height()+20));
				alert(document.body.clientHeight);
				$('#page .content-wrapper').width(document.body.clientWidth);
		
				//$('#page #content-box').append
			});
		}
		else
		{
			$('#page').load('/public/views/login/login.html',function(){
				currObj = objects[currService];
				currObj.activate();
				currObj.listen();
			});
		}
	}
	catch(e)
	{
		//x_notifyError("signup.js","ready",e);
	}
	
});

