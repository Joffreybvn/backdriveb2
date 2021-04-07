
let loadInclude = (parentElement, file) => {

    let request = new XMLHttpRequest()

    // Once a response is received, append the HTML
    request.onreadystatechange = () => {

        if (request.readyState === 4) {
            parentElement.innerHTML += request.responseText
        }
    }

    // Send a request to load the include
    try {
        request.open("GET", file, true);
        request.send();
    } catch (err) {
        console.log("Could not load the include")
    }
}

export {
    loadInclude
}