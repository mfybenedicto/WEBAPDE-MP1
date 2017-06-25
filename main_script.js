    $(document).ready(function(){
	
		var pagenum = 1;
		var defImage = "default_prof.jpg";
        
            
            $.get("https://jsonplaceholder.typicode.com/users",function(users){
		
			$.get("https://jsonplaceholder.typicode.com/posts",function(obj){
               console.log(obj.length);
               for(var i=(obj.length-1)-(10*(pagenum-1));i>=(obj.length-10)-(10*(pagenum-1));i--){
					console.log(i)
                   var newDiv = $("<div>"); 
				   var space = $("<br>");
				  var userid = parseInt(obj[i].userId)
				  
				    var username = document.createElement("a");
			username.append(users[userid-1].name)
			$(username).attr('href', 'profile.html?userId='+(userid-1));
			
				   newDiv.addClass()
                   newDiv.html("<br>"+obj[i].title+"<br>"+obj[i].body);
				   $("#postsDiv").append(username);
				   $("#postsDiv").append("<br>"); // di ko nilagay space cuz it doesnt work for some reason
				   $("#postsDiv").append("<img src='" + defImage + "' style='width:150;height:130;position:relative;'>");
                   $("#postsDiv").append(newDiv);
                   $("#postsDiv").append(space);
              //     or $("#container").append($("<div>"+obj[i].title + "<div>"));
                   
				}
			});
			   
       $("#viewMore").click(function(){
           pagenum++;
           $.get("https://jsonplaceholder.typicode.com/posts",function(obj){
               console.log(obj);
			   /*
			   obj.length = 99;
			   current objlength = objlength-(10*(pagenum-1)) // if nagmove ng page
			   i = objlength; //initial
			   hanggang saan  = currentobjlength - 10;
			     i = ob
				 for(var i=obj.length;i<obj.length-(10*pagenum);i--){
                   var newDiv = $("<div>"); 
				   var space = $("<br>");
                   newDiv.html(obj[i].title+obj[i].body);
                   $("#postDiv").append(newDiv);
                   $("#postDiv").append(space);
              //     or $("#container").append($("<div>"+obj[i].title + "<div>"));
			   */
               for(var i=(obj.length-1)-(10*(pagenum-1));i>=(obj.length-10)-(10*(pagenum-1));i--){
					console.log(i)
                   var newDiv = $("<div>"); 
				   var space = $("<br>");
				    var userid = parseInt(obj[i].userId)
				   newDiv.addClass()
                 
			var username = document.createElement("a");
			username.append(users[userid-1].name)
			$(username).attr('href', 'profile.html?userId='+(userid-1));
				   newDiv.addClass()
                   newDiv.html("<br>"+obj[i].title+"<br>"+obj[i].body);
				   $("#postsDiv").append(username);
                   $("#postsDiv").append("<br>");
				   $("#postsDiv").append("<img src='" + defImage + "' style='width:150;height:130;position:relative;'>");
                   $("#postsDiv").append(newDiv);
                   $("#postsDiv").append(space);
			    }
           });
       });
	   
    })
	});