
import webview
import sys
from api import Api


class Application:

    def __init__(self):

        # Create the API
        self.api = Api()

        # Create the window
        window = webview.create_window('BackDrive B2', 'frontend/index.html', js_api=self.api, min_size=(1000, 600))
        self.api.set_window(window)

        # Start the app
        webview.start(gui=self.get_gui_by_platform(), debug=True)

    @staticmethod
    def get_gui_by_platform() -> str:
        """
        Return the GUI library from the OS where this app is currently executed.
        """

        platforms = {
            'linux': 'gtk',
            # 'darwin': 'OS X',
            'win32': 'cef',
            'cygwin': 'cef'
        }

        if sys.platform not in platforms:
            print(f"ERROR: no GUI found for {sys.platform}")
            return "gtk"

        return platforms[sys.platform]


if __name__ == '__main__':
    Application()
