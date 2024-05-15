#!/bin/bash 

yarn build && 
curl --netrc -T build/index.html ftp://lesnimarianka.cz@hosting8.livebox.cz/www/ && 
curl --netrc -T "$(find ./build -type f -name "*.js")" ftp://lesnimarianka.cz@hosting8.livebox.cz/www/assets/
curl --netrc -T "$(find ./build -type f -name "*.css")" ftp://lesnimarianka.cz@hosting8.livebox.cz/www/assets/