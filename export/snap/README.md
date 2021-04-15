
# Create a .snap package

### 1. Copy the tarball
Copy the tar.gz archive previously created from the "**./export/tarball**" to "**./export/snap**".
Open the command line in the root directory, and enter the following commands:

```shell
cp -b ./export/tarball/backdriveb2-{version}.tar.gz ./export/snap/
```
### 2. Go to the export/snap directory

Go to the "**./export/snap**" directory
```shell
cd export/snap
```

### 3. Run snapcraft
Be sure to replace the tar.gz file in the snapcraft.yaml file.

Run the following command:
```shell
snapcraft
```

# Useful snap commands

### Pack/unpack snap file:
```shell
# Unpack:
unsquashfs file.snap

# Pack:
snapcraft pack squashfs-root

# Remove directory
rm -rf squashfs-root
```

### Install a snap from a squashfs directory:
```shell
snap try squashfs-root
```

### Install a snap from a local .snap file
```shell
snap install file.snap --dangerous
```

### Publish a snap:
https://snapcraft.io/docs/releasing-your-app