
import {content_class, side_class, settingsContent, settingsSide} from "../utils/dom.mjs"
import { Tab } from "./tab.mjs";


class SettingsTab extends Tab {

    constructor() {
        super(settingsContent, settingsSide);
    }

    display() {
        super.display();

        if (!this.hasShowed) {
            this.hasShowed = true
        }
    }
}

export {
    SettingsTab
}