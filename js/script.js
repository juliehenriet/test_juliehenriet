function verify(message, magazine) {
    //-------------------on définie les variables dont on à besoin qui reprend les paramètres-----------------------------//
    var message = "pauvre petit chat qui  n'a rien demander";

    var magazine = "Qui n'a jamais entendu parler du JavaScript ?" +
        " Créé dans les années 90 en tant que simple langage de script, " +
        "JavaScript est désormais un des poids lourds du développement Web ! " +
        "Qui plus est, il se démocratise au sein d'autres environnements comme" +
        "les serveurs avec le célèbre Node.js, les applications pour smartphones et tablettes," +
        " avec PhoneGap d'Adobe, les applications pour Windows 8, mais aussi les logiciels multiplateformes.";

    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "o", "u", "v", "w", "x", "y", "z", " "];
    var counterlmes;
    var counterlmag;
    //---------------------------on transforme la chaine de caractère en tableau ------------------------------------//


    var tabmessage = Array.from(message);
    var tabmagazine = Array.from(magazine);
    console.log(tabmessage, tabmagazine);

    //----------------------------vérifie les lettres qui correspondent entre le message et le magazine----------------//

    var compare = tabmessage.every((string) => tabmagazine.includes(string));

    //----------------------------envoie true si les lettres du message existe dans le magazine sinon false-------------//

    if (compare === true) {

        console.log(true);
        //------On parcours le tableaux alphabet pour après pouvoir compter les lettres identiques (s'il y a plusieurs p par exemple)----//


        for (var i = 0; i <= alphabet.length; i++) {

            counterlmes = 0;
            counterlmag = 0;

            for (var j = 0; j <= tabmessage.length; j++) {

                if (alphabet[i] === tabmessage[j]) {
                    console.log("bonjour");
                    counterlmes++;
                    console.log(counterlmes, alphabet[i]);
                } else {
                    console.log("aurevoir");
                    //  console.log(alphabet[i]);
                }

            }


            for (var k = 0; k <= tabmagazine.length; k++) {
                if (alphabet[i] === tabmagazine[k]) {
                    console.log("bonjour");
                    counterlmag++;
                    console.log(counterlmag, alphabet[i]);
                } else {
                    console.log("aurevoir");
                    //  console.log(alphabet[i]);
                }
            }

            //------------on compare les deux counter, si true la boucle continue si false elle s'arrête-------------//

            if (counterlmes <= counterlmag) {
                console.log("si counterLmes est inférieur ou égal à ", true);
                continue;
            } else {
                console.log("sinon retourne false ", false);
                break;
            }
        }


    } else {
        console.log(false);

    }

}

//---------------------------------------------------on appel la fonction--------------------------------------------//
verify();
//---------------------------------------------------fin de l'exercice------------------------------------------------//