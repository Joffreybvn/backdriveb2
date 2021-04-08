
from typing import List
from .b2 import AccountHandler


class Api:

    def __init__(self):
        self.account_handler = AccountHandler()

    def get_accounts(self) -> List[list]:
        return self.account_handler.get_accounts()

    def save_account(self, index, key, key_id) -> bool:
        return self.account_handler.update(index, key, key_id)
