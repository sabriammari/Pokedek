// Définit une fonction nommée "chargePokemon" qui prend un paramètre nommé "myPokemon".
function chargePokemon(myPokemon){

    // Définit une variable nommée "requestURL" contenant l'URL de l'API Pokebuild, qui permet d'obtenir des informations sur un Pokémon spécifique.
    //Le nom du Pokémon est ajouté à l'URL en tant que paramètre.
    let requestURL = 'https://pokebuildapi.fr/api/v1/pokemon/'+myPokemon;

    // Crée une nouvelle instance de l'objet XMLHttpRequest, qui est utilisé pour envoyer des requêtes HTTP asynchrones au serveur.
    let request = new XMLHttpRequest();
    
    // Ouvre une connexion HTTP avec la méthode "GET" et l'URL de l'API Pokebuild.
    request.open('GET', requestURL);
    
    // Définit le type de réponse attendue comme étant JSON.
    request.responseType = 'json';

    // Envoie la requête HTTP.
    request.send();
    
    // Définit une fonction à exécuter lorsque la réponse de la requête est chargée.
    request.onload = function() {

    //Stocke la réponse JSON de la requête dans une variable nommée "pokemons" et l'affiche dans la console.
    let pokemons = request.response;
    console.log(pokemons);
    
        // Met à jour les éléments HTML spécifiés avec les données de réponse JSON.
        $('#main-screen').css({'background-image':"url("+pokemons.image+")"});
        $('#name-screen').text(pokemons.name);
        $('#type-screen').text(pokemons.apiTypes[0].name);
        $('#id-screen').text("#"+pokemons.pokedexId);
        $("#about-screen").html("HP :"+pokemons.stats.HP+"<br>Attaque :"+pokemons.stats.attack+"<br>Défense :"+pokemons.stats.defense+"<br>Attaque Spéciale :"+pokemons.stats.special_attack+"<br>Défense spéciale :"+pokemons.stats.special_defense+"<br>Vitesse :"+pokemons.stats.speed);
    }
    
}

//Attache une fonction anonyme à l'événement "ready" de l'objet document.
$(document).ready(function(){
    // Attache une fonction anonyme à l'événement "input" de l'élément HTML avec l'ID "name-input".
    $('#name-input').on('input',function(e){

        // Stocke la valeur de l'élément "name-input" dans une variable nommée "myPokemon",
        //l'affiche dans la console, puis appelle la fonction "chargePokemon" avec le nom du Pokémon en tant que paramètre.
        //Cette fonction sera exécutée à chaque fois que l'utilisateur saisit un nouveau nom de Pokémon dans l'élément "name-input".
        let myPokemon = $(this).val();
        console.log(myPokemon);
        chargePokemon(myPokemon);
       });
});