 $(document).ready(function(){
		var string = window.location.href;
		var url = new URL(string);
        var defImage = 'album_thumbnail.png';
        var pageNum = 1;
        
     
        var i = 99;
        
        //load photos
        $.get("https://jsonplaceholder.typicode.com/albums", function(album){
            
            while(i > 10*(10-pageNum)){
                var titleSrc = album[i].title;
                
                $('<img />').attr({
                    src: defImage,
                    width: 60,
                    height: 60,
                    title: titleSrc
                }).appendTo($('<a/>').attr({
                    href: 'album.html?albumID=' + ((album[i].id)-1) + '&userID=' + ((album[i].userId)-1)
                }).appendTo($('#albumDiv')));
                
                i--;
            }
        })
        
        
        
        $("#homeButton").click(function(){
            window.open("main.html" , "_self")
        })
     
     
        
        $("#viewMore").click(function(){
           pageNum++;
           if(pageNum > 10)
               {
                   alert("There are no more albums to show.");
               }
            else
                {
                   $.get("https://jsonplaceholder.typicode.com/albums", function(album){
            
            while(i > 10*(10-pageNum)){
                var titleSrc = album[i].title;
                
                $('<img />').attr({
                    src: defImage,
                    width: 60,
                    height: 60,
                    title: titleSrc
                }).appendTo($('<a/>').attr({
                    href: 'album.html?albumID=' + ((album[i].id)-1) + '&userID=' + ((album[i].userId)-1)
                }).appendTo($('#albumDiv')));
                
                i--;
            }
        })
        }
           
     
        });
 });

