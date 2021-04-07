
import { mainContent, sideContent } from "../utils/dom.mjs"
import { loadInclude } from "../utils/include_loader.mjs";


class AccountsTab {

    constructor() {
        //loadInclude(fileTab, "./includes/file.html")

        this.instantiateUI()
        this.initEventListener()
    }

    instantiateUI() {
        mainContent.innerHTML = ""
    }

    initEventListener() {

    }
}

export {
    AccountsTab
}