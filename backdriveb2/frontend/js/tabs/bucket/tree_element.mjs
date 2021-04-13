import {includeLoader} from "../../includes/include_loader.mjs";

class TreeElement {

    constructor(parent, id, name, small_name) {
        this.parent = parent;
        this.id = id;
        this.name = name;
        this.small_name = small_name;

    }
}

export { TreeElement }