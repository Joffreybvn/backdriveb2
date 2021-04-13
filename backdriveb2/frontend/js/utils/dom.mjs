
// Navigation menu
const navBar = document.getElementById("navbar")
const navigationAccountTab = document.getElementById("nav_accounts_tab")
const navigationSettingsTab = document.getElementById("nav_settings_tab")
const uploadButton = document.getElementById('upload-button')
const uploadInput = document.getElementById('upload-input')

// Content panes
const layout = document.getElementById("layout")
const content_class = "main_content"
const explorer_class = "explorer"
const accountsContent = document.getElementById("accounts_content")
const settingsContent = document.getElementById("settings_content")

// Side panes
const side_class = "side_content"
const accountsSide = document.getElementById("accounts_side")
const settingsSide = document.getElementById("settings_side")

export {
    navBar,
    navigationAccountTab,
    navigationSettingsTab,
    uploadButton,
    uploadInput,

    layout,
    content_class,
    explorer_class,
    accountsContent,
    settingsContent,

    side_class,
    accountsSide,
    settingsSide,
}