
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

        // Display the Accounts tab by default
        this.accountsTab.display()
    }

    initEventListener() {
        navigationAccountTab.addEventListener("click", () => { this.accountsTab.display() });
        navigationSettingsTab.addEventListener("click", () => { this.settingsTab.display() });
    }
}

// Start the app
window.addEventListener('pywebviewready', () => {
    new Application()
})
