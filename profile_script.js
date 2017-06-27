$(document).ready(function(){
		var string = window.location.href;
		var url = new URL(string);
		var userID = url.searchParams.get("userId");
        var defImage = 'album_thumbnail.png'
		//alert(userID);
    
        //load user details
    
        //load posts
        $.get("https://jsonplaceholder.typicode.com/users",function(users){
            //load user's name
            var newDiv = $("<div>"); 
            $("#username").html(users[userID].name);
            $(newDiv).html("Username: " + users[userID].username)
            $("#details").append(newDiv);
            var newDiv = $("<div>"); 
            $(newDiv).html("Email: " + users[userID].email)
            $("#details").append(newDiv);
            var newDiv = $("<div>"); 
            $(newDiv).html("<b>Address: </b>" + "<br>" + "Street: " + users[userID].address.street + "<br>" + "Suite: " + users[userID].address.suite + "<br>" + "City: " + users[userID].address.city + "<br>" + "Zipcode: " + users[userID].address.zipcode + "<br>")
            $("#details").append(newDiv);
            var newDiv = $("<div>"); 
            $(newDiv).html("phone: " + users[userID].phone)
            $("#details").append(newDiv);
            var newDiv = $("<div>"); 
            $(newDiv).html("website: " + users[userID].website)
            $("#details").append(newDiv);
            var newDiv = $("<div>"); 
            $(newDiv).html("<b> Company: </b>" + "<br>" + "Name: " + users[userID].company.name + "<br>" + "catchPhrase: " + users[userID].company.catchPhrase + "<br>" + "BS: " + users[userID].company.bs + "<br>")
            $("#details").append(newDiv);
            var newDiv = $("<div>"); 
            $.get("https://jsonplaceholder.typicode.com/posts",function(obj){
            var i = 0;
            var selector = userID * 10;
                selector += 9 ;
            while(i < 10){
                
				var space = $("<br>");
                var newDiv = $("<div>");
                newDiv.html("<br>"+obj[(selector-i)].title+"<br>"+obj[(selector-i)].body);
                // di ko nilagay space cuz it doesnt work for some reason
                
                $("#postsDiv").append(newDiv);
                $("#postsDiv").append(space);
                
                i++;
            }
        });
        
        });
        //load album
        $.get("https://jsonplaceholder.typicode.com/albums", function(albums){
            var i = 0;
            var selector = userID * 10;
                selector += 9;
            
            while(i < 10){
                var titleSrc = albums[selector-i].title;
                
                $('<img />').attr({
                    src: defImage,
                    width: 60,
                    height: 60,
                    title: titleSrc
                }).appendTo($('<a/>').attr({
                    href: 'album.html?albumID=' + ((albums[selector-i].id)-1) + '&userID=' + userID
                }).appendTo($('#thumbnails')));
                
                i++;
            }
                
        });
        //load photos
        $("#homeButton").click(function(){
            window.open("main.html" , "_self")
        })
    
        $("#viewPhotos").click(function(){
          
            /*window.open()
            $.get("https://jsonplaceholder.typicode.com/photos", function(photo){
            while(i > 50*(100-pageNum)){
                var titleSrc = photo[i].title;
                
                $('<img />').attr({
                    src: photo[i].thumbnailUrl,
                    width: 300,
                    height: 300,
                    title: titleSrc
                }).appendTo($('#photoDiv'));
                
                i--;
            }
            
             */     
        })
		})