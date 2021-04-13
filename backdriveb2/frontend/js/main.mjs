
import { AccountsTab } from "./tabs/accounts.mjs";
import { BucketTab } from "./tabs/bucket/bucket.mjs";
import { SettingsTab } from "./tabs/settings.mjs";

// DOM
import { navBar } from "./utils/dom.mjs";
import { includeLoader } from "./includes/include_loader.mjs";


class Application {

    constructor() {
        this.accountsTab = new AccountsTab();
        this.settingsTab = new SettingsTab();
        this.bucketTabs = {};
    }

    async start() {

        // Create bucket tabs
        await this.createBucketTabs()

        // Display the account tab by default
        await this.accountsTab.display();
    }

    async createBucketTabs() {
        let bucket_names = await pywebview.api.get_buckets()

        // Create Bucket tabs and nav entries
        for (let name of bucket_names) {

            let navigation;
            [navigation] = includeLoader.loadBucketNav(navBar, name)
            this.bucketTabs[name] = new BucketTab(name, navigation)
        }
    }
}

// Start the app
window.addEventListener('pywebviewready', async () => {
    await new Application().start()
})
