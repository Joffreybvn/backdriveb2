
import { content_class, side_class, accountsContent, accountsSide } from "../utils/dom.mjs"
import { loadInclude } from "../utils/include_loader.mjs";
import { Tab } from "./tab.mjs";


class AccountsTab extends Tab {

    constructor() {
        super(accountsContent, accountsSide);
        this.cards = []
    }

    async display() {
        super.display();

        if (!this.isLoaded) {
            await this.loadAccountCards()

            this.isLoaded = true
        }

        this.reload();
    }

    reload() {
        for (const card of this.cards) {
            card.reload()
        }
    }

    async loadAccountCards() {

        // Get the account list from the Python API
        let accounts = await pywebview.api.get_accounts()

        // If no account exist, display an empty card
        if (accounts.length === 0) {
            await this.createAccountCard()
        }

        // Otherwise, display card filled with credentials
        else {
            for (const entry of accounts) {
                await this.createAccountCard(entry[1], entry[2], entry[0])
            }
        }
    }

    async createAccountCard(keyValue = "", keyIdValue = "", index) {

        // Create an account card
        await loadInclude(this.content, "./includes/accounts/account.html")
        this.cards.push(new AccountCard(index, keyValue, keyIdValue))
    }
}


class AccountCard {

    constructor(name, key, keyId) {
        this.nameElement = undefined;
        this.id_name = randomIdGenerator();
        this.name = name

        this.keyElement = undefined;
        this.id_key = randomIdGenerator();
        this.value_key = key;

        this.keyIdElement = undefined;
        this.id_keyId = randomIdGenerator();
        this.value_keyId = keyId;

        this.buttonElement = undefined;
        this.id_button = randomIdGenerator();

        this.loadElements(
            'account_card_index',
            'account_card_key',
            'account_card_key_id',
            'account_card_button'
        )
        this.changeIds()
    }

    reload() {
        // Because of DOM reset, the Card has to be reloaded to connect back to
        // its HTML components.

        this.loadElements(this.id_name, this.id_key, this.id_keyId, this.id_button)
        this.setValues(this.value_key, this.value_keyId)
        this.initEventListener()
    }

    loadElements(index, key, keyId, button) {
        this.indexElement = document.getElementById(index)
        this.keyElement = document.getElementById(key)
        this.keyIdElement = document.getElementById(keyId)
        this.buttonElement = document.getElementById(button)
    }

    changeIds() {
        this.keyElement.id = this.id_key;
        this.keyIdElement.id = this.id_keyId;
        this.buttonElement.id = this.id_button;
    }

    setValues(key, keyId) {
        this.keyElement.value = key;
        this.keyIdElement.value = keyId;
    }

    initEventListener() {

        this.buttonElement.addEventListener('click', (event) => {
            event.preventDefault();

            // Update the input values
            this.value_key = this.keyElement.value;
            this.value_keyId = this.keyIdElement.value;

            // Send the account to the back-end
            this.saveAccount()
        })
    }

    async saveAccount() {
        let outcome;

        // Send the key and keyId to the Python API
        [outcome, this.name] = await pywebview.api.save_account(this.name || false, this.keyElement.value, this.keyIdElement.value)
    }
}


let randomIdGenerator = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export { AccountsTab }