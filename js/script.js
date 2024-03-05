        //#########################################
        // Fonction blur
        //######################################### 

        var Element = document.querySelectorAll('.imgal');
        
        Element.forEach(function(element){
            element.addEventListener("mouseover",function(event){
                bluradd(event.target);
            });

            element.addEventListener("mouseout",function(){
                blurremove();
            });
        });

        function bluradd(element){
            var allElement = document.querySelectorAll('body > *');
            allElement.forEach(function (elements){
                if(elements !== element){
                    elements.style.filter = 'blur(5px)';
        }});
            element.id.style.filter = 'none';
        }

        function blurremove(){
            var allElement = document.querySelectorAll('body > *');
            allElement.forEach(function (element){
                element.style.filter = 'none';
            });
        }

    