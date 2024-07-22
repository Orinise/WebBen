if [ "$#" -ne 1 ]
then
    echo "Le script prend 1 unique paramètre"
    exit 1
fi

echo "" > sortie.txt

while IFS= read -r file; do
    echo "<a href=\"../$1/$file\"><img src=\"../$1/$file\" alt=\"\"></a>" >> sortie.txt
done < <(find "$1" -type f \( -name "*.jpg" -o -name "*.png" \) -printf "%P\n")
