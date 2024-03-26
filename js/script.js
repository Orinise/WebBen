        //#########################################
        // Fonction mosaique
        //#########################################
        import * as fs from '/usr/include/linux/fs.h';

        var image = document.querySelectorAll('.imgal');

        image.forEach(function(element) {
          element.addEventListener("mouseover", function(){

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


        

        
    