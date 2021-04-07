
import webview
from . import Api
from .b2 import AccountHandler


class Application:

    def __init__(self):
        api = Api()
        webview.create_window('BackDrive B2', 'backdriveb2/frontend/index.html', js_api=api, min_size=(1000, 600))

    @staticmethod
    def start():
        AccountHandler()
        # webview.start(debug=True)
