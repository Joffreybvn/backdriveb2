
import { TreeElement } from "./tree_element.mjs";
import {includeLoader} from "../../includes/include_loader.mjs";


class FileCard extends TreeElement {

    constructor(parent, id, name, small_name, extension, size, content_type) {
        super(id, name, small_name);

        this.extension = extension;
        this.size = size;
        this.content_type = content_type;

        // Load the HTML include
        this.card = this.downloadButton = undefined;
        [this.card, this.downloadButton] = includeLoader.loadFileCard(parent, small_name, extension, size)

        this.initEventListener()
    }

    initEventListener() {
        //this.downloadButton.addEventListener("click", () => {})
    }
}

export { FileCard }