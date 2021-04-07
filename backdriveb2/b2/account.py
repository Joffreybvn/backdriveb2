
from b2sdk.v1 import InMemoryAccountInfo, B2Api
info = InMemoryAccountInfo()


class Account:

    def __init__(self, key: str, key_id: str):
        self.api = B2Api(info)

        self.key_id = key_id
        self.key = key
        self.api.authorize_account("production", key_id, key)

    def update(self, key: str = None, key_id: str = None):
        """Edit the key and/or the key_id of the account."""

        if key is not None:
            self.key = key

        if key_id is not None:
            self.key_id = key_id
