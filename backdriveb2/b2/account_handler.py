
from cryptography.fernet import Fernet
import json
from typing import List
from . import Account


class AccountHandler:

    def __init__(self):
        self.credentials: dict = self._load_credentials()
        self.accounts: List[Account] = self._load_accounts()

    # Accounts
    # -------------------------------------------------------------------------

    def create(self, key: str, key_id: str):
        """Register a new account."""

        self.accounts.append(Account(key, key_id))
        self._save_credentials()

    def update(self, index, key: str = None, key_id: str = None):
        """Update the account with the given index."""

        self.accounts[index].update(key, key_id)
        self._save_credentials()

    def _load_accounts(self) -> List[Account]:
        """Load all accounts from the credentials dictionary."""

        accounts = []

        for account in self.credentials['accounts']:
            accounts.append(Account(account["key"], account["key_id"]))

        return accounts

    # Credentials
    # -------------------------------------------------------------------------

    def _save_credentials(self):
        """Save credential dictionary to disk."""

        with open('./credentials.json', 'w') as handler:
            json.dump(self.credentials, handler)

    def _load_credentials(self) -> dict:
        """Load and return the credential dictionary."""

        # Load the credentials from disk
        try:
            with open('./credentials.json') as handler:
                credentials = json.load(handler)

        # If not exists, create a new one
        except FileNotFoundError as error:
            credentials = self._generate_credential()

        return credentials

    @staticmethod
    def _generate_credential():
        """Generate an new credential dictionary with a master key."""

        return {
            'master': Fernet.generate_key(),
            'accounts': []
        }
