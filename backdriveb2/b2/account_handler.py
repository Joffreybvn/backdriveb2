
import json
from typing import List
from . import Account


class AccountHandler:

    def __init__(self):
        self.accounts: List[Account] = []

        self._load_accounts()

    def create(self, key: str, key_id: str):
        """Register a new account."""

        self.accounts.append(Account([key, key_id]))
        self._save_accounts()

    def update(self, index: str, key: str = None, key_id: str = None) -> bool:
        """Update the account with the given index."""

        # Update the account
        try:
            self.accounts[int(index)].credentials = [key, key_id]
            self._save_accounts()

        # If the account doesn't exist yet, create it
        except (IndexError, TypeError) as error:
            self.create(key, key_id)

        return True

    def get_accounts(self) -> List[list]:
        """Return a list of all accounts."""

        accounts = []
        for i in range(len(self.accounts)):
            accounts.append([i] + self.accounts[i].credentials)

        return accounts

    def _load_accounts(self) -> None:
        """Load all accounts from the disk."""

        # Load the accounts from disk
        try:
            with open('./accounts.json') as handler:
                credentials = json.load(handler)

        # If not exists, create a new dictionary
        except FileNotFoundError as error:
            print("ERROR: Could not load accounts.json. Create an empty one.")
            credentials = self._generate_credential()

        # Create Account objects
        for entry in credentials["accounts"]:
            self.accounts.append(Account(entry))

    def _save_accounts(self) -> None:
        """Save accounts to the disk"""

        credentials = self._generate_credential()

        # Populate the credential dictionary
        for account in self.accounts:
            credentials["accounts"].append(account.credentials)

        # Save it to disk as JSON
        with open('./accounts.json', 'w') as handler:
            json.dump(credentials, handler)

    @staticmethod
    def _generate_credential() -> dict:
        """Generate an empty credential dictionary."""

        return {"accounts": []}
