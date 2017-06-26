$(document).ready(function(){
		var string = window.location.href;
		var url = new URL(string);
		var userID = url.searchParams.get("userId");
        var defImage = 'album_thumbnail.png';
		alert(userID);
    
        //load posts
        $.get("https://jsonplaceholder.typicode.com/users",function(users){
        $.get("https://jsonplaceholder.typicode.com/posts",function(obj){
            var i = 0;
            var selector = userID * 10;
                selector += 9 ;
            while(i < 10){
                var newDiv = $("<div>"); 
				var space = $("<br>");
				  
				var username = document.createElement("a");
                username.append(users[userID].name)
                $(username).attr('href', 'profile.html?userId='+(userID));
                
                newDiv.html("<br>"+obj[(selector-i)].title+"<br>"+obj[(selector-i)].body);
                $("#postsDiv").append(username);
                $("#postsDiv").append("<br>"); // di ko nilagay space cuz it doesnt work for some reason
                
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
                    href: 'album.html?albumID=' + ((albums[selector-i].id)-1)
                }).appendTo($('#thumbnails')));
                
                i++;
            }
                
        });
        //load photos
		})