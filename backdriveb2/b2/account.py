
from b2sdk.v1 import InMemoryAccountInfo, B2Api
from b2sdk.v1 import Bucket as B2Bucket
from b2sdk.exception import InvalidAuthToken
from typing import List

info = InMemoryAccountInfo()


class Account:

    def __init__(self, name: str, keys: list):
        self.api = B2Api(info)

        self.name = name
        self.key, self.key_id = keys
        self.connected = False

    def connect(self) -> bool:

        try:
            self.api.authorize_account("production", self.key_id, self.key)
            self.connected = True

        except InvalidAuthToken:
            print(f"INFO failed to connect account with name: {self.name}")
            self.connected = False

        return self.connected

    @property
    def buckets(self) -> List[B2Bucket]:
        """Return a list of all bucket accessible by this account."""

        if self.connected:
            return self.api.list_buckets()

        return []

    @property
    def credentials(self) -> list:
        """Return a list with the key and key_id."""

        return [self.key, self.key_id]

    @credentials.setter
    def credentials(self, keys: list):
        """
        Set the key and/or the key_id of the account.
        :param keys: A tuple of keys: [key, key_id]
        """
        key, key_id = keys

        if key is not None:
            self.key = key

        if key_id is not None:
            self.key_id = key_id
