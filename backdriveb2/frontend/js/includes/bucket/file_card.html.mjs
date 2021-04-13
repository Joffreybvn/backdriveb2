
let fileCard = (id_card, id_download, name, extension, size) => {
    return `

    <div class="content-card-container">
        <div id="${id_card}" class="content-card card-file">
            <div class="card-image-file"></div>
            <div class="content-card-info">
                <h2>${name}<span class="file-extension">.${extension}</span></h2>
                <h6>${size}</h6>
            </div>
            <div id="${id_download}" class="card-download-button"></div>
        </div>
    </div>
    `
}

export { fileCard }
