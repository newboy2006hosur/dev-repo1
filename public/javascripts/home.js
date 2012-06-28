function Home(){

	var self = this;
	var testing = 'goku';
	this.activate = function(){
		try{
			$('#home #logins').createLogin('one-line',{title:"none",label:true,cancel:true},'uid');
			$('#home #logins').submitLogin();
			$('#home #logins').displayCustomError('This is a error msg.. !!');
		}
		catch(e){
			//x_notifyError("home.js","activate",e);
		}
	};
	
	this.call = function(){alert(testing);}
	
	this.listen = function(){
		try{
		}
		catch(e){
			//x_notifyError("home.js","listen",e);
		}
	};
	
	this.cleanup = function(){
		try{
		}
		catch(e){
			//x_notifyError("home.js","cleanup",e);
		}
	};

};