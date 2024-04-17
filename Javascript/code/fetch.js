async function logMovies() {
  const response = await fetch("http://example.com/movies.json");
  const movies = await response.json();
  console.log(movies);
}

async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST", // GET, POST, DELETE, PUT, PATCH, etc
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, error
    referrerPolicy: "no-referrer", // // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // Body data type must be match "Content-Type header"
  });

  return response.json();
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
