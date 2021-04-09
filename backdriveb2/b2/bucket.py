
from b2sdk.v1 import Bucket as B2Bucket


class Bucket:

    def __init__(self, bucket: B2Bucket):
        self.b2_bucket = bucket
