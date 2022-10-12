let fetchUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

/* fetchUrl(fetchUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (responseJson) {
        console.log(responseJson);
    });
 */

fetch(fetchUrl)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
