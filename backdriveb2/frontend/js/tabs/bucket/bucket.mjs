
import { content_class, explorer_class, side_class, layout } from "../../utils/dom.mjs"
import { DisplayableContent } from "../displayable_content.mjs"
import { includeLoader } from "../../includes/include_loader.mjs";
import { Tab } from "../tab.mjs";
import { FileCard } from "./file.mjs";
import { FolderCard } from "./folder.mjs";


class BucketTab extends Tab {

    constructor(name, navigation) {

        // Create and load the HTML elements
        let bucketContent, bucketSide;
        [bucketContent, bucketSide] = includeLoader.loadBucketTabAndSide(layout)
        super(bucketContent, bucketSide, navigation);

        this.name = name;
        this.explorers = {}

        // Set root as default current folder
        this.current_folder = ""
    }

    display() {
        super.display();

        // If the explorer to show has not yet loaded, load it
        if (this.explorers[this.current_folder] === undefined) {
            this.explorers[this.current_folder] = new FileExplorer(this.HTMLContent, this.name, this.current_folder, this.onFolderClickCallback(this))
        }

        // Display the explorer corresponding to the current folder
        this.explorers[this.current_folder].display()
    }

    onFolderClickCallback(bucketTab) {
        let self = bucketTab;

        return (folder_name) => {
            self.current_folder = folder_name;
            self.display()
        }
    }
}


class FileExplorer extends DisplayableContent {

    constructor(parent, bucket_name, folder_name, onFolderClickCallback) {
        let explorer, previousButton;
        [explorer, previousButton] = includeLoader.loadFileExplorer(parent)
        super(explorer, explorer_class);

        this.bucket_name = bucket_name
        this.folder_name = folder_name
        this.previousButton = previousButton

        this.onFolderClickCallback = onFolderClickCallback

        this.files = {};
        this.folders = {};
    }

    display() {
        super.display();
    }

    async load() {

        let files, folders;
        [files, folders] = await pywebview.api.get_files_and_folders(this.bucket_name, this.folder_name)

        // Create files
        for (let file of files) {
            this.files[file[1]] = new FileCard(this.HTMLContent, file[0], file[1], file[2], file[3], file[4], file[5])
        }

        // Create folders
        for (let folder of folders) {
            this.folders[folder[1]] = new FolderCard(this.HTMLContent, folder[0], folder[1], folder[2], this.onFolderClickCallback)
        }

        this.initEventListeners()
    }

    initEventListeners() {

        // On "Previous" button click, go to the parent folder
        this.previousButton.addEventListener("click", (event) => {
            event.preventDefault()

            let folderName = name.substr(0, this.folder_name.length - 1)
            this.onFolderClickCallback(folderName.substring(0, folderName.lastIndexOf('/')))
        })
    }
}


export { BucketTab }