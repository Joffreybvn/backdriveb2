import {includeLoader} from "../../includes/include_loader.mjs";

class TreeElement {

    constructor(parent, bucket_name, id, name, small_name) {

        this.parent = parent;
        this.bucket_name = bucket_name;
        this.id = id;
        this.name = name;
        this.small_name = small_name;
    }
}

export { TreeElement }