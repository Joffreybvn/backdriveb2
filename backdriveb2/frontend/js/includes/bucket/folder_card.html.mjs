
let folderCard = (id_card, name) => {
    return `

    <div class="content-card-container">
        <div id="${id_card}" class="content-card card-file">
            <div class="card-image-folder"></div>
            <div class="content-card-info">
                <!-- Remove the last character from the folder namme ("/") -->
                <h2>${name.substr(0, name.length - 1)}</h2>
                <h6></h6>
            </div>
            <!-- <div class="card-download-button"></div> -->
        </div>
    </div
    `
}

export { folderCard }