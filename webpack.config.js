
const path = require('path');

module.exports = {
    entry: "./backdriveb2/frontend/js/main.mjs",
    mode: "development",
    output: {
        path: path.resolve(__dirname, './backdriveb2/frontend/js/'),
        filename: "bundle.js"
    }
}