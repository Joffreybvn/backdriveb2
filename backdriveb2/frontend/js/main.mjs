
import { AccountsTab } from "./tabs/account.mjs";
import { BucketTab } from "./tabs/bucket.mjs";
import { SettingsTab } from "./tabs/settings.mjs";

// DOM
import { navigationAccountTab, navigationSettingsTab } from "./utils/dom.mjs";

class Application {

    constructor() {
        this.initEventListener()
    }

    initEventListener() {
        navigationAccountTab.addEventListener("click", () => { new AccountsTab() });
        navigationSettingsTab.addEventListener("click", () => { new SettingsTab() });
    }
}

// Start the app
new Application()