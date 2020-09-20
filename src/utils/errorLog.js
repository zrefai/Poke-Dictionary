import stringFormatter from "./stringFormatter";
export default function errorLog(error, setError, key, place, URL) {
  if (error.response) {
    console.log(
      "The request was made and the server responded with a status code"
    );
    console.log("ERROR STATUS: ", error.response.status);
    console.log("Key:", stringFormatter(key, "-"));
    console.log("URL: ", URL);
    console.log("Location: ", place);
    setError(error.response.status);
  } else if (error.request) {
    console.log("The request was made but no response was received");
    console.log("ERROR REQUEST:", error.request);
    console.log("Key:", stringFormatter(key, "-"));
    console.log("URL: ", URL);
    console.log("Location: ", place);
  } else {
    if (error.message === undefined) return;
    console.log(
      "Something happened in setting up the request, or it was canceled."
    );
    console.log("ERROR MESSAGE: ", error);
    console.log("Key:", stringFormatter(key, "-"));
    console.log("URL: ", URL);
    console.log("Location: ", place);
  }
  console.log("\n");
}
