
from b2sdk.v1 import FileVersionInfo
from b2sdk.v1 import Bucket as B2Bucket
from typing import Tuple, Iterable, List, Dict, Union
from wcmatch.fnmatch import fnmatch


class Bucket:

    def __init__(self, bucket: B2Bucket):
        self.b2_bucket = bucket
        self.files: Dict[str, Union[File, Folder]] = None

    def get_files(self, folder: str = "", reload: bool = False):
        """Return the files and folder in a given folder."""

        # Load the files from BackBlaze if needed
        if reload or self.files is None:
            self.files = self._generate_file_tree()

        # Get all files tree
        all_files: List[str] = self.files.keys()

        folder_tree_size = len(folder.split("/"))  # Number of slashes '/' in the name. Math the deepness.
        files = []
        folders = []

        # Filter the three to return only the files in the given folder.
        for element in all_files:
            if element.startswith(folder):

                split = element.split("/")
                tree_size = len(element.split("/"))

                # Match files and folders
                # tree_size and folder_tree_size -> how deep are the folder to get files and the elements
                # in the bucket. We compare them to take only files and folder in the given folder (thus
                # with the same tree_size. print(split) to understand better this condition.
                if tree_size == folder_tree_size:
                    files.append(self.files[element].get_infos())

                elif tree_size == folder_tree_size + 1 and split[-1] == '':
                    folders.append(self.files[element].get_infos())

        return files, folders

    def _ls(self) -> Iterable[Tuple[FileVersionInfo, str]]:
        return self.b2_bucket.ls("", recursive=True)

    def _generate_file_tree(self) -> dict:
        """
        Load all file tree from Backblaze B2. This operation can be expensive
        if they are many elements in the bucket.
        """
        files = {}

        for entry in self._ls():
            info: FileVersionInfo = entry[0]

            # Check if the file is a directory and create it
            if fnmatch(info.file_name, "*/.bzEmpty"):

                name = info.file_name[:-8]  # Remove ".bzEmpty"
                files[name] = Folder(
                    info.id_,
                    name,
                    info.upload_timestamp
                )

            # Otherwise, it's a file. Create it too.
            else:
                files[info.file_name] = File(
                    info.id_,
                    info.file_name,
                    info.upload_timestamp,
                    info.size,
                    info.content_type
                )

        return files


class TreeElement:

    def __init__(self, id_: str, name: str, upload_timestamp: int):
        self.id = id_
        self.name = name
        self.upload_timestamp = upload_timestamp


class Folder(TreeElement):

    def __init__(self, id_: str, name: str, upload_timestamp: int):
        super().__init__(id_, name, upload_timestamp)

        self.small_name = self._get_small_name(name)

    @staticmethod
    def _get_small_name(name):
        return name.split('/')[-2]

    def get_infos(self) -> Tuple:

        return (
            self.name,
            self.small_name,
        )


class File(TreeElement):

    def __init__(self, id_: str, name: str, upload_timestamp: int, size: int, content_type: str):
        super().__init__(id_, name, upload_timestamp)

        self.small_name, self.extension = self._get_small_name_and_extension(name)
        self.size = size
        self.content_type = content_type

    @staticmethod
    def _get_small_name_and_extension(name) -> Tuple[str, str]:
        """Return a tuple of (small_name, extension)"""

        # Get the file name
        file_name = name.split('/')[-1]
        split = file_name.split('.')

        # Get the small name and extension
        small_name = ".".join(split[:-1])
        extension = split[-1]

        return small_name, extension

    def get_infos(self) -> Tuple:

        return (
            self.name,
            self.small_name,
            self.extension,
            self.size,
            self.content_type
        )
