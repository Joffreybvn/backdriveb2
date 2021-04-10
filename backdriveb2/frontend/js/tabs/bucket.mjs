
import { content_class, side_class, bucketContent, bucketSide } from "../utils/dom.mjs"
import { Tab } from "./tab.mjs";


class BucketTab extends Tab{

    constructor(name, navigation) {
        super(bucketContent, bucketSide);

        this.nav = navigation;
        this.name = name;
    }

    display() {
        this.initEventListener()
    }

    initEventListener() {

    }
}

export {
    BucketTab
}