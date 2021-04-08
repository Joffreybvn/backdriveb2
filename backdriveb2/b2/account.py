
from b2sdk.v1 import InMemoryAccountInfo, B2Api
from b2sdk.exception import InvalidAuthToken
info = InMemoryAccountInfo()


class Account:

    def __init__(self, keys: list):
        self.api = B2Api(info)
        self.key, self.key_id = keys

    def connect(self) -> bool:

        try:
            self.api.authorize_account("production", self.key_id, self.key)

        except InvalidAuthToken:
            return False

        return True

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
