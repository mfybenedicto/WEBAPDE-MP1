 $(document).ready(function(){
		var string = window.location.href;
		var url = new URL(string);
        var userID = url.searchParams.get("userID");
		var albumID = url.searchParams.get("albumID");
        var defImage = 'album_thumbnail.png';
        var pageNum = 1;
        
     $.get("https://jsonplaceholder.typicode.com/users",function(users){
            $("#username").html(users[userID].name + "'s album");
        })
		//alert(albumID);
		//alert(userID);
        //alert("HELLO");
        var i = 0;
        var selector = albumID * 50;
            selector += 49;
        //load photos
        $.get("https://jsonplaceholder.typicode.com/photos", function(photo){
            
            //alert(selector);
            while(i < 10){
                //alert("hello")
                $('<img />').attr({
                    alt: photo[selector-i].title,
                    src: photo[selector-i].thumbnailUrl,
                    width: 300,
                    height: 300,
                    onclick: "alert('Title: ' + this.alt)"
                }).appendTo($('#albumContainer'));
                
                i++;
            }
        })
        
        
        
        $("#homeButton").click(function(){
            window.open("main.html" , "_self")
        })
        
        $("#viewMore").click(function(){
           pageNum++;
           if(pageNum > 5)
               {
                   alert("There are no more photos to show.");
               }
            else
                {
                    
                
           $.get("https://jsonplaceholder.typicode.com/photos",function(photo){
               console.log(photo);
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
               while(i < (10*pageNum)){
                //alert("hello")
                $('<img />').attr({
                    src: photo[selector-i].thumbnailUrl,
                    width: 300,
                    height: 300
                }).appendTo($('#albumContainer'));
                
                i++;
            }
           });
        }
       });
     
});

