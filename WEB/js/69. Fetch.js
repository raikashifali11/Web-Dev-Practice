// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options})
//         fetch(url, {method: "GET"/"POST"/"PUT"/"DELETE"})

fetchData();
async function fetchData() {
    try {
        const response = await fetch("https://pokeapi");

        if (!response.ok) {
            throw new Error("Could not fetch resource")
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error(error);
    }
}