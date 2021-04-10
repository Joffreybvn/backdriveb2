
let bucketNav = (id_bucketNav, label) => {
    return `

    <li class="pure-menu-item">
        <a href="#" id="${id_bucketNav}" class="pure-menu-link">
            <span class="bucket-icon"></span>
            <span class="bucket-label">${label}</span></a>
    </li>
    `
}

export { bucketNav }
