
import { content_class, side_class, accountsContent, accountsSide } from "../utils/dom.mjs"

class Tab {

    constructor(contentElement, sideElement) {
        this.content = contentElement;
        this.side = sideElement;

        this.isLoaded = false;  // If the Tab was already displayed
    }

    display() {

        /* Hide all content tab */
        for (let element of document.getElementsByClassName(content_class)) {
            element.style.display = "none";
        }

        /* Display this tab */
        this.content.style.display = "unset"
    }
}

export {
    Tab
}