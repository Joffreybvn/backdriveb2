
from typing import List, Tuple
from .b2 import AccountsHandler, BucketsHandler


class Api:

    def __init__(self):

        # Create the accounts and buckets
        self.accounts = AccountsHandler()
        self.buckets = BucketsHandler(self.accounts.get_buckets())

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
