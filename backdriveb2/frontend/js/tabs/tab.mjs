
import { content_class, side_class, accountsContent, accountsSide } from "../utils/dom.mjs"
import { DisplayableContent } from "./displayable_content.mjs"


class Tab extends DisplayableContent {

    constructor(contentElement, sideElement, navigation, displayTabCallback) {
        super(contentElement, content_class);

        this.side = sideElement;
        this.navigation = navigation
        this.displayTabCallback = displayTabCallback;

        this.startEventListeners()
    }

    startEventListeners() {
        this.navigation.addEventListener("click", () => { this.display() })
    }
}

export {
    Tab
}