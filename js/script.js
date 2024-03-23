        //#########################################
        // Fonction mosaique
        //######################################### 
        
        // import * as fs from 'fs';
        var image = document.querySelectorAll('.imgal');

        image.forEach(function(element) {
          element.addEventListener("mouseover", function(){
            alert("dossier");

            const dossier = "../image/Knit";
            var nb_element = 0;

            fs.readdir(dossier, (err, fichiers) => {
                if (err) {
                  alert('Erreur lors de la lecture du dossier :' + err);
                  return;
                }
                alert('Nombre d\'éléments dans le dossier :' + fichiers.length);
                nb_element = fichiers.length;
              });
          });
          
        });


        

        
    