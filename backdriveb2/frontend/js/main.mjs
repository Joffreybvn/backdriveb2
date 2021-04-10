
import { AccountsTab } from "./tabs/accounts.mjs";
import { BucketTab } from "./tabs/bucket.mjs";
import { SettingsTab } from "./tabs/settings.mjs";

// DOM
import { navBar, navigationAccountTab, navigationSettingsTab } from "./utils/dom.mjs";
import { includeLoader } from "./includes/include_loader.mjs";


class Application {

    constructor() {
        this.accountsTab = new AccountsTab();
        this.settingsTab = new SettingsTab();
        this.bucketTabs = {};
    }

    async start() {

        // Create bucket tabs
        await this.initBucketTabs()

        // Initialize the global event listener
        this.initEventListener()

        // Display the account tab by default
        await this.accountsTab.display();
    }

    async initBucketTabs() {
        let bucket_names = await pywebview.api.get_buckets()

        // Create Bucket tabs and nav entries
        for (let name of bucket_names) {

            let navigation;
            [navigation] = includeLoader.loadBucketNav(navBar, name)
            this.bucketTabs[name] = new BucketTab(name, navigation)
        }
    }

    initEventListener() {
        navigationAccountTab.addEventListener("click", () => { this.accountsTab.display() });
        navigationSettingsTab.addEventListener("click", () => { this.settingsTab.display() });

        for (let bucket_name in this.bucketTabs) {
            this.bucketTabs[bucket_name].nav.addEventListener("click", () => { this.bucketTabs[bucket_name].display() })
        }
    }

    createBucketTab() {

    }
}

// Start the app
window.addEventListener('pywebviewready', async () => {
    await new Application().start()
})
