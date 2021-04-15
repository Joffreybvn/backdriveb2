
# Development dependencies

### 1. Python

This package is developed with **Python 3.6**.

#### Pywebview - Linux
Pywebview instructions: https://webpack.js.org/guides/installation/

```shell
pip install pywebview gobject PyGObject
sudo apt-get install pkg-config libcairo2-dev gcc python3-dev libgirepository1.0-dev
```

# BackDrive B2 exportation instructions

1. [Create a tarball](./tarball/README.md) from setup.py.
2. [Create a .snap](./snap/README.md) from the tarball.