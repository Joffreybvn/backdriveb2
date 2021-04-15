
import webview
from typing import List, Tuple
from .handlers import AccountsHandler, BucketsHandler


class Api:

    def __init__(self):
        self.window = None

        # Create the accounts and buckets
        self.accounts = AccountsHandler()
        self.buckets = BucketsHandler(self.accounts.get_buckets())

    def set_window(self, window):
        self.window = window

    def get_accounts(self) -> List[list]:
        return self.accounts.get_accounts()

    def save_account(self, name, key, key_id) -> Tuple[bool, str]:
        return self.accounts.update(name, key, key_id)

    def get_buckets(self) -> List[str]:
        return self.buckets.get_buckets()

    def get_files_and_folders(self, bucket_name: str, folder: str = "", reload: bool = False):
        return self.buckets.get_files(bucket_name, folder, reload)

    def download_file(self, bucket_name: str, file_name: str):
        return self.buckets.download_file(bucket_name, file_name)

    def upload_file(self, bucket_name: str, bucket_directory: str):
        files = self.window.create_file_dialog(webview.OPEN_DIALOG, allow_multiple=False)
        return self.buckets.upload_file(bucket_name, files[0], bucket_directory)
