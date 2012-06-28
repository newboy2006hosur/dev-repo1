function Login(){

	var self = this;
	var objects = {
		'home' : new Home(),
		'about' : new About(),
		'features' : new Features(),
		'pricing' : new Pricing(),
		'contact' : new Contact(),
		'signup' : new Signup()
	};
	var currObject;
	var initialService = 'home';
	var currService;
	var options;
	
	this.activate = function(){
		try{
			$.getJSON('public/config/login.json', function(data){
				options = data;
				$('#login #banner #main-tabs').append('<ul class="menu"></ul>')
				$.each(data, function(key, value){
					$('#login #banner #main-tabs .menu').append('<li class="option '+value.value+'" data-option="'+value.value+'"><a href="/#'+value.value+'" rel="address:'+value.value+'">'+value.title+'</a></li>');
				});
				
				var query = document.location.href.split('#');
				if(query.length > 1)
					initialService = query[1].split('/')[query[1].split('/').length-1];
				
				$('#login #page-content').load(options[initialService].view_file,function(){
					currObject = objects[initialService];
					currObject.activate();
					currObject.listen();
					currService = initialService;
				});
			});
		}
		catch(e){
			//x_notifyError("index.js","activate",e);
		}
	};
	
	this.listen = function(){
		try{
			$.address.init(function(event){
			}).change(function(event){
				if(event.value == '/')
					self.triggerPageLoad('home',$('#login #page-content'));
				else
					self.triggerPageLoad(event.value.split('/')[event.value.split('/').length-1],$('#login #page-content'));
			});
		}
		catch(e){
			//x_notifyError("index.js","listen",e);
		}
	};
	
	this.cleanup = function(){
		try{
		}
		catch(e){
			//x_notifyError("index.js","cleanup",e);
		}
	};
	
	this.triggerPageLoad = function(serviceToCall,loadHere){
		try{
			if(serviceToCall != currService){
				$(loadHere).load(options[serviceToCall].view_file,function(){
					currObject.cleanup();
					currObject = objects[serviceToCall];
					currObject.activate();
					currObject.listen();
					currService = serviceToCall;
				});
			}
		}
		catch(e){
			//x_notifyError("index.js","triggerPageLoad",e);
		}
	};

};