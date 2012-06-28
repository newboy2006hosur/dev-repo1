<?php

	$secretKey = "youcanneverhackme";
	function encryptCookie($key,$value){
		$_SESSION[sha1($key).sha1($secretKey)] = sha1($value).sha1($secretKey);
	}
	
	function checkCookie($key,$value){
		return ($_session[sha1($key).sha1($secretKey)] == sha1($value).sha1($secretKey));
	}

?>