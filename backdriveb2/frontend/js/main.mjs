
import { AccountsTab } from "./tabs/accounts.mjs";
import { BucketTab } from "./tabs/bucket/bucket.mjs";
import { SettingsTab } from "./tabs/settings.mjs";

// DOM
import { navBar, uploadButton, uploadInput } from "./utils/dom.mjs";
import { includeLoader } from "./includes/include_loader.mjs";


class Application {

    constructor() {
        this.accountsTab = new AccountsTab(this.displayTabCallback(this));
        this.settingsTab = new SettingsTab(this.displayTabCallback(this));

        this.bucketTabs = {};
        this.displayedBucket = undefined;
    }

    async start() {

        // Create bucket tabs
        await this.createBucketTabs()
        this.initEventListeners()

        // Display the account tab by default
        await this.accountsTab.display();
    }

    async createBucketTabs() {
        let bucket_names = await pywebview.api.get_buckets()

        // Create Bucket tabs and nav entries
        for (let name of bucket_names) {

            let navigation;
            [navigation] = includeLoader.loadBucketNav(navBar, name)
            this.bucketTabs[name] = new BucketTab(name, navigation, this.displayTabCallback(this))
        }
    }

    initEventListeners() {

        // Trigger the file explorer when click on upload button
        uploadButton.addEventListener("click", async () => {

            if (this.displayedBucket) {
                await this.bucketTabs[this.displayedBucket].uploadFile()
            }
        })
    }

    displayTabCallback(main) {
        let self = main

        return (bucketName) => {
            self.displayedBucket = bucketName
        }
    }
}

// Start the app
window.addEventListener('pywebviewready', async () => {
    await new Application().start()
})
