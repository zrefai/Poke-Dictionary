export function errorLog(error, setError, name = "", masterListFlag = 0) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(
      "The request was made and the server responded with a status code"
    );
    console.log(
      `${masterListFlag ? "ERROR @MASTER_LIST" : `ERROR @POKEMON_${name}`}`
    );
    console.log(error.response.status);
    setError(error.response.status);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log("The request was made but no response was received");
    console.log(
      `${masterListFlag ? "ERROR @MASTER_LIST" : `ERROR @POKEMON_${name}`}`
    );
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Something happened in setting up the request");
    console.log(
      `${masterListFlag ? "ERROR @MASTER_LIST" : `ERROR @POKEMON_${name}`}`
    );
    console.log("Error", error.message);
  }
}
