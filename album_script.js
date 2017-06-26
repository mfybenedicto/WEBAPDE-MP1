 $(document).ready(function(){
		var string = window.location.href;
		var url = new URL(string);
        var userID = url.searchParams.get("userID");
		var albumID = url.searchParams.get("albumID");
        var defImage = 'album_thumbnail.png';
        var pageNum = 1;
		//alert(albumID);
		//alert(userID);
        //alert("HELLO");

        //load photos
        $.get("https://jsonplaceholder.typicode.com/photos", function(photo){
            var i = 0;
            var selector = albumID * 50;
                selector += 49;
            alert(selector);
            while(i < 10){
                alert("hello")
                $('<img />').attr({
                    src: photo[selector-i].thumbnailUrl,
                    width: 300,
                    height: 300
                }).appendTo($('#albumContainer'));
                
                i++;
            }
        })
     
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
     
});