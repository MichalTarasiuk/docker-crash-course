# docker-crash-course

## commands

- docker build -t _name_ _path_ -- create container
- docker build -t _name:tag_ _path_ -- create container with tag
- docker images -- list of images
- docker run --name _containerName_ _imageName_ -- create container
- docker run --name _containerName_ --rm _imageName_ -- create container and remove when stop
- docker run --name _containerName_ -v _localPath:dockerPath_ _imageName_
- docker run --name _containerName_ -p 4000:4000 -d _imageName_ -- create container
- docker start _containerName_ -- start container
- docker start -i _containerName_ -- start container
- docker ps -- list of running containers
- docker ps -a -- list of all containers
- docker stop _containerName_ -- stop container
- docker image rm _imageName_ -- remove image
- docker image rm _imageName_ _imageName_ -- remove many image
- docker image rm _imageName_ -f -- force image remove
- docker container rm _containerName_ -- remove container
- docker container rm _containerName_ _containerName_ -- remove many containers
- docker system prune -a -- remove all images, containers and volumes
