        //#########################################
        // Fonction mosaique
        //#########################################
        // import * as fs from 'fs';

        var image = document.querySelectorAll('.container a');
        // document.getElementById('test').innerText = "ahjajajajajjaajjaj";

        function changertitre(){
          document.getElementById('ttt').innerText = "ahjajajajajjaajjaj";
        }

        image.forEach(function(element) {
          element.addEventListener("click", function(){
            if (element.id === "Sculpture"){
              changertitre();

              var nouvellepage = window.open("./html/mosaique.html");

              nouvellepage.addEventListener("load", function(){
                  var titre = document.getElementById("ttt");
                  if (titre){
                    nouvellepage.alert(titre.tagName);
                    titre.innerText = "Ca marche !!!!!!!";
                  } else{
                    console.log("titre marche pas");
                  }});
            }
        })});



        

        
    