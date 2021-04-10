
let accountCard = (id_key, id_keyId, id_saveButton) => {
    return `

    <div class="content-card-container">
        <div class="fixed-800 content-card card-account">
            <form class="pure-form pure-form-aligned">
                <fieldset>
                    <legend><h2>Account #<span id="account_card_index"></span></h2></legend>
                    <div class="pure-control-group">
                        <label>B2 Key</label>
                        <input type="text" id="${id_key}" placeholder="B2 Key" />
                    </div>
                    <div class="pure-control-group">
                        <label>B2 Key ID</label>
                        <input type="text" id="${id_keyId}" placeholder="B2 Key ID" />
                    </div>
                </fieldset>
                <button type="submit" id="${id_saveButton}" class="pure-button pure-button-primary button-save-account">Save</button>
            </form>
        </div>
    </div>
    `
}

export { accountCard }