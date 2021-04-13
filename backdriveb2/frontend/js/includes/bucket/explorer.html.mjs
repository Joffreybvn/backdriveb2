
let fileExplorer = (id_explorer, id_previous) => {
    return `

    <div id="${id_explorer}" class="explorer pure-u-1">
    
        <!-- Tab header -->
        <div class="email-item email-item-selected pure-g">
            <div class="fixed-800 pure-u-3-4">
                <button type="submit" id="${id_previous}" class="pure-button black-button">Previous</button>
            </div>
        </div>
    </div>
    `
}

export { fileExplorer }