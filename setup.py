
# Build with `python -m build`
# Always prefer setuptools over distutils
from setuptools import setup, find_packages

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="BackDrive B2",
    version="0.1.14",
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
    package_data={
        "backdriveb2": [
            "frontend/*.html",
            "frontend/css/*.css",
            "frontend/fonts/*/*.*",
            "frontend/images/*.*",
            "frontend/js/bundle.js"
        ]
    },
    include_package_data=True,
    python_requires=">=3.9",
)
