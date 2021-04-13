

class DisplayableContent {

    constructor(content, contentClass) {
        this.HTMLContent = content;
        this.contentClass = contentClass;

        this.isLoaded = false;  // If the content was already displayed
    }

    display() {

        // Hide all content tab
        for (let element of document.getElementsByClassName(this.contentClass)) {
            element.style.display = "none";
        }

        // Display this tab
        this.HTMLContent.style.display = "unset"

        // Load the Tab if its the first time it is shown
        if (!this.isLoaded) {
            this.isLoaded = true;

            this.load()
        }
    }

    load() {}
}


export { DisplayableContent }