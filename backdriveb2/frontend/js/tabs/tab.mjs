
import { content_class, side_class, accountsContent, accountsSide } from "../utils/dom.mjs"

class Tab {

    constructor(contentElement, sideElement, navigation) {
        this.content = contentElement;
        this.side = sideElement;
        this.navigation = navigation

        this.isLoaded = false;  // If the Tab was already displayed

        this.startEventListeners()
    }

    startEventListeners() {
        this.navigation.addEventListener("click", () => { this.display() })
    }

    display() {

        // Hide all content tab
        for (let element of document.getElementsByClassName(content_class)) {
            element.style.display = "none";
        }

        // Display this tab
        this.content.style.display = "unset"

        // Load the Tab if its the first time it is shown
        if (!this.isLoaded) {
            this.isLoaded = true;

            this.load()
        }
    }

    load() {}
}

export {
    Tab
}