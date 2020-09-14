import capitalize from "./capitalize";
export default function errorLog(error, setError, key, masterListFlag = 0) {
  if (error.response) {
    console.log(
      "The request was made and the server responded with a status code"
    );
    console.log(`${key}`);
    console.log(error.response.status);
    setError(error.response.status);
  } else if (error.request) {
    console.log("The request was made but no response was received");
    console.log(`${key}`);
    console.log(error.request);
  } else {
    console.log("Something happened in setting up the request");
    console.log(`${key}`);
    console.log("Error", error.message);
  }
}
