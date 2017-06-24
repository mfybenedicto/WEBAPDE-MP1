$(document).ready(function(){
		var string = window.location.href;
		var url = new URL(string);
		var userID = url.searchParams.get("userId");
		alert(userID);
		})