        var Element = document.querySelectorAll('.galerie');
        var test = document.getElementById('test');

        if(test){
            test.textContent = 'Ceci est un test';
        }
        
        Element.forEach(function(element){
            element.addEventListener("mouseover",function(){
                test.textContent = ("ceci est un test");
            });

            element.addEventListener("mouseout",function(){
                blurremove();
            });
        });

        function bluradd(){
            var allElement = document.querySelectorAll('body > *');
            allElement.forEach(function (element){
                element.classList.add('blur');
            });
        }

        function blurremove(){
            var allElement = document.querySelectorAll('body > *');
            allElement.forEach(function (element){
                element.classList.remove('blur');
            });
        }

    