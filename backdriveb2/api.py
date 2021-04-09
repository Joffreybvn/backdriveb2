
from typing import List, Tuple
from .b2 import AccountsHandler, BucketsHandler


class Api:

    def __init__(self):
        self.accounts_handler = AccountsHandler()
        self.buckets = BucketsHandler()

    def get_accounts(self) -> List[list]:
        return self.accounts_handler.get_accounts()

    def save_account(self, name, key, key_id) -> Tuple[bool, str]:
        return self.accounts_handler.update(name, key, key_id)

    def get_accounts_buckets(self):
        pass
