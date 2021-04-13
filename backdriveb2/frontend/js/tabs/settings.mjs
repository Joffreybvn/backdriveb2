
import { navigationSettingsTab, settingsContent, settingsSide } from "../utils/dom.mjs"
import { Tab } from "./tab.mjs";


class SettingsTab extends Tab {

    constructor(displayTabCallback) {
        super(settingsContent, settingsSide, navigationSettingsTab, displayTabCallback);
    }

    display() {
        super.display();

        // Set the displayed bucket to undefined
        this.displayTabCallback(undefined)
    }
}

export {
    SettingsTab
}