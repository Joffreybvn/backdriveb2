
import { AccountsTab } from "./tabs/accounts.mjs";
import { BucketTab } from "./tabs/bucket.mjs";
import { SettingsTab } from "./tabs/settings.mjs";

// DOM
import { navigationAccountTab, navigationSettingsTab } from "./utils/dom.mjs";

class Application {

    constructor() {
        this.accountsTab = new AccountsTab();
        this.settingsTab = new SettingsTab();

        this.initEventListener()
    }

    initEventListener() {
        navigationAccountTab.addEventListener("click", () => { this.accountsTab.display() });
        navigationSettingsTab.addEventListener("click", () => { this.settingsTab.display() });
    }

    async start() {

        // Display the Accounts tab and connect to BackBlaze
        this.accountsTab.display();
    }

    createBucketTab() {

    }
}

// Start the app
window.addEventListener('pywebviewready', () => {
    new Application().start()
})
