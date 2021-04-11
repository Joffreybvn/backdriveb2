
import { navigationSettingsTab, settingsContent, settingsSide } from "../utils/dom.mjs"
import { Tab } from "./tab.mjs";


class SettingsTab extends Tab {

    constructor() {
        super(settingsContent, settingsSide, navigationSettingsTab);
    }

    display() {
        super.display();
    }
}

export {
    SettingsTab
}