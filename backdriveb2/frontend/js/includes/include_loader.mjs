
// insertAdjacentHTML doesn't re-parse the parent element. Thus, it doesn't break eventListeners previously linked.
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

import { bucketNav } from "./navbar/bucket_nav.html.mjs";
import { accountCard } from "./accounts/account_card.html.mjs";
import { bucketTab } from "./bucket/tab.html.mjs";
import { bucketSide } from "./bucket/side.html.mjs";
import { fileExplorer } from "./bucket/explorer.html.mjs";
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

    loadBucketTabAndSide(parent) {

        // Generate ids
        let id_tab = this.randomIdGenerator();
        let id_side = this.randomIdGenerator();

        // Load and include
        parent.insertAdjacentHTML('beforeend', bucketTab(id_tab));
        parent.insertAdjacentHTML('beforeend', bucketSide(id_side));

        // Return DOM elements
        return [
            document.getElementById(id_tab),
            document.getElementById(id_side)
        ]
    }

    loadFileExplorer(parent) {

        // Generate id
        let id_explorer = this.randomIdGenerator();
        let id_previous = this.randomIdGenerator();

        // Load and include
        parent.insertAdjacentHTML('beforeend', fileExplorer(id_explorer, id_previous));

        // Return DOM elements
        return [
            document.getElementById(id_explorer),
            document.getElementById(id_previous),
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

    loadFileCard(parent, name, extension, size) {

        // Generate ids
        let id_card = this.randomIdGenerator();
        let id_download = this.randomIdGenerator();

        // Load and include
        parent.insertAdjacentHTML('beforeend', fileCard(id_card, id_download, name, extension, size));

        // Return DOM elements
        return [
            document.getElementById(id_card),
            document.getElementById(id_download)
        ]
    }

    loadFolderCard(parent, name) {

        // Generate ids
        let id_card = this.randomIdGenerator();

        // Load and include
        parent.insertAdjacentHTML('beforeend', folderCard(id_card, name));

        // Return DOM elements
        return [
            document.getElementById(id_card),
        ]
    }
}

const includeLoader = new IncludeLoader();
export { includeLoader }