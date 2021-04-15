
from b2sdk.v1 import Bucket as B2Bucket
from typing import List, Dict
from ..objects import Bucket


class BucketsHandler:

    def __init__(self, buckets: List[B2Bucket]):

        self.buckets: Dict[str, Bucket] = {}
        self._load_buckets(buckets)

    def get_buckets(self) -> List[str]:
        """Return a list of bucket names."""

        return list(self.buckets.keys())

    def get_files(self, bucket_name: str, folder: str = "", reload: bool = False):
        """Return the file list for the given bucket name."""

        return self.buckets[bucket_name].get_files(folder, reload)

    def download_file(self, bucket_name: str, file_name: str):
        self.buckets[bucket_name].download_file(file_name)

    def upload_file(self, bucket_name: str, local_file_name: str, bucket_directory: str):
        self.buckets[bucket_name].upload_file(local_file_name, bucket_directory)

    def _load_buckets(self, buckets: List[B2Bucket]):
        """Create the bucket object."""

        for bucket in buckets:
            self.buckets[bucket.name] = Bucket(bucket)
