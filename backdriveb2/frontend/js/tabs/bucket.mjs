
import { content_class, side_class, layout } from "../utils/dom.mjs"
import { includeLoader } from "../includes/include_loader.mjs";
import { Tab } from "./tab.mjs";


class BucketTab extends Tab {

    constructor(name, navigation) {

        // Create and load the HTML elements
        let bucketContent, bucketSide;
        [bucketContent, bucketSide] = includeLoader.loadBucketTabAndSide(layout)
        super(bucketContent, bucketSide, navigation);

        this.name = name;
    }

    display() {
        super.display();
    }

    async load() {
        let elements = await pywebview.api.get_files_and_folders(this.name)
        console.log(elements)
    }
}

export {
    BucketTab
}