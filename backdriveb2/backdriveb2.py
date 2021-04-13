
import webview
from . import Api


class Application:

    def __init__(self):

        self.api = Api()
        window = webview.create_window('BackDrive B2', 'backdriveb2/frontend/index.html', js_api=self.api, min_size=(1000, 600))

        self.api.set_window(window)
        # Start the API and the frontend
        webview.start(debug=True)
