#!/bin/bash 

yarn build && curl --netrc -T build/index.html ftp://lesnimarianka.cz@hosting8.livebox.cz/www/ && curl --netrc -T build/index.js ftp://lesnimarianka.cz@hosting8.livebox.cz/www/