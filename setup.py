
# Build with `python setup.py sdist --dist-dir ./export/tarball`
# Always prefer setuptools over distutils
from setuptools import setup, find_packages
import sys
from glob import glob
platform = "unknown"


# Append long description from README.md
with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

# Create data files list
data_files = []
for ext in ("*.html", "*.css", "*.svg", "*.png", "*.js", "*.eot", "*.ttf", "*.woff", "*.woff2", "*.sh", "*.desktop"):
    data_files.extend(glob(f"backdriveb2/**/{ext}", recursive=True))

# Create install require list
install_requires = [
    "pywebview==3.4",
    "b2sdk==1.6.0",
    "wcmatch==8.1.2"
]


# Append platform specific dependencies
if sys.platform == "win32" or sys.platform == "cygwin":
    platform = "windows"
    install_requires += [
        "cefpython3"
    ]

elif sys.platform == "linux":
    platform = "linux"
    install_requires += [
        "cefpython3==66.1",
        "PyGObject==3.40.1"
    ]


setup(
    name=f"backdriveb2_{platform}",
    version="0.1.31",
    author="Joffrey Bienvenu",
    author_email="joffreybvn@gmail.com",
    description="Cross-platform user-friendly client for BackBlaze B2",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/Joffreybvn/backdriveb2",
    project_urls={
        "Bug Tracker": "https://github.com/Joffreybvn/backdriveb2/issues",
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    packages=find_packages(include=["backdriveb2", "backdriveb2.*"]),
    data_files=[(".", data_files)],
    include_package_data=True,
    python_requires=">=3.6",
    install_requires=install_requires
)
