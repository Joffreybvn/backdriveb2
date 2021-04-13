
import { TreeElement } from "./tree_element.mjs";
import {includeLoader} from "../../includes/include_loader.mjs";


class FolderCard extends TreeElement {

    constructor(parent, bucket_name, id, name, small_name, onFolderClickCallback) {
        super(parent, id, name, small_name);

        // Load the HTML include
        this.card = includeLoader.loadFolderCard(parent, name)[0];

        this.onFolderClickCallback = onFolderClickCallback
        this.initEventListener()
    }

    initEventListener() {

        // Switch explorer on folder click
        this.card.addEventListener("click", () => {
            this.onFolderClickCallback(this.name)
        })

        // this.downloadButton.addEventListener("click", () => {})
    }
}

export { FolderCard }