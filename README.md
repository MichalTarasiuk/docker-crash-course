# docker-crash-course

## commands

- docker build -t _name_ _path_ -- create container
- docker images -- list of images
- docker run --name _containerName_ _imageName_ -- create container
- docker run --name _containerName_ -p 4000:4000 -d _imageName_ -- create container
- docker start _containerName_ -- start container
- docker ps -- list of running containers
- docker ps -a -- list of all containers
- docker stop _containerName_ -- stop container
