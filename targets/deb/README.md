
# Export as .deb package with *fpm*

fpm documentation: https://fpm.readthedocs.io/en/latest/

### Dependencies
```shell
sudo apt-get install ruby ruby-dev rubygems build-essential
sudo gem install --no-ri --no-rdoc fpm 
```

### Build
1. Go to the project's root directory
2. `fpm -s python -t deb .`