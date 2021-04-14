
import webview
from api import Api


class Application:

    def __init__(self):

        # Create the API
        self.api = Api()

        # Create the window
        window = webview.create_window('BackDrive B2', 'frontend/index.html', js_api=self.api, min_size=(1000, 600))
        self.api.set_window(window)

        # Start the app
        webview.start(gui="gtk", debug=True)


if __name__ == '__main__':
    Application()
