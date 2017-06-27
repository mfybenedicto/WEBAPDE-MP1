 $(document).ready(function(){
		var string = window.location.href;
		var url = new URL(string);
        var defImage = 'album_thumbnail.png';
        var pageNum = 1;
        
     
        var i = 4999;
        
        //load photos
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
        })
        
        
        
        $("#homeButton").click(function(){
            window.open("main.html" , "_self")
        })
     
     
        
        $("#viewMore").click(function(){
           pageNum++;
            alert(pageNum)
           if(pageNum > 100)
               {
                   alert("There are no more photos to show.");
               }
            else
                {
                   $.get("https://jsonplaceholder.typicode.com/photos", function(photo){
            while(i > 50*(100-pageNum)){
                //alert(i);
                var titleSrc = photo[i].title;
                
                $('<img />').attr({
                    src: photo[i].thumbnailUrl,
                    width: 300,
                    height: 300,
                    title: titleSrc
                }).appendTo($('#photoDiv'));
                
                i--;
            }
        })
        }
           
     
        });
 });

