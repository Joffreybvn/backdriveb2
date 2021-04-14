
# Build with `python -m build`
# Always prefer setuptools over distutils
from setuptools import setup, find_packages
from glob import glob


# Append long description from README.md
with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

# Append install requires from requirements.txt
with open("requirements.txt") as f:
    install_requires = list(f.read().splitlines())

# Create data files list
data_files = []
for ext in ("*.html", "*.css", "*.svg", "*.js", "*.eot", "*.ttf", "*.woff", "*.woff2"):
    data_files.extend(glob(f"backdriveb2/**/{ext}", recursive=True))


setup(
    name="BackDrive B2",
    version="0.1.23",
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
    scripts=["start.sh"],
    packages=find_packages(include=["backdriveb2", "backdriveb2.*"]),
    data_files=[(".", data_files)],
    include_package_data=True,
    python_requires=">=3.6",
    install_requires=install_requires
)
