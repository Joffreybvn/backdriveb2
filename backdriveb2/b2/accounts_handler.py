
from b2sdk.v1 import Bucket as B2Bucket
import uuid
import json
from typing import List, Dict, Tuple
from . import Account


class AccountsHandler:

    def __init__(self):
        self.accounts: Dict[str, Account] = {}

        self._load_accounts()
        self._connect_accounts()

    def update(self, name: str, key: str = None, key_id: str = None) -> Tuple[bool, str]:
        """Update or create the account with the given index."""

        # Update the account
        try:
            self.accounts[name].credentials = [key, key_id]
            self._save_accounts()

        # If the account doesn't exist yet, create it
        except (KeyError, TypeError) as error:

            name = uuid.uuid4().hex.upper()[0:6]
            self.accounts[name] = Account(name, [key, key_id])

        # Save to disk
        self._save_accounts()

        # Try to connect
        return self._connect(name), name

    def get_accounts(self) -> List[list]:
        """Return a list of all accounts."""

        accounts = []
        for account in self.accounts.values():
            accounts.append([account.name] + account.credentials)

        return accounts

    def get_buckets(self) -> List[B2Bucket]:
        """Return a list of all buckets of all accounts."""

        buckets = []
        for account in self.accounts.values():
            buckets += account.buckets

        return buckets

    # Account connection
    # -------------------------------------------------------------------------

    def _connect(self, account: str) -> bool:
        """Connect the given account to BackBlaze."""

        return self.accounts[account].connect()

    def _connect_accounts(self):
        """Connect all accounts to BackBlaze."""

        for account in self.accounts.keys():
            self._connect(account)

    # Load / Save account
    # -------------------------------------------------------------------------

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
        for account_name, keys in credentials["accounts"].items():
            self.accounts[account_name] = Account(account_name, keys)

    def _save_accounts(self) -> None:
        """Save accounts to the disk"""

        credentials = self._generate_credential()

        # Populate the credential dictionary
        for account in self.accounts.values():
            credentials["accounts"][account.name] = account.credentials

        # Save it to disk as JSON
        with open('./accounts.json', 'w') as handler:
            json.dump(credentials, handler)

    @staticmethod
    def _generate_credential() -> dict:
        """Generate an empty credential dictionary."""

        return {
            "accounts": {}
        }
