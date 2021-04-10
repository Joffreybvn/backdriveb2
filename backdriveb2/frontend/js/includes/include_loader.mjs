
// insertAdjacentHTML doesn't re-parse the parent element. Thus, it doesn't break eventListeners previously linked.
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

import { bucketNav } from "./navbar/bucket_nav.html.mjs";
import { accountCard } from "./accounts/account_card.html.mjs";
import { fileCard } from "./bucket/file_card.html.mjs";
import { folderCard } from "./bucket/folder_card.html.mjs";

class IncludeLoader {

    constructor() {

    }

    randomIdGenerator() {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }

    loadBucketNav(parent, label) {

        // Generate nav id
        let id_bucket = this.randomIdGenerator();

        // Load and include
        parent.insertAdjacentHTML('beforeend', bucketNav(id_bucket, label));

        // Return DOM element
        return [
            document.getElementById(id_bucket)
        ]
    }

    loadAccountCard(parent) {

        // Generate ids
        let id_key = this.randomIdGenerator();
        let id_keyId = this.randomIdGenerator();
        let id_saveButton = this.randomIdGenerator();

        // Load and include
        parent.insertAdjacentHTML('beforeend', accountCard(id_key, id_keyId, id_saveButton));

        // Return DOM elements
        return [
            document.getElementById(id_key),
            document.getElementById(id_keyId),
            document.getElementById(id_saveButton)
        ]
    }

    loadFileCard(parent) {

    }

    loadFolderCard(parent) {

    }
}

const includeLoader = new IncludeLoader();
export { includeLoader }