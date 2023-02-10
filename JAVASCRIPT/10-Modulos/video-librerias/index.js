// Instalar axios para hacer llamadas a servicios externos
import axios from "axios";

axios
  .get("https://pokeapi.co/api/v2/pokemon/charmander")
  .then(function (response) {
    // handle success
    console.log("Success!!!");
    console.log(response.data); // usando el .data al hacer la solicitud nos muestra la informacion solo de data
    // que es mas resumida y la que nos interesa ver ahora
  })
  .catch(function (error) {
    // handle error
    console.log("Error!!!");
    console.log(error);
  });
