docker run -it --rm -p 8080:8080 --name vuepress -v $(pwd):/root/src/:rw -v$(pwd)/docs:/root/html/:rw --entrypoint= blasteh/vuepress /bin/sh
