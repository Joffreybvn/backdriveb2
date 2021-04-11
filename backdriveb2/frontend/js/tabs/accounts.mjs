
import { navigationAccountTab, accountsContent, accountsSide } from "../utils/dom.mjs"
import { Tab } from "./tab.mjs";
import { includeLoader } from "../includes/include_loader.mjs";


class AccountsTab extends Tab {

    constructor() {
        super(accountsContent, accountsSide, navigationAccountTab);
        this.cards = []
    }

    async display() {
        super.display();
    }

    async load() {
        super.load();
        await this.loadAccountCards()
    }

    async loadAccountCards() {

        // Get the account list from the Python API
        let accounts = await pywebview.api.get_accounts()

        // If no account exist, display an empty card
        if (accounts.length === 0) {
            this.cards.push(new AccountsCard(this.content))

        // Otherwise, display card filled with credentials
        } else {
            for (const values of accounts) {
                this.cards.push(new AccountsCard(this.content, values[0], values[1], values[2]))
            }
        }
    }
}

class AccountsCard {

    constructor(parent, name = undefined, key = "", keyId = "") {

        this.name = name

        // Generate a new random name it's not provided
        if (name === undefined) {
            this.name = includeLoader.randomIdGenerator()
        }

        // Load the HTML include
        this.key = this.keyId = this.saveButton = undefined;
        [this.key, this.keyId, this.saveButton] = includeLoader.loadAccountCard(parent)

        // Insert values
        this.setValues(key, keyId)
        this.initEventListener()
    }

    setValues(key, keyId) {
        this.key.value = key;
        this.keyId.value = keyId;
    }

    initEventListener() {

        this.saveButton.addEventListener('click', async (event) => {
            event.preventDefault();
            await this.saveAccount()
        })
    }

    async saveAccount() {

        // Send the key and keyId to the Python API
        let outcome;
        [outcome, this.name] = await pywebview.api.save_account(this.name, this.key.value, this.keyId.value)

        return outcome
    }
}


export { AccountsTab }