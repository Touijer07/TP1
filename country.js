// 2 variables globales à modifier dans l'écouteur window.onload
var countries = {
    "names": [], // ["Afghanistan", ...]
    "codes": {}, // {"Afghanistan":"AF", ...}
    "flags": {} // {"Afghanistan":"data:image...", ...}
};

//var continents = []; // [{"Asia":["Afghanistan","Armenia",...]}, ...]


window.addEventListener("load", (event) => {
    // Q1 Extraction des noms de pays à partir du tableau HTML
    
        //Extraction des noms de pays
        let countryNames = document.querySelectorAll("table tr td:nth-child(1)");
        //utiliser Array.from pour convertir nodelist en tableau  , puis utiliser map
        countries.names = Array.from(countryNames).map(td =>  td.textContent.trim());
    
    console.log(countries.names);

    // Q2 Extraction des codes de pays du fichier country_codes.json
    fetch('country_codes.json', {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((country_codes) => {
            console.log('Success:', country_codes);
            //parcourir chaque objet de country code et l'ajouter à countries code
            country_codes.forEach(function(country_obj){
                //on suppose que chaque objet à un seul couple cle valeur
                for (const [key,value ]of Object.entries(country_obj))
                  countries.codes[key] = value ;
            })
            // [ ..., {"France":"FR"}, ...] --> {..., "France":"FR", ...}
            console.log(countries.codes);
            return countries.codes;
            
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    // Q3 Extraction des continents de pays à partir du tableau country_continents (importé de country_continents.js) 
    // A COMPLETER <---
    // [{"country":"Afghanistan","continent":"Asia"}, ...] --> [{"Asia":["Afghanistan","Armenia",...]}, ...]
    // --> A COMPLETER
    const continents = {};//on creer un objet qui va stocker les cotinents et les pays
    //on va parcourir le tableau country_continant pour extraire chaque element country_continent

    country_continents.forEach(element => {
        const continent = element.continent;
        const country = element.country ;
        if(!continents[continent]){
            continents[continent]=[];
        }//ajouter le pays au continent correspondant
        continents[continent].push(country);
        
    });
    const result =Object.keys(continents).map(continent =>{
        return {[continent]: continents[continent]};
    });
    console.log(result);

    // Q4 Extraction des drapeaux de pays à partir de la constante country_flags (importée de country_flags.js) 
    // A COMPLETER <---
    // [ ..., {"country":"France","flag_base64":"data:..."}, ...] --> {..., "France":"data:...", ...}

    const flags = {};//on va creer l'objet qui va stocker les pays et leurs flags
    //on parcour country_flags et on associe pour chaque pays son flag
    country_flags.forEach((element) =>{
        const country = element.country;
        const flag = element.flag ;

        flags[country]= flags;
    })
    country.flags = flags;
    console.log(countries.flags);

    // Q5 Mise en forme CSS
    const cellule = document.querySelectorAll(" th ,  td ");
    cellule.forEach(cell => {
        cell.style.textAlign ="center";
        cell.style.fontSize = "75%";
    })
});



let handleSelectors = function() {
    // Q6 Gestion du menu
    // A COMPLETER <---
    // --> A COMPLETER
}();


let handleRadios = function() {
    // Q7 gestion des boutons radio
    // A COMPLETER <---
    // --> A COMPLETER
}();

let handleHeader = function f() {
    let tds = document.querySelectorAll("td");
    tds.forEach(function(td) {
        td.addEventListener("click", function(e) {
            let country_name = e.target.id;
            if (country_name) {
                fetch('get_country_features.php', {
                        method: 'POST',
                        body: new URLSearchParams("country_name=" + country_name),
                    })
                    .then((response) => response.json())
                    .then((country) => {
                        console.log('Success:', country);
                        // Q8 clic sur cellule
                        // A COMPLETER <---
                        // --> A COMPLETER
                        return country;
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            }
        });
    });
}();