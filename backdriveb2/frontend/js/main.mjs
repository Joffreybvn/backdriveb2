
import { AccountsTab } from "./tabs/accounts.mjs";
import { BucketTab } from "./tabs/bucket.mjs";
import { SettingsTab } from "./tabs/settings.mjs";

// DOM
import { navigationAccountTab, navigationSettingsTab } from "./utils/dom.mjs";

class Application {

    constructor() {
        this.accountsTab = new AccountsTab();
        this.settingsTab = new SettingsTab();
        this.bucketTabs = {};
    }

    async start() {

        // Create bucket tabs
        // await this.initBucketTabs()

        // Initialize the navbar event listener
        this.initNavbarEventListener()

        // Display the account tab by default
        await this.accountsTab.display();
    }

    async initBucketTabs() {
        let bucket_names = await pywebview.api.get_buckets()

        for (let bucket of bucket_names) {
            this.bucketTabs[bucket] = new BucketTab(bucket)
        }
    }

    initNavbarEventListener() {
        navigationAccountTab.addEventListener("click", () => { this.accountsTab.display() });
        navigationSettingsTab.addEventListener("click", () => { this.settingsTab.display() });

        //for (let bucket_name in this.bucketTabs) {
            // this.bucketTabs[bucket_name].addEventListener("click", () => { this.bucketTabs[bucket_name].display() })
        //}
    }

    createBucketTab() {

    }
}

// Start the app
window.addEventListener('pywebviewready', async () => {
    await new Application().start()
})
