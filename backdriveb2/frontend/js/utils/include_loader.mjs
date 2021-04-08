
let loadInclude = (parentElement, file) => {
    return new Promise((resolve, reject) => {

        let request = new XMLHttpRequest()

        // Callback: triggered when the include is loaded
        request.onreadystatechange = () => {

            // Append the HTML
            if (request.readyState === 4) {
                parentElement.innerHTML += request.responseText
                resolve(true)
            }
        }

        // Load the include
        try {
            request.open("GET", file, true);
            request.send();
        } catch (err) {
            reject(false)
        }
    })
}

export {
    loadInclude
}